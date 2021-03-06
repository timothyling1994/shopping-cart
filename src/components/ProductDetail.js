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

	const productDetailStyle = {
		//backgroundImage: `url(/assets/${samplePackNum}.jpg)`,
		width:'50vw',
		height:'33vw',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundImage: `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.6)), url(/assets/${samplePackNum}.jpg)`,
	};

//<div className="button-row"><Link to="/store" className="go-back">GO BACK</Link></div>
//<img className="productItemPic" src={`/assets/${samplePackNum}.jpg`}></img>
  return (
    <div className="productDetail">
    	<NavBar getCartItems={props.getCartItems}/>
    	<div className="product-item-container">
    		<div className="sample-pack-name">{samplePackName.toUpperCase()}</div>
    		<div className="background-image-container" style={productDetailStyle}>
	    		<div className="audio-files-container">
		    		{audiofiles.map((file)=>{
		    			return <AudioFiles key={uniqid()} samplePackNum={samplePackNum}file_name={file}/>
		    		})}
		    	</div>
	    	</div>
	    	<div className="button-container">
		    	<div className="button-row">
		    		<div className="add-to-cart" onClick={addToCart}>ADD TO CART</div>
		    		<Link to="/store" className="back">BACK</Link>
		    	</div>
		
		    </div>
    	</div>
    </div>
  );
}

export default ProductDetail;
