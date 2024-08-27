import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";
import { Produk } from "@/service/user";

export const dynamic = 'force-dynamic'

export async function ListProduct(id) {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
    const data = await res.json()
    return data.data.filter((data) => data.slug == id)
}

export default async function Page({ params }) {
    const dataListdata = await Produk(params.slug)

    return (
        <HeaderFooter >
            <Product
                data={dataListdata}
            />
        </HeaderFooter>
    );
}
