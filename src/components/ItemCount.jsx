const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <buton className="Button" onClick={decrement}>-</buton>
                <h4 className="Number">{quantity}</h4>
                <buton className="Button" onClick={increment}>+</buton>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Add to cart
                </button>
            </div>
        </div>
    )
}