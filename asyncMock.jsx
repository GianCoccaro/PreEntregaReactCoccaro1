const products = [
    {
        id: "1",
        name: "Product 1",
        price: 1000,
        categorie: "t-shirts",
        img: "",
        stock: 25,
        description: "Product description"
    },
    {
        id: "2",
        name: "Product 2",
        price: 1000,
        categorie: "t-shirts",
        img: "",
        stock: 25,
        description: "Product description"
    },
    {
        id: "1",
        name: "Product 1",
        price: 1000,
        categorie: "t-shirts",
        img: "",
        stock: 25,
        description: "Product description"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}