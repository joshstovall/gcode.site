"use client";

import React, { useState } from 'react';

import styles from './page.module.css'
import Scene from './scene'
import SliceMetadata from './components/slice-metadata'
import LoginButtons from './components/login-buttons';
import SocialButtons from './components/social-buttons';
import ToastTop from './components/toast';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import FileMetadata from './components/file-metadata';

import StartMode from './components/start-mode';
import EditMode from './components/edit-mode';
import SliceMode from './components/slice-mode';

import { convertGcode } from './helpers/convertGcode';

// import { convertStlToGcode } from './lib/slicer';

export default function Home() {

  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [slicing, setSlicing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [mode, setMode] = useState('start');
  const [file, setFile] = useState(null);
  const [gcode, setGcode] = useState();
  const [transform, setTransform] = useState({ position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] });

  const [metadata, setMetadata] = useState(
    {
      filamentUsage: 0,
      flavor: "",
      material1Usage: 0,
      material2Usage: 0,
      nozzleSize: 0,
      printTime: 0
    }
  );

  const handleSlice = async (url_) => {

    setSlicing(true);

    console.log('handle slice', url_);
    let {
      gcode,
      metadata
    } = await convertGcode(
      url_,
      setProgress,
      (metadata) => {
        console.log('metadata', metadata);
      },
      transform
    );

    setMetadata(metadata);
    setGcode(gcode);
    setSlicing(false);
  }

  return (
    <main className={styles.main}>

      {/* <ToastTop /> */}
      {/* <Footer /> */}
      <Sidebar />

      {
        mode === 'start' &&
        <StartMode
          url={url}
          setUrl={setUrl}
          loading={loading}
          setLoading={setLoading}
          loaded={loaded}
          setLoaded={setLoaded}
          progress={progress}
          setProgress={setProgress}
          mode={mode}
          setMode={setMode}
          file={file}
          setFile={setFile}
        />
      }
      {
        mode === 'edit' &&
        <EditMode
          url={url}
          setUrl={setUrl}
          loading={loading}
          setLoading={setLoading}
          loaded={loaded}
          setLoaded={setLoaded}
          progress={progress}
          setProgress={setProgress}
          metadata={metadata}
          setMetadata={setMetadata}
          slicing={slicing}
          setSlicing={setSlicing}
          file={file}
          setFile={setFile}
          sliceCallback={
            () => handleSlice(url)
          }
        />
      }
      {
        mode === 'slice' &&
        <SliceMode metadata={metadata} gcode={gcode}/>
      }


      <div className={styles.canvas}>
        <Scene
          stl={url}
          file={file}
          gcode={gcode}
          mode={mode}
          setMode={setMode}
          progressCallback={(percent) => {
            setProgress(percent)
          }}
          doneCallback={(metadata) => {
            setLoading(false);
            setMetadata(metadata)
            setLoaded(true);
            setMode('slice');
          }}
          transform={transform}
          transformCallback={(transform) => {
            console.log('transform', transform);
            setTransform(transform);
          
          }
        }

        />
      </div>

    </main>
  )

}
