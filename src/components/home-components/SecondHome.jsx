import Modal from './Modal';
import './SecondHome.css';
import { useState } from 'react';

export default function SecondHome() {

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(src) {
        setModalActive(true)
        setImgSrc(src)
    }

    return(
        <div className="secondhome-wrapper"> 
            <div className='secondhome'> 
                <img onClick={() => handleClick('./images/img11.JPG')} src='./images/img11.JPG' className='img11' alt='img'></img>
                <img onClick={() => handleClick('./images/img12.JPG')}  src='./images/img12.JPG' className='img12' alt='img'></img>
                <img onClick={() => handleClick('./images/img13.JPG')}  src='./images/img13.JPG' className='img13' alt='img'></img>
                <img onClick={() => handleClick('./images/DSC_7211.JPG')}  src='./images/DSC_7211.JPG' className='img13' alt='img'></img>
                <img onClick={() => handleClick('./images/img14.JPG')}  src='./images/img14.JPG' className='img14' alt='img'></img>
                <img onClick={() => handleClick('./images/img15.JPG')}  src='./images/img15.JPG' className='img15' alt='img'></img>
                <img onClick={() => handleClick('./images/DSC_7209.JPG')}  src='./images/DSC_7209.JPG' className='img16' alt='img'></img>
                <img onClick={() => handleClick('./images/img16.JPG')}  src='./images/img16.JPG' className='img16' alt='img'></img>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <img  src={imgSrc}  alt='img' className='pop-img'></img>
            </Modal>
        </div>
    )
}