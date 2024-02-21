import React,{useState} from "react";
import "./product-picture.css";

const ProductPicture=(props)=>{
    const {productImage}=props;
    const{
        imageArray=[]
    }=productImage;
    const [selectedThumbnail, setSelectedThumbnail] = useState(0);
    return(
        <div className='product-pictures-main'>
            <div className='row'>
                <div className='col-md-2'>
                    {imageArray.map((phoneImg, index) => {
                        return (
                            <div
                                key={phoneImg}
                                className={`product-thumbnail mb-3 ${
                                    selectedThumbnail === index
                                        ? "selected"
                                        : ""
                                } `}
                                onClick={() => {
                                    setSelectedThumbnail(index);
                                }}
                            >
                                <img
                                    src={phoneImg}
                                    className='img-fluid phone-img'
                                    alt='phone'
                                />
                            </div>
                        );
                    })}
                </div>
                <div className='col-md-10 phone-container'>
                    <img
                        src={imageArray[selectedThumbnail]}
                        alt='phone main'
                        className='img-fluid phone-img'
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductPicture;