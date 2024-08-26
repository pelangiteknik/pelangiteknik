import styles from '@/components/productHeaderMelayang.module.css'
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useStore } from "@/zustand/zustand";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export default function ProductHeaderMelayang({ data }) {
    useLockBodyScroll();
    const router = useRouter()
    const setProductMelayangHeader = useStore((state) => state.setProductMelayangHeader)

    const handleKlikProduct = (e) => {
        router.push(`/category/` + e)
        setProductMelayangHeader()
    }

    return (
        <>
            <div className={styles.melayang}
                onClick={() => setProductMelayangHeader()}></div>
            <div className={styles.isimelayang}>
                <div className={styles.isimelayangdalam}>
                    <div className={styles.dalamkontainer}>
                        {data.map((data, i) => {
                            // Mengubah semua huruf menjadi huruf kecil
                            const lowerCaseString = data?.name.toLowerCase();
                            // Mengganti spasi dengan tanda "-"
                            const finalString = lowerCaseString?.replace(/ /g, '-');
                            return (
                                <div
                                    className={styles.kotak}
                                    key={i}
                                    onClick={() => handleKlikProduct(finalString)}
                                >
                                    <Image
                                        src={data.url_image}
                                        alt={data.name}
                                        width={100}
                                        height={100}
                                    />
                                    {data.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
