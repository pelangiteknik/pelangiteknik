import HeaderFooter from "@/components/layout/headerFooter";
import Product from "@/components/product";
import { Produk, ListProductsBest } from "@/service/user";
import ListProduct from "@/components/listProduct";
import Judul from "@/components/judul";

export const dynamic = 'force-dynamic'

BigInt.prototype.toJSON = function () {
    return this.toString();
}

export default async function Page({ params }) {

    const [dataProduk, dataBest] = await Promise.all([
        Produk(params.slug),
        ListProductsBest(),
    ])

    return (
        <HeaderFooter >
            <Product
                data={dataProduk}
            />
            <Judul judul={'Best Product'} />
            <ListProduct
                Listdata={dataBest}
                Lfilter={false}
            />
        </HeaderFooter>
    );
}
