import "./FrontCard.css";
import chip from "./image/chip.png";
import visa from "./image/visa.png";
interface data{
  name: string,
  number: string,
  month: string,
  year: string,
}
function FrontCard({name, number, month, year}: data) {
  
  return (
    
    <div className={`card-box`}>
      <div className="image-section">
        <img src={chip} />
        <img src={visa} />
      </div>
      <p className="cardNumber">{number || '#### #### #### ####'}</p>
      <div className="holder">
        <div>
        <p>CARD HOLDER</p>
        <p className="name-on-card">{name.toUpperCase()}</p>
        </div>
        <div>
          <p>EXPIRES</p>
          <p>MM YY</p>
          <p>{month !== '' ? month + " / " + year : ""}</p>
        </div>
      </div>
    </div>
    
  );
}
export default FrontCard;
