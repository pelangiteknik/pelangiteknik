import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";
import { IdProduk, Produk } from "@/service/user";

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {

    const dataIdProduk = await IdProduk(params.slug)
    const dataProduk = await Produk(dataIdProduk)

    return (
        <HeaderFooter >
            <Product
                data={dataProduk}
            />
        </HeaderFooter>
    );
}
