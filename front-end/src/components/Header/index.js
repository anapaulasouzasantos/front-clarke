import './styles.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
            <img
                src={Logo}
                alt='Logo Clarke'
            >
            </img>
        </header>
    )
}

export default Header;