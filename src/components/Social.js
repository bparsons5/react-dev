
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdCameraRoll } from "react-icons/md";

import '../css/social.css';

const Social = () => {
  return (
    <div id='social'>
        <a target="_blank" href="https://github.com/bparsons5"><FaGithub /></a>
        <a target="_blank" href="https://www.linkedin.com/in/robertbrettparsons/"><FaLinkedin /></a>
        <a target="_blank" href="https://www.instagram.com/rbrettparsons/?hl=en"><FaInstagram /></a>
        <a target="_blank" href="https://rbrettparsons.com"><MdCameraRoll /></a>
    </div>
  )
}

export default Social