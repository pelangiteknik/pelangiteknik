'use client'
import styles from '@/components/listProduct.module.css'
import { convertToRupiah } from '@/utils/ConvertRupiah'
import useWindowDimensions from '@/utils/getWindowDimensions'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { CiFilter } from "react-icons/ci";

export default function ListProduct({ Listdata, Category, FilterCategory, SubCategory, id }) {

    const filter = FilterCategory?.data
    const { width } = useWindowDimensions()
    const kondisiLebar = width <= 1000

    const [kategori, setKategori] = useState(!kondisiLebar)
    const handleKategori = () => {
        kondisiLebar ? setKategori(!kategori) : setKategori(true)
    }
    return (
        <div className={styles.containerluar} >
            <div className={styles.container} style={{ background: '#ffff' }}>
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

            <div className={styles.container}>
                <div className={styles.dalamkontainer}>
                    <div className={styles.bawah}>

                        <div className={styles.filter}>
                            <div className={styles.judul} onClick={handleKategori}>
                                <div className={styles.text}>Category</div>
                                <div className={styles.icon}><CiFilter /></div>
                            </div>

                            {kategori &&
                                <div className={styles.kategori}>
                                    {filter.map((data, i) => {
                                        // Mengubah semua huruf menjadi huruf kecil
                                        const lowerCaseString = data?.name.toLowerCase();
                                        // Mengganti spasi dengan tanda "-"
                                        const finalString = lowerCaseString?.replace(/ /g, '-');
                                        return (
                                            <Link
                                                key={i}
                                                target="_blank"
                                                href={`/category/` + finalString}
                                                className={styles.list}>
                                                <div className={styles.gambarikon}>
                                                    <Image
                                                        src={data.url_image}
                                                        width={30}
                                                        height={30}
                                                        alt='ok'
                                                    ></Image>
                                                </div>
                                                <div className={styles.text}>
                                                    {data?.name}
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            }
                        </div>

                        <div className={styles.listproduct}>
                            <div className={styles.grid}>
                                {Listdata.map((data, i) => {
                                    return (
                                        <Link
                                            target='_blank'
                                            href={`/product/${data?.slug}`}
                                            className={styles.kotak}
                                            key={i}>
                                            <div className={styles.gambarbawah}>
                                                <Image
                                                    src={data?.images[0]?.image}
                                                    alt={data?.slug}
                                                    width={250}
                                                    height={200}
                                                >
                                                </Image>
                                                <div className={styles.wm}>
                                                    <Image
                                                        src={'http://localhost:3000/wm.png'}
                                                        alt={'wm'}
                                                        width={250}
                                                        height={200}
                                                    >
                                                    </Image>
                                                </div>
                                            </div>
                                            <div className={styles.name}>
                                                {data?.name}
                                            </div>

                                            <div className={styles.price}>
                                                {convertToRupiah(data?.price)}
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
