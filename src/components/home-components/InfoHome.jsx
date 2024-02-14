import './InfoHome.css';
import { useState } from 'react';
import Modal from './Modal';

export default function InfoHome() {

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(src) {
        setModalActive(true)
        setImgSrc(src)
    }

    return(
        <div className="infohome-wrapper">
            <div className='infohome'> 
                <img onClick={() => handleClick('./images/img17.JPG')} src='./images/img17.JPG' className='img17' alt='img'></img>
                <img onClick={() => handleClick('./images/img18.JPG')} src='./images/img18.JPG' className='img18' alt='img'></img>
                <img onClick={() => handleClick('./images/DSC_7212.JPG')} src='./images/DSC_7212.JPG' className='img19' alt='img'></img>
                <img onClick={() => handleClick('./images/img19.JPG')} src='./images/img19.JPG' className='img20' alt='img'></img>
            </div>
        <Modal active={modalActive} setActive={setModalActive}>
            <img  src={imgSrc}  alt='img' className='pop-img'></img> 
        </Modal>
        </div>            
    )
}