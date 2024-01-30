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

                        <input type="hidden" name="project_name" value="portfolio"></input>
                        <input type="hidden" name="admin_email" value="annkakama5@gmail.com"></input>
                        <input type="hidden" name="form_subject" value="Contact form"></input>

                        <input name='name' className='form-name' placeholder='Name'></input>
                        <input name='email' className='form-email' placeholder='Email'></input>
                        <input name='message' className='form-surname' placeholder='Surname'></input>

                        <button className='form-btn'>Send</button>
                    </form>

                   
                </div>
             
        </div>
    )
}