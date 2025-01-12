'use client'

import StlMetadata from './stl-metadata';
import SliceButton from './slice-button';
import Progress from './progress';

export default function EditMode(
  {
    file,
    sliceCallback,
    slicing,
    progress
  }
) {

  return (
    <div className="absolute bottom-0 w-screen h-screen">
      <StlMetadata
        filename={file.name}
      />
      <Progress
        percent={progress}
        show={slicing}
      />
      <SliceButton
        sliceCallback={sliceCallback}
        slicing={slicing}
      />
    </div>
  )
}