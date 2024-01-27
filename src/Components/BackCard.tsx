import './BackCard.css'
import visa from './image/visa.png'
interface backCardProps{
    cvc: string
}
function BackCard({cvc}: backCardProps){
    return(
        <div className='card-box'>
            <div className='black-stripe'></div>
            <h2>CVC</h2>
            <div className='white-stripe'>
                <p className='cvc-number'>{cvc}</p>
            </div>
            <img src = {visa}/>
        </div>
    )
}
export default BackCard