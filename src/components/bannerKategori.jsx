import styles from '@/components/bannerKategori.module.css'
import Image from 'next/image'

export default function BannerKategori({ Category }) {
    return (
        <div className={styles.container} >
            <div className={styles.dalamkontainer}>
                <div className={styles.banner}>
                    <div className={styles.text}>
                        <div className={styles.judul}>
                            {Category?.name} by Pelangi Teknik
                        </div>
                        <div className={styles.desc}>
                            {Category?.desc}
                        </div>
                    </div>

                    <div className={styles.gambar}>
                        <Image
                            src={Category?.url_banner_image}
                            width={1000}
                            height={550}
                            alt={Category?.bannerTitle}
                        ></Image>
                    </div>

                </div>
            </div>
        </div>

    )
}
