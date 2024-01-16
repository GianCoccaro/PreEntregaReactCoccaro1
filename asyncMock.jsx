const products = [
    {
        id: "1",
        name: "Backpack Huguito",
        price: 1000,
        category: "backpacks",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Golden_Retriever_9-year_old.jpg/800px-Golden_Retriever_9-year_old.jpg",
        stock: 25,
        description: "Product description"
    },
    {
        id: "2",
        name: "T-shirt Huguito",
        price: 200,
        category: "t-shirts",
        img: "./src/img/remera-perrito.jfif",
        stock: 25,
        description: "Product description"
    },
    {
        id: "3",
        name: "Cup Huguito",
        price: 3000,
        category: "cups",
        img: "./src/img/taza-perrito.jpg",
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

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsByCategory = products.filter((product) => product.category === categoryId);
            resolve(productsByCategory);
        }, 500);
    })
}