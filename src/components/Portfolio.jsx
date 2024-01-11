import '../styles/Portfolio.css';
import { Link } from 'react-router-dom';
import People from './portfolio-components/People';
import Animals from './portfolio-components/Animals';
import Nature from './portfolio-components/Nature';

export default function Portfolio() {
    return(
        <div className="portfolio-wrapper">
            <div className="portfolio">
                <Link className='people-link' alt='people' to='People'>People</Link>
                <Link className='animals-link' alt='animals' to='Animals'>Animals</Link> 
                <Link className='nature-link' alt='nature' to='Nature'>Nature</Link>             
            </div>
            <div className='section-wrapper'>
                <People />
                <Animals />
                <Nature />
            </div>
        </div>
    )
}