import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";
import { IdProduk, Produk } from "@/service/user";

export const dynamic = 'force-dynamic'

BigInt.prototype.toJSON = function () {
    return this.toString();
}

export default async function Page({ params }) {

    const dataIdProduk = await IdProduk(params.slug)
    console.log('id', dataIdProduk);

    const dataProduk = await Produk(dataIdProduk)
    console.log('produk', dataProduk);
    return (
        <HeaderFooter >
            <Product
                data={dataProduk}
            />
        </HeaderFooter>
    );
}
