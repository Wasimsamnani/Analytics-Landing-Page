import './index.css';
function InfoAndImage (props){
    return (
        <div class="Container_whole">
            <div class="info_info">
                <h1>{props.title}</h1>
                <p class="text_font">{props.children}</p>
            </div>
            <div class="image_container">
                <img src={props.image} alt={props.title} />
            </div>
        </div>
    )
}
export default InfoAndImage;