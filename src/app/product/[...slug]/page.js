import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";

export const dynamic = 'force-dynamic'

export async function ListProduct(id) {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return data.data.filter((data) => data.slug == id)
}


export async function FCategory(id) {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
    const data = await res.json()
    return data.data.filter((data) => data.name.toLowerCase().replace(/ /g, '-') == id)[0]
}

export async function FilterCategory(id) {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
    const data = await res.json()
    return data
}


export async function FSubCategory() {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/sub-category.list')
    const data = await res.json()
    return data
}

export default async function Page({ params }) {
    const dataListdata = await ListProduct(params.slug)

    return (
        <HeaderFooter >
            <Product
                data={dataListdata}
            />
        </HeaderFooter>
    );
}
