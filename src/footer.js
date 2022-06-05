const Footer = () => {
    return ( 
        <footer id="footer-bar">
            <i class="icon bi bi-github" onClick={() => window.open('https://github.com/Matirix', '_blank')}></i>
            <i class="icon bi bi-linkedin" onClick={() => window.open('https://www.linkedin.com/in/matthew-puyat-112318195/', '_blank')}></i>
            <i class="icon bi bi-envelope-fill" onClick={() => window.open('mailto:Matirix@live.com', '_blank')}></i>
        </footer>
     );
}
 
export default Footer;