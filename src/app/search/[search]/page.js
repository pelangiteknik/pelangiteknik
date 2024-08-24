import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";
import { ListProductsSearch, FCategory } from "@/service/user";

export const dynamic = 'force-dynamic'

export default async function Page({ params }) {

    const [dataListProducts, dataFCategory] = await Promise.all([
        ListProductsSearch(params.search),
        FCategory(),
    ])

    return (
        <HeaderFooter >
            <div>
                <ListProduct
                    Listdata={dataListProducts}
                    FilterCategory={dataFCategory}
                    Lfilter={true}
                    pencarian={true}
                />
            </div>
        </HeaderFooter>
    );
}
