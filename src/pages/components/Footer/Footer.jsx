import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
        <div className={['container', classes.container].join(' ')}>
            <div>Copyright &copy;2024</div>
            <div className="textRight">
                Built with <span className="red">&hearts;</span> by
                <a href="https://freelancer.com/u/zabubakar">© Abubakar Wazih Tushar</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;