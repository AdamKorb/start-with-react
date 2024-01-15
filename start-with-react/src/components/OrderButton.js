//// Pravidla pre tvorbu komponenty////
// komponenta je obyč. funkcia
// komponenta má rovnaký názov ako je názov súboru
// komponenta obsahuje return
// na konci súboru musí byť riadok s exportom
// v return musí niečo byť
// return dokaze vratit len jeden tag - da sa obalit pomocou div alebo iba <>

import "./OrderButton.css"

const OrderButton = () =>{
    return(
       <button type="button" className="btn">Objednať</button>
    ) 
}

export default OrderButton