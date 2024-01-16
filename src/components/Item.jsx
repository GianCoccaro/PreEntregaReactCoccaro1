import '../App.css'

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
                <button className="Option">
                    See details
                </button>
            </footer>
        </article>
    )
}