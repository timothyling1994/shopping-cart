import React,{useState} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import samplePackFiles from '../sample_pack_files.js';
import ListAudioFiles from "./ListAudioFiles.js";
import uniqid from "uniqid";


function ProductDetail(match) {
	console.log(match);
	const samplePackNum = match.match.params.id;
	const audioFileNames = samplePackFiles.samplePackFiles[samplePackNum];
	const [audiofiles,setAudioFiles]=useState(audioFileNames);

  return (
    <div className="productDetail">
    	<NavBar/>
    	<div className="product-item-container">
    		<div className="sample-pack-name">{samplePackNum}</div>
    		<img className="productItemPic" src={`/assets/${samplePackNum}.jpg`}></img>
    		<div className="audio-files-container">
	    		{audiofiles.map((file)=>{
	    			return <ListAudioFiles key={uniqid()} samplePackNum={samplePackNum}file_name={file}/>
	    		})}
	    	</div>
    	</div>
    </div>
  );
}

export default ProductDetail;
