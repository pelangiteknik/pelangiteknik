import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export const dynamic = 'force-dynamic'

export async function ListProducts() {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return data.data
}

export async function FilterCategory() {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
    const data = await res.json()
    return data
}


export default async function Page({ params }) {
    const [dataListdata, dataFilterCategory] = await Promise.all([
        ListProducts(params.slug),
        FilterCategory(),
    ])

    return (
        <HeaderFooter >
            <div>
                <ListProduct
                    Listdata={dataListdata}
                    FilterCategory={dataFilterCategory}
                    Lfilter={true}
                />
            </div>
        </HeaderFooter>
    );
}
