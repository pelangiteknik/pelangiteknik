import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";
import { Produk } from "@/service/user";

export const dynamic = 'force-dynamic'

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
