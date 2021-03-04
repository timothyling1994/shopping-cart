import React,{useState} from "react";
import ReactAudioPlayer from 'react-audio-player';



function AudioFiles(props) {

  return (
    <div className="audio-files">
          <div className="file-name">{props.file_name}</div>
          <ReactAudioPlayer
          src={`/assets/${props.samplePackNum}/${props.file_name}`}
          controls
        />
      </div>
  );
}

export default AudioFiles;
