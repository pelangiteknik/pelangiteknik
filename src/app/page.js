import Category from "@/components/category";
import HeaderFooter from "@/components/layout/headerFooter";

export async function FCategory() {
  const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
  const data = await res.json()
  return data
}

export default async function Home() {
  const data = await FCategory()

  return (
    <HeaderFooter >
      <Category data={data} />
    </HeaderFooter>
  );
}
