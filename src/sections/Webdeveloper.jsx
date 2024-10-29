import '../styles/webdeveloper.css';

import React, { useState } from 'react';

function Webdeveloper() {
  const [copied, setCopied] = useState(false); // Estado para mostrar el tooltip

  const handleCopy = async () => {
    const email = 'ignacio.thoro@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true); // Muestra el mensaje de copiado
      setTimeout(() => setCopied(false), 2000); // Oculta después de 2 segundos
    } catch (error) {
      console.error('Error al copiar el correo: ', error);
    }
  };

  return (
    <div className="webdeveloper">
      <div className='margin-left'></div>
      <div className='line'></div>
      <div className='symbols'>
        <img src='src/assets/icons/OBJECTS.svg' alt="icon-objects" />
        <div className='line-horizontal'></div>
        <img src='src/assets/icons/inter.svg' alt="icon-inter" />
        <div className='line-horizontal'></div>
        <img src='src/assets/icons/x-lines.svg' alt="icon-x-lines" />
      </div>
      <div className='line'></div>
      <div className='ux-ui'>
        <div className='text-container'>
          <img src='src/assets/icons/croces.svg' alt="icon-croces" />
          <h2>UX/UI Designer & Web developer</h2>
        </div>
        <div className='text-container'>
          <img src='src/assets/icons/croces.svg' alt="icon-croces" />
          <h3>Based in Santiago, Chile</h3>
        </div>
      </div>
      <div className='line'></div>
      <div className='contact'>
        <div className='title-contact'>
          <img src='src/assets/icons/hand-icon.svg' alt="hand-icon" />
          <h2>Contact me</h2>
        </div>
        <div className='icons-contact'>
          <a href='https://github.com/Nachotoro' target="_blank"><img  src='src/assets/icons/github.svg' alt="github-icon" /></a>
          <a href='https://www.behance.net/ignacioto' target="_blank"><img src='src/assets/icons/behance.svg' alt="behance-icon" /></a>
          <a href='https://www.linkedin.com/in/ignacio-toro-l%C3%B3pez-a84649144/' target="_blank"><img src='src/assets/icons/linkedin.svg' alt="linkedin-icon" /></a>
        </div>
        <div className='mail-contact'>
          <img src='src/assets/icons/mail.svg' alt="mail-icon" />
          <div className="email-container" onClick={handleCopy}>
            <h3>ignacio.thoro@gmail.com</h3>
            {copied && <span className="tooltip">Mail copied</span>}
          </div>
          <img src='src/assets/icons/content_copy.svg' alt="content-copy-icon" />
        </div>
      </div>
    </div>
  );
}

export default Webdeveloper;
