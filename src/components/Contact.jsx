import '../styles/Contact.css';


export default function Contact() {
    return(
        <div className="contact-wrapper"> 
            <div className='contact-left'>
            <img className='contact-bg' src='./images/img9.jpg' alt='img'></img>
            </div>
            <div className='contact-right'>
                <h1>WRITE TO ME </h1>
                <div>Do not hesitate to contact me if you have a request or question; I would be happy to respond to you quickly.
                     Or  you can write me right on email.</div>
                    <p>Email: annkakama5@gmail.com</p>
                <form className='contact-form'>
                    <input className='form-name' placeholder='Name'></input>
                    <input className='form-surname' placeholder='Surname'></input>
                    <input className='form-email' placeholder='Email'></input>
                    <button className='form-btn'>Send</button>
                </form>
            </div>
        </div>
    )
}