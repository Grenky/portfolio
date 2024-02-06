import './Nature.css';
import { Link } from 'react-router-dom';
import Modal from '../home-components/Modal';
import React, {useState} from 'react';
import FooterHome from '../home-components/FooterHome';

export default function Nature() {

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(src) {
        setModalActive(true)
        setImgSrc(src)
    }

    return(
        <div className="nature-wrapper">
             <div className="portfolio">
                <Link className='people-link' alt='people' to='/People'>
                    <button className='people-btn'>People</button>
                </Link>
                <Link className='animals-link' alt='animals' to='/Animals'>
                    <button className='animals-btn'>Animals</button>
                </Link> 
                <Link className='nature-link' alt='nature' to='/Nature'>
                    <button className='nature-btn'>Nature</button>
                </Link>             
            </div>      
            <img onClick={() => handleClick('./images/img73.JPG')} className='people1' src='./images/img73.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img74.JPG')} className='people1' src='./images/img74.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img75.JPG')} className='people1' src='./images/img75.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7158.JPG')} className='people1' src='./images/DSC_7158.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7169.JPG')} className='people1' src='./images/DSC_7169.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7180.JPG')} className='people1' src='./images/DSC_7180.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7178.JPG')} className='people1' src='./images/DSC_7178.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7179.JPG')} className='people1' src='./images/DSC_7179.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7182.JPG')} className='people1' src='./images/DSC_7182.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7183.JPG')} className='people1' src='./images/DSC_7183.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7186.JPG')} className='people1' src='./images/DSC_7186.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7187.JPG')} className='people1' src='./images/DSC_7187.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7188.JPG')} className='people1' src='./images/DSC_7188.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7190.JPG')} className='people1' src='./images/DSC_7190.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7196.JPG')} className='people1' src='./images/DSC_7196.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7197.JPG')} className='people1' src='./images/DSC_7197.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7198.JPG')} className='people1' src='./images/DSC_7198.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7200.JPG')} className='people1' src='./images/DSC_7200.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7206.JPG')} className='people1' src='./images/DSC_7206.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7209.JPG')} className='people1' src='./images/DSC_7209.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7210.JPG')} className='people1' src='./images/DSC_7210.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7211.JPG')} className='people1' src='./images/DSC_7211.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7213.JPG')} className='people1' src='./images/DSC_7213.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7216.JPG')} className='people1' src='./images/DSC_7216.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7220.JPG')} className='people1' src='./images/DSC_7220.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7238.JPG')} className='people1' src='./images/DSC_7238.JPG' alt='img'></img>       
            <img onClick={() => handleClick('./images/IMG_3042.JPG')} className='people1' src='./images/IMG_3042.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3064.JPG')} className='people1' src='./images/IMG_3064.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3082.JPG')} className='people1' src='./images/IMG_3082.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3083.JPG')} className='people1' src='./images/IMG_3083.JPG' alt='img'></img>       
            <img onClick={() => handleClick('./images/IMG_3084.JPG')} className='people1' src='./images/IMG_3084.JPG' alt='img'></img>       
            <img onClick={() => handleClick('./images/IMG_3089.JPG')} className='people1' src='./images/IMG_3089.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3090.JPG')} className='people1' src='./images/IMG_3090.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3080.JPG')} className='people1' src='./images/IMG_3080.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3078.JPG')} className='people1' src='./images/IMG_3078.JPG' alt='img'></img>
            <Modal active={modalActive} setActive={setModalActive}>
                <img  src={imgSrc}  alt='img' className='pop-img'></img>           
            </Modal>
            <FooterHome />
        </div>
    )
}