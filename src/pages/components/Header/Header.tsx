import Image from "next/image";
import logo from '../../assets/images/logo.svg';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header>
        <div className="container">
            <div>
                <Image src={logo} alt="Logo" height={60} width={60} className={classes.logo} />
            </div>
            <div className="textRight">
                <Image src="./next.svg" alt="Logo" height={60} width={60} className={classes.logo} />
            </div>
        </div>
    </header>
  )
}

export default Header;