import './Header.css';
import crest from './Crest.png';
import flag from './Flag.png';

function Header() {
    return(
        <header className="cityHeader">
            <div className="cityHeader_atributes">
                <div className="first_img">
                    <img src={crest} alt="Герб города"/>
                    <p>Герб города</p>
                </div>

                <div className="second_img">
                    <img src={flag} alt="Флаг города"/>
                    <p>Флаг города</p>
                </div>
            </div>
        </header>
    )
}

export default Header;