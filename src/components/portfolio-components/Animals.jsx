import './Animals.css';
import { Link } from 'react-router-dom';

export default function Animals() {
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
            <img className='people1' src='./images/img63.JPG' alt='img'></img>
            <img className='people1' src='./images/img64.JPG' alt='img'></img>
            <img className='people1' src='./images/img65.JPG' alt='img'></img>
            <img className='people1' src='./images/img66.JPG' alt='img'></img>
            <img className='people1' src='./images/img67.JPG' alt='img'></img>
            <img className='people1' src='./images/img68.JPG' alt='img'></img>
            <img className='people1' src='./images/img69.JPG' alt='img'></img>
            <img className='people1' src='./images/img70.JPG' alt='img'></img>
            <img className='people1' src='./images/img71.JPG' alt='img'></img>
            <img className='people1' src='./images/img72.JPG' alt='img'></img>
        </div>
    )
}