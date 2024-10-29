import '../styles/footer.css'


function Footer(){
    return(
        <footer>
            <ul id='footer-list'>
                <h3>Ignacio Toro´s portfolio</h3>
                <a href='#home'>Home</a>
                <a href='#about-me'>About me</a>
                <a href='#projects'>Projects</a>
            </ul>
            <ul className='footer-contact'>
                <h3>Contact</h3>
                <a href='https://github.com/Nachotoro' target="_blank">Github</a>
                <a href='https://www.behance.net/ignacioto' target="_blank">Behance</a>
                <a href='https://www.linkedin.com/in/ignacio-toro-l%C3%B3pez-a84649144/' target="_blank">Linkedin</a>
            </ul>

        </footer>
    )
}

export default Footer;