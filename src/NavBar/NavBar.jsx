import './NavBar.css';
import main_logo from '../Resources/main_logo.svg';

function NavBar() {
    return (
        <header>
            <div class="logo">
                <img src={main_logo} alt="logo_Analytics" />
            </div>
            <div class="nav_titles">
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/">Product</a>
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/">Pricing</a>
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/">FAQ</a>
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/">Blog</a>
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/">Contact Us</a>
            </div>
            <div class="Buttons">
                <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/"><p>Sign In</p></a>
                <a href='https://www.linkedin.com/in/wasim-samnani-871b351a9/'><button>Sign Up</button></a>
            </div>
            <div class="menu_mobileview">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
        </header>
    )
}

export default NavBar;