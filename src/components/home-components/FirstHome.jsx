import { useState } from 'react';
import './media.css';
import Modal from './Modal';
import './FirstHome.css';


export default function FirstHome() {

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(src) {
        setModalActive(true)
        setImgSrc(src)
    }


    return(
        <div className="firsthome-wrapper">
            <div className='firsthome-title-box1'>  
                <img onClick={() => handleClick('./images/img1.JPG')} src='./images/img1.JPG' className='img1' alt='img'></img>
                <img onClick={() => handleClick('./images/img3.JPG')} src='./images/img3.JPG' className='img2' alt='img'></img>
                <img onClick={() => handleClick('./images/img2.JPG')} src='./images/img2.JPG' className='img3' alt='img'></img>
                <img onClick={() => handleClick('./images/IMG_3064.JPG')} src='./images/IMG_3064.JPG' className='img4' alt='img'></img>
              
            </div>
            
            <div className='firsthome-title-box2'>  
                <img onClick={() => handleClick('./images/DSC_7131 full.jpg')} src='./images/DSC_7131 full.jpg' className='img5' alt='img'></img>
                <img onClick={() => handleClick('./images/img6.JPG')} src='./images/img6.JPG' className='img6' alt='img'></img>
                <img onClick={() => handleClick('./images/img10.JPG')} src='./images/img10.JPG' className='img7' alt='img'></img>
                <img onClick={() => handleClick('./images/DSC_7225.JPG')} src='./images/DSC_7225.JPG' className='img8' alt='img'></img>
            </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <img  src={imgSrc}  alt='img' className='pop-img'></img>
        </Modal>
        </div>
    )
}