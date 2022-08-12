import './index.css';
import bootom_backround from '../Resources/background-bottom.svg'
import Card from './Card';
import Bottom from './Bottom';
function Footer() {
    return (
        <>
            <img class="img_background" src={bootom_backround} alt="bottom_background_image" />
            <div class="main_card">
                <div class="bottom_info">
                    <h1 class="text_decoration">Pricing Plans</h1>
                    <p class="p_decoration">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet
                        volutpat pellentesque volutpat est. </p>
                </div>
                <div class="Card_container">
                <Card title="Starter" info="up to 3 users" price="29"/>
                <Card title="Standard" info="up to 20 users" price="99"/>
                <Card title="Premium" info="up to 200 users" price="299"/>
                </div>
                <hr class="bottom_hr"/>
                <Bottom />
            </div>
        </>
    )
}

export default Footer;