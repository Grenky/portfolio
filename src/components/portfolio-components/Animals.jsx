import './Animals.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Modal from '../home-components/Modal';
import FooterHome from '../home-components/FooterHome';

export default function Animals() {

    
    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(src) {
        setModalActive(true)
        setImgSrc(src)
    }


    return(
        <div className="animals-wrapper">
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
            <img onClick={() => handleClick('./images/img63.JPG')} className='people1' src='./images/img63.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img64.JPG')} className='people1' src='./images/img64.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img65.JPG')} className='people1' src='./images/img65.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img66.JPG')} className='people1' src='./images/img66.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img67.JPG')} className='people1' src='./images/img67.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img68.JPG')} className='people1' src='./images/img68.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img69.JPG')} className='people1' src='./images/img69.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img70.JPG')} className='people1' src='./images/img70.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img71.JPG')} className='people1' src='./images/img71.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img72.JPG')} className='people1' src='./images/img72.JPG' alt='img'></img>
            <Modal active={modalActive} setActive={setModalActive}>
                <img src={imgSrc} alt='img' className='pop-img'></img>
            </Modal>
            <FooterHome />
        </div>
    )
}