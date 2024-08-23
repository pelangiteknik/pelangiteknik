import BannerMain from "@/components/bannerMain";
import Category from "@/components/category";
import Hpo from "@/components/hpo";
import Judul from "@/components/judul";
import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";

export async function FCategory() {
  const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
  const data = await res.json()
  return data
}

export async function ListProductsBest() {
  const res = await fetch('https://api-ecom.tsuzumijapan.com/api/product.list')
  const data = await res.json()
  return data.data.filter((data) => data.is_best_product && true)
}

export default async function Home() {
  const data = await FCategory()
  const dataBest = await ListProductsBest()

  return (
    <HeaderFooter >
      <BannerMain data={data} />
      <Hpo />
      <Judul judul={'Best Product'} />
      <ListProduct
        Listdata={dataBest}
        Lfilter={false}
      />

      <Judul judul={'Categories'} />
      <Category data={data} />

    </HeaderFooter>
  );
}
