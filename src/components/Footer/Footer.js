import './Footer.css';
import { FaInstagramSquare ,FaLinkedin , FaGithub, FaGooglePlay } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='social'>
        <a href='https://www.instagram.com/horlankew/'><FaInstagramSquare /></a>
        <a href='https://github.com/Horlankew'><FaGithub /></a>
        <a href='https://www.linkedin.com/in/horlan-kelwyn-palmeira-/'><FaLinkedin /></a>
        <a href='https://play.google.com/store/apps/category/GAME'><FaGooglePlay /></a>
      </div>
      <span>© 2021 Hokewland. Os jogos são propriedade de seus respectivos donos.</span>
      <span>Hokewland of America Inc. | A sede está localizada em Balneário Camboriú, Santa Catarina (BRL) | Assistência</span>
    </div>
  )
}