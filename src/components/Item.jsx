import '../App.css'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const Item = ({id, name, img, price, stock}) => {

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className="Info">
                    Price: ${price}
                </p>
                <p className="Info">
                    Available Stock: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada')} />
                <Link to={`/item/${id}`} className='Option'>
                    See details
                </Link>
            </footer>
        </article>
    )
}

export default Item