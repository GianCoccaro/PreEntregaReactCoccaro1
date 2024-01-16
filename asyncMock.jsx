const products = [
    {
        id: "1",
        name: "Backpack Huguito",
        price: 1000,
        category: "backpacks",
        img: "https://bunny-cdn.ventasxmayor.com/6060d74cd1d2d2d24cd1d2d2d26363/public/57772739003353137/1643725371544-photoroom-20220125123710.png",
        stock: 25,
        description: "Product description"
    },
    {
        id: "2",
        name: "T-shirt Huguito",
        price: 200,
        category: "t-shirts",
        img: "https://acdn.mitiendanube.com/stores/440/495/products/remeras-dachshund-o-perro-salchicha1-9587b1710c8f63847515988313307043-480-0.png",
        stock: 25,
        description: "Product description"
    },
    {
        id: "3",
        name: "Cup Huguito",
        price: 3000,
        category: "cups",
        img: "https://www.curiosite.es/img/auto_catalogo/w618/32611.jpg",
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