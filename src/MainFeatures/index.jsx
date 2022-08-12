import LogoAndInfo from "./LogoAndInfo";
import InfoAndImage from "./InfoAndImage";
import clock from '../Resources/clock.svg';
import web_camp from '../Resources/web_camp.svg';
import rocket from '../Resources/Rocket.svg';
import screen01 from '../Resources/screen-01.png';
import screen02 from '../Resources/screen-02.png';
import screen03 from '../Resources/screen-03.svg';
import './index.css';

function MainFeatures() {
    return (
        <div class="main">
            <h1>Main Features</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet. Id vel in nam malesuada.</p>
            <div className="logoandinfo">
                <LogoAndInfo image={clock} title="Monitoring 24/7">Lorem ipsum dolor sit amet, consectetur adipis
                    cing elit. Elementum nisi aliquet volutpat.</LogoAndInfo>
                <LogoAndInfo image={web_camp} title="Widget System" >Sapien in etiam vitae nibh nunc mattis imperdiet
                    sed nullam. Vitae et, tortor pulvinar risus pulvinar.</LogoAndInfo>
                <LogoAndInfo image={rocket} title="Best Performance">Lorem ipsum dolor sit amet, consectetur adipis
                    cing elit. Elementum nisi aliquet volutpat.</LogoAndInfo>
            </div>
            <div class="main_container">
            <InfoAndImage image={screen01} title="Automated Reports & Widget Alerts">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</InfoAndImage>
            <InfoAndImage image={screen02} title="Fully customizable to address your needs ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</InfoAndImage>
            <InfoAndImage image={screen03} title="Pre-built Dashboard Templates">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet.</InfoAndImage>
            </div>
        </div>
    )
}
export default MainFeatures;