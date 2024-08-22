import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export async function ListProducts(id) {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return data.data.filter((data) => data.category_name.toLowerCase().replace(/ /g, '-') == id)
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
    const dataListdata = await ListProducts(params.slug)
    const dataCategory = await FCategory(params.slug)
    const dataFilterCategory = await FilterCategory()
    const SubCategory = await FSubCategory()

    return (
        <HeaderFooter >
            <ListProduct
                Listdata={dataListdata}
                Category={dataCategory}
                FilterCategory={dataFilterCategory}
                SubCategory={SubCategory}
                id={params.slug} />
        </HeaderFooter>
    );
}
