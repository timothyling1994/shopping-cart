import React,{useState} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import samplePackFiles from '../sample_pack_files.js';
import ListAudioFiles from "./ListAudioFiles.js";
import uniqid from "uniqid";


function ProductDetail(props) {
	
	const samplePackNum = props.match.params.id;
	const audioFileNames = samplePackFiles.samplePackFiles[samplePackNum];
	const [audiofiles,setAudioFiles]=useState(audioFileNames);


	const addToCart=()=>{
		props.addToCart(samplePackNum);
	};

  return (
    <div className="productDetail">
    	<NavBar getCartItems={props.getCartItems}/>
    	<div className="product-item-container">
    		<div className="sample-pack-name">{samplePackNum}</div>
    		<img className="productItemPic" src={`/assets/${samplePackNum}.jpg`}></img>
    		<div className="audio-files-container">
	    		{audiofiles.map((file)=>{
	    			return <ListAudioFiles key={uniqid()} samplePackNum={samplePackNum}file_name={file}/>
	    		})}
	    	</div>
	    	<div className="button-container">
		    	<div className="button-row"><div className="add-to-cart" onClick={addToCart}>ADD TO CART</div></div>
		    	<div className="button-row"><Link to="/store" className="go-back">GO BACK</Link></div>
		    </div>
    	</div>
    </div>
  );
}

export default ProductDetail;
