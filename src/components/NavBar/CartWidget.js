import "./CartWidget.scss"
import ShowCart from '../ShowCart/ShowCart'


const CardWidget = ({contador}) => {
    return (
        <div className='divCartWidget'>
            <ShowCart contador={contador}/>
            {console.log("carwidget count",contador)}
        </div>
    )
}
export default CardWidget