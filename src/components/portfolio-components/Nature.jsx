import './Nature.css';
import { Link } from 'react-router-dom';

export default function Nature() {
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
            <img className='people1' src='./images/img73.JPG' alt='img'></img>
            <img className='people1' src='./images/img74.JPG' alt='img'></img>
            <img className='people1' src='./images/img75.JPG' alt='img'></img>
        </div>
    )
}