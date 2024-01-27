import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';
import Carousel from './carousel/Carousel';
import FooterHome from './home-components/FooterHome';

export default function Portfolio() {



    return(
        <div className="portfolio-wrapper">
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
            <div className='section-wrapper'>
                <Carousel className='slider'>
                    <div className='item item-1'><img className='slider-img1' src='./images/slider-img1.JPG' alt='img'></img></div>
                    <div className='item item-2'><img className='slider-img2' src='./images/slider-img2.JPG' alt='img'></img></div>
                    <div className='item item-3'><img className='slider-img3' src='./images/slider-img3.JPG' alt='img'></img></div>
                </Carousel>
            </div>
            <FooterHome />
        </div>
    )
}