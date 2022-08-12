import './index.css';
function LogoAndInfo(props) {
    return(
        <div class="container">
            <div class="icon">
                <img src={props.image} alt={props.title} />
            </div>
            <h4>{props.title}</h4>
            <p>{props.children}</p>
        </div>
    )    
}

export default LogoAndInfo;