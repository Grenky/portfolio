import './FirstHome.css';

export default function FirstHome() {
    return(
        <div className="firsthome-wrapper">
            <div className='firsthome-title-box'>
                <h1>ANNA KAKAMA</h1>
                <p>PHOTOGRAPHE</p>
            </div>
            <div className='firsthome-title-box1'>  
                <img src='./images/img1.JPG' className='img1' alt='img'></img>
                <img src='./images/img3.JPG' className='img3' alt='img'></img>
            </div>
            <img src='./images/img2.JPG' className='img2' alt='img'></img>
            <div className='firsthome-title-box2'>  
                <img src='./images/img4.JPG' className='img4' alt='img'></img>
                <img src='./images/img6.JPG' className='img6' alt='img'></img>
            </div>
        </div>
    )
}