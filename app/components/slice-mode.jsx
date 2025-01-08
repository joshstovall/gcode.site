'use client'

import SliceMetadata from './slice-metadata';
import FileMetadata from './file-metadata';

export default function SliceMode({
  metadata,
  gcode
}) {

  return (
    <div className=" bottom-0  z-10">
      <SliceMetadata metadata={metadata} gcode={gcode}/>
      <FileMetadata metadata={metadata} gcode={gcode}/>
    </div>
  )

}