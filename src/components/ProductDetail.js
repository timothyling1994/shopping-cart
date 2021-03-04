import React,{useState, memo} from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";
import samplePackFiles from '../sample_pack_files.js';
import AudioFiles from "./AudioFiles.js";
import uniqid from "uniqid";
import productList from "../productList.js";


function ProductDetail(props) {

	const allProductsObj = props.getAllProductItems();

	const samplePackNum = props.match.params.id;
	let samplePackName="";
	let samplePackPrice=0;

	Object.keys(allProductsObj).map(key=>{
		if(allProductsObj[key].samplePackNum == samplePackNum)
		{
			samplePackName = key;
			samplePackPrice = allProductsObj[key].samplePackPrice;
		}
	});

	const audioFileNames = samplePackFiles.samplePackFiles[samplePackNum];
	const [audiofiles,setAudioFiles]=useState(audioFileNames);
	
	const addToCart=()=>{
		props.addToCart({
			[samplePackName] : {
				"samplePackNum":samplePackNum,
				"samplePackPrice":samplePackPrice,
				"quantity":1, 
				} 
			}
		);
	};

  return (
    <div className="productDetail">
    	<NavBar getCartItems={props.getCartItems}/>
    	<div className="product-item-container">
    		<div className="sample-pack-name">{samplePackName.toUpperCase()}</div>
    		<img className="productItemPic" src={`/assets/${samplePackNum}.jpg`}></img>
    		<div className="audio-files-container">
	    		{audiofiles.map((file)=>{
	    			return <AudioFiles key={uniqid()} samplePackNum={samplePackNum}file_name={file}/>
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
