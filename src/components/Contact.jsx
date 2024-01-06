import '../styles/Contact.css';


export default function Contact() {
    return(
        <div className="contact-wrapper">
            <img className='contact-bg' src='./images/img9.jpg' alt='img'></img>
            <div className='contact-left'>

            </div>
            <div className='contact-right'>
            
                <h1>ECRIVEZ-MOI</h1>
                <div>N’hésitez pas à me contacter si vous avez une demande ou une question
                     ; je me ferais un plaisir de vous répondre rapidement. </div>
                    <p>32 Rue du dragon, 75006</p>
                    <p>Email: contact@victorbellot.com</p>
                <form className='contact-form'>
                    <input className='form-name' placeholder='Name'></input>
                    <input className='form-surname' placeholder='Surname'></input>
                    <input className='form-telefon' placeholder='Telefon'></input>
                    <input className='form-email' placeholder='Email'></input>
                    <button className='form-btn'>Send</button>
                </form>
            </div>
        </div>
    )
}