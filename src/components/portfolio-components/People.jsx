import './People.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react';
import Modal from '../home-components/Modal';
import FooterHome from '../home-components/FooterHome';

export default function People() {

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState('');

    function handleClick(src) {
        setModalActive(true)
        setImgSrc(src)
    }

    return(
        <div className="people-wrapper">
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
            <img onClick={() => handleClick('./images/img21.JPG')} className='people1' src='./images/img21.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img22.JPG')} className='people1' src='./images/img22.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img23.JPG')} className='people1' src='./images/img23.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img24.JPG')} className='people1' src='./images/img24.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img25.JPG')} className='people1' src='./images/img25.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img26.JPG')} className='people1' src='./images/img26.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img27.JPG')} className='people1' src='./images/img27.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img28.JPG')} className='people1' src='./images/img28.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img29.JPG')} className='people1' src='./images/img29.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img30.JPG')} className='people1' src='./images/img30.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img31.JPG')} className='people1' src='./images/img31.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img32.JPG')} className='people1' src='./images/img32.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img33.JPG')} className='people1' src='./images/img33.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img34.JPG')} className='people1' src='./images/img34.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img35.JPG')} className='people1' src='./images/img35.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img36.JPG')} className='people1' src='./images/img36.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img37.JPG')} className='people1' src='./images/img37.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img38.JPG')} className='people1' src='./images/img38.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img39.JPG')} className='people1' src='./images/img39.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img40.JPG')} className='people1' src='./images/img40.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img41.JPG')} className='people1' src='./images/img41.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img42.JPG')} className='people1' src='./images/img42.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img43.JPG')} className='people1' src='./images/img43.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img44.JPG')} className='people1' src='./images/img44.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img45.JPG')} className='people1' src='./images/img45.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img46.JPG')} className='people1' src='./images/img46.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img47.JPG')} className='people1' src='./images/img47.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img48.JPG')} className='people1' src='./images/img48.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img49.JPG')} className='people1' src='./images/img49.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img51.JPG')} className='people1' src='./images/img51.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img52.JPG')} className='people1' src='./images/img52.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img53.JPG')} className='people1' src='./images/img53.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img54.JPG')} className='people1' src='./images/img54.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img55.JPG')} className='people1' src='./images/img55.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img56.JPG')} className='people1' src='./images/img56.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img57.JPG')} className='people1' src='./images/img57.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img58.JPG')} className='people1' src='./images/img58.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img59.JPG')} className='people1' src='./images/img59.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img60.JPG')} className='people1' src='./images/img60.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/img61.JPG')} className='people1' src='./images/img61.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7146.JPG')} className='people1' src='./images/DSC_7146.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3017.JPG')} className='people1' src='./images/IMG_3017.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/IMG_3000.JPG')} className='people1' src='./images/IMG_3000.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/DSC_7227.JPG')} className='people1' src='./images/DSC_7227.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/20220808132012_IMG_0198.JPG')} className='people1' src='./images/20220808132012_IMG_0198.JPG' alt='img'></img>
            <img onClick={() => handleClick('./images/20221024091610_IMG_2147.JPG')} className='people1' src='./images/20221024091610_IMG_2147.JPG' alt='img'></img>             
            <Modal active={modalActive} setActive={setModalActive}>
                <img  src={imgSrc}  alt='img' className='pop-img'></img>
            </Modal>
            <FooterHome />
        </div>
    )
}