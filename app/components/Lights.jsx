'use client'



export default function Lights() {

    return (
        <>
            <ambientLight intensity={0.3} />
            {/* <directionalLight
                castShadow
                position={[10, 10, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            /> */}
            {/* <directionalLight position={[0, 10, 0]} intensity={1.5} /> */}
            {/* <spotLight position={[15, 20, 5]} penumbra={1} /> */}
        </>
    )
 
  
}