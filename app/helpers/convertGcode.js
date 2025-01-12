'use client'

import * as THREE from 'three';
import { CuraWASM } from 'cura-wasm';
import { resolveDefinition } from 'cura-wasm-definitions';

export async function convertGcode(stl_url, progressCallback, doneCallback, transform) {

    return new Promise(async (resolve, reject) => {

        let mat = transform
        let translation = new THREE.Vector3(),
            rotation = new THREE.Quaternion(),
            scale = new THREE.Vector3();

        try {
            const decomposed = mat.decompose(translation, rotation, scale);
            console.log(decomposed)

        } catch (e) {
            console.log(e)
        }


        /* stuff using username, password */
        const slicer = new CuraWASM({
            /**
             * Specify Cura Engine launch arguments (Identical to desktop Cura Engine).
             * 
             * If you find that "-s" overrides aren't taking effect, make sure that you
             * order your arguments correctly.
             * 
             * NOTE: You CANNOT specify both this setting and overrides!
             */
            //  command: 'slice -j definitions/printer.def.json -o Model.gcode -s layer_height=0.06 -l Model.stl',

            /*
             * The 3D printer definition to slice for (See the cura-wasm-definitions
             * repository or https://github.com/cloud-cnc/cura-wasm-definitions
             * for a list of built-in definitions)
             */

            definition: resolveDefinition('creality_ender3'), // ultimaker2

            /*
             * Overrides for the current 3D printer definition (Passed to Cura Engine
             * with the -s CLI argument)
             * 
             * NOTE: You CANNOT specify both this setting and launch arguments!
             */
            overrides: [
                // {
                //     scope: 'e0',
                //     key: 'center_object',
                //     value: false,
                // }, 
                {
                    //     scope: 'e0',
                    //     key: 'layer_height',
                    //     value: 0.2
                    // }, {
                    scope: 'e0',
                    key: 'mesh_position_x',
                    value: translation.x - 100
                }, {
                    scope: 'e0',
                    key: 'mesh_position_y',
                    value: -translation.z
                }, {
                    scope: 'e0',
                    key: 'mesh_position_z',
                    value: translation.y + 100
                },
                // {
                //     scope: 'e0',
                //     key: 'mesh_rotation_delta',
                //     value: transform.rotation[1] // Y-axis rotation in degrees
                // },
            ],

            /**
             * Wether or not to transfer the input STL ArrayBuffer to the worker thread
             * (Prevents duplicating large amounts of memory but empties the ArrayBuffer
             * on the main thread preventing other code from using the ArrayBuffer)
             */
            transfer: true,

            /*
             * Wether to enable verbose logging (Useful for debugging; allows Cura
             * Engine to directly log to the console)
             */
            verbose: false
        });

        //Load your STL as an ArrayBuffer
        const res = await fetch(stl_url);
        const stl = await res.arrayBuffer();

        //Progress logger (Ranges from 0 to 100)
        slicer.on('progress', percent => {
            progressCallback(percent);
        });

        //Slice (This can take multiple minutes to resolve!)
        const { gcode, metadata } = await slicer.slice(stl, 'stl');

        //Dispose (Reccomended but not necessary to call/intended for SPAs)
        slicer.destroy();

        resolve({ gcode, metadata })

    });

}