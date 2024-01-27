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
            <Modal active={modalActive} setActive={setModalActive}>
                <img  src={imgSrc}  alt='img' className='pop-img'></img>           
            </Modal>
            <FooterHome />
        </div>
    )
}