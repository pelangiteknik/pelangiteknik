import BannerKategori from "@/components/bannerKategori";
import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export const dynamic = 'force-dynamic'

export async function ListProducts(id, kondisi) {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return kondisi ?
        data.data.filter((data) => data.is_best_product && true) :
        data.data.filter((data) => data.category_name.toLowerCase().replace(/ /g, '-') == id)
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
    const [dataListdata, dataCategory, dataFilterCategory, SubCategory] = await Promise.all([
        ListProducts(params.slug, params.slug == 'best-products'),
        FCategory(params.slug),
        FilterCategory(),
        FSubCategory(),
    ])

    return (
        <HeaderFooter >
            <div>
                <BannerKategori Category={dataCategory} />
                <ListProduct
                    Listdata={dataListdata}
                    FilterCategory={dataFilterCategory}
                    Lfilter={true}
                />
            </div>
        </HeaderFooter>
    );
}
