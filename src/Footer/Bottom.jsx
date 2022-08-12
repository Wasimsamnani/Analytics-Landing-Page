import './index.css';
import social from '../Resources/social buttons.svg';
import footer_icon from '../Resources/footer_icon.svg';
function Bottom() {
    return (
        <div className="footer">
            <div className="logo">
                <img class="bottom_logo" src={footer_icon} alt="Analytics_logo" />
            </div>
            <div className="nav_titles display">
                <a href="#">Products</a>
                <a href="#">Pricing Plan</a>
                <a href="#">FAQ</a>
                <a href="#">Blog</a>
            </div>
            <div className="icons_bottom">
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/"><img  class="socials" src={social} alt="social_icons"/></a>
            </div>
        </div>
    )
}
export default Bottom;