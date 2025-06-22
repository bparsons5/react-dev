import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdCameraRoll } from 'react-icons/md';

import '../css/social.css';

const Social = () => (
	<div id="social">
		<a target="_blank" href="https://github.com/bparsons5" rel="noreferrer"><FaGithub /></a>
		<a target="_blank" href="https://www.linkedin.com/in/rbrettparsons/" rel="noreferrer"><FaLinkedin /></a>
		<a target="_blank" href="https://www.instagram.com/rbrettparsons/?hl=en" rel="noreferrer"><FaInstagram /></a>
		<a target="_blank" href="https://rbrettparsons.com" rel="noreferrer"><MdCameraRoll /></a>
	</div>
);

export default Social;
