import BannerMain from "@/components/bannerMain";
import Category from "@/components/category";
// import { ContentWithWatermark } from "@/components/ContentWithWatermark";
import Hpo from "@/components/hpo";
import Judul from "@/components/judul";
import HeaderFooter from "@/components/layout/headerFooter";
import ListProduct from "@/components/listProduct";
// import UploadGambar from "@/components/UploadGambar";
import { ListProductsBest, FCategory } from "@/service/user";

export const dynamic = 'force-dynamic'

export default async function Home() {
  const [data, dataBest] = await Promise.all([
    FCategory(),
    ListProductsBest(),
  ])

  return (
    <HeaderFooter >
      <BannerMain data={data} />
      <Hpo />
      {/* <ContentWithWatermark /> */}
      {/* <UploadGambar /> */}
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
