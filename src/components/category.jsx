'use client'

import Image from "next/image";
import styles from '@/components/category.module.css'
import Link from "next/link";

export default function Category({ data }) {
    const dataCategory = data?.data

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.judul}>Categories By Pelangi Teknik</div>
                <div className={styles.grid}>
                    {dataCategory.map((data, i) => {
                        // Mengubah semua huruf menjadi huruf kecil
                        const lowerCaseString = data?.name.toLowerCase();
                        // Mengganti spasi dengan tanda "-"
                        const finalString = lowerCaseString?.replace(/ /g, '-');
                        return (
                            <Link 
                            key={i} 
                            target="_blank" 
                            href={`/category/` + finalString} 
                            className={styles.kotakisi}>
                                <div className={styles.gambar}>
                                    <Image
                                        src={data?.url_image}
                                        alt={data?.name}
                                        width={200}
                                        height={200}
                                    ></Image>
                                </div>
                                <div className={styles.text}>{data?.name}</div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
