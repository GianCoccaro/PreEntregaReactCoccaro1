import Item from "./Item";

const ItemList = ( {products} ) => {
  return (
    <div className="container">
        <div className="products">
            { products.map((prod) => <Item product={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList;