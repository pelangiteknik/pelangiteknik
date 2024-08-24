export const ListProductsBest = async () => {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return data.data.filter((data) => data.is_best_product && true)
}

export const FCategory = async () => {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
    const data = await res.json()
    return data
}

export const ListProducts = async () => {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return data.data
}

export const ListProductsSearch = async (search) => {
    const res = await fetch(`https://api-v1.tsuzumijapan.com/v1/products/search?search=${search}`)
    const data = await res.json()
    return data.data
}

export const ListProductsKategori = async (id, kondisi) => {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return kondisi ?
        data.data.filter((data) => data.is_best_product && true) :
        data.data.filter((data) => data.category_name.toLowerCase().replace(/ /g, '-') == id)
}

export const ListFilterProductsKategori = async (id) => {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
    const data = await res.json()
    return data.data.filter((data) => data.name.toLowerCase().replace(/ /g, '-') == id)[0]
}



export async function FSubCategory() {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/sub-category.list')
    const data = await res.json()
    return data
}