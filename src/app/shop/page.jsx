import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";
import { ListProducts, FCategory } from "@/service/user";

export const dynamic = 'force-dynamic'

export default async function Page() {
    const [dataListProducts, dataFCategory] = await Promise.all([
        ListProducts(),
        FCategory(),
    ])

    return (
        <HeaderFooter >
            <div>
                <ListProduct
                    Listdata={dataListProducts}
                    FilterCategory={dataFCategory}
                    Lfilter={true}
                />
            </div>
        </HeaderFooter>
    );
}
