import top_background_image from '../Resources/background-top.png';
import bigImage from '../Resources/Big_reactriangle(1).svg';
import './MainContent.css';
import MainFeatures from '../MainFeatures/index';
function MainContent() {
    return (
        <>
            <div class="top_backgroundimage">
                <img src={top_background_image} alt="BackGround_image" />
            </div>
            <div class="Content">
                <div class="info">
                    <h1 class="fonts">Monitor your business on real-time dashboard</h1>
                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. </h4>
                    <a href="https://www.linkedin.com/in/wasim-samnani-871b351a9/"><button>Try for free</button></a>
                </div>
                <div className="right_images">
                        <img src={bigImage} alt="Analytics_BigImage" />
                </div>
            </div>
                <MainFeatures/>
        </>
    )
}

export default MainContent;