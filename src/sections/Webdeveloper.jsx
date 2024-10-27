
import '../styles/webdeveloper.css';
function Webdeveloper(){
    return(
        <div className="webdeveloper">
            <div className='margin-left'></div>
            <div className='line'></div>
            <div className='symbols'>
                <img src='src/assets/icons/OBJECTS.svg'></img>
                <div className='line-horizontal'></div>
                <img src='src/assets/icons/inter.svg'></img>
                <div className='line-horizontal'></div>
                <img src='src/assets/icons/x-lines.svg'></img>
            </div>
            <div className='line'></div>
            <div className='ux-ui'>
                <div className='text-container'>
                    <img src='src/assets/icons/croces.svg'></img>
                    <h2>UX/UI Designer & Web developer</h2>
                </div>
                <div className='text-container'>
                    <img src='src/assets/icons/croces.svg'></img>
                    <h3>Based in Santiago, Chile</h3>
                </div>
            </div>
            <div className='line'></div>
            <div className='contact'>
                <div className='title-contact'>
                    <img src='src/assets/icons/hand-icon.svg'></img>
                    <h2>Contact me</h2>
                </div>
                <div className='icons-contact'>
                    <img src='src/assets/icons/github.svg'></img>
                    <img src='src/assets/icons/behance.svg'></img>
                    <img src='src/assets/icons/linkedin.svg'></img>
                </div>
                <div className='mail-contact'>
                    <img src='src/assets/icons/mail.svg'></img>
                    <h3>ignacio.thoro@gmail.com</h3>
                </div>
            </div>

        </div>
    )
}

export default Webdeveloper;