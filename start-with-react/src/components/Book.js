//// Pravidla pre tvorbu komponenty////
// komponenta je obyč. funkcia
// komponenta má rovnaký názov ako je názov súboru
// komponenta obsahuje return
// na konci súboru musí byť riadok s exportom
// v return musí niečo byť
// return dokaze vratit len jeden tag - da sa obalit pomocou div alebo iba <>

import "./Book.css"
import OrderButton from "./OrderButton"

const Book = (props) => {
    return(
        <div className="one-book">
            <img src={props.image} alt="" />
            <h2 className="main-heading">{props.title}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ratione eveniet maxime recusandae sequi temporibus fuga vitae reiciendis ullam voluptates, aspernatur suscipit cupiditate minus officiis, quis nam rem adipisci ex.</p>
            <OrderButton />
        </div>
    )
}

export default Book

