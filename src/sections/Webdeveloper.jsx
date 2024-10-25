
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
            <div className='contact'></div>

        </div>
    )
}

export default Webdeveloper;