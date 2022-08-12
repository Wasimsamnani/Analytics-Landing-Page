function Card(props) {
    return(
        <div class="card">
            <div class="top_card_info">
            <h1>{props.title}</h1>
            <p>{props.info}</p>
            </div>
             <hr />
             <h1 class="h1_decoration"><font>$</font>{props.price}</h1>
             <p>per month</p>
             <div class="Card_button">
             <button>Order</button>
             </div>
        </div>
    )
}
export default Card;