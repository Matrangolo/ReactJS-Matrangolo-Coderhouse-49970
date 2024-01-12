import basket from '../assets/basket.svg';

const CartWidget = () => {
    return (
        <button type='button' className='btn btn-warning position-relative'>
            <img src={basket} alt="basket-widget" style={{ width: '30px', height: '30px' }} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-black" >3</span>
            
        </button>
    );
}

export default CartWidget;
