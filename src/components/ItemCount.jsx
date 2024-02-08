const ItemCount = ( {quantity, handleDecrement, handleIncrement, handleAdd} ) => {

  return (
    <div>

        <div className="productCounter">
            <button className="counterButton" onClick={handleDecrement}>-</button>
            <p className="counterValue">{quantity}</p>
            <button className="counterButton" onClick={handleIncrement}>+</button>
        </div>
        <button className="addToCartButton" onClick={handleAdd}>Add to cart</button>
    </div>
  )
}

export default ItemCount;