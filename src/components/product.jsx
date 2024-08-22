'use client'
import styles from '@/components/product.module.css'
import { convertToRupiah } from '@/utils/ConvertRupiah';
import Image from 'next/image';

export default function Product({ data }) {
    const dataku = data[0]

    const handleBeliSekarang = () => {
        alert('otwww')
    }
    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.swipper}>
                    {dataku?.images?.map((data) => {
                        return (
                            <div
                                style={data.order != '1' ? { display: 'none' } : { display: 'block' }}
                                className={styles.gambar}>
                                <Image
                                    src={data.image}
                                    alt={data.id}
                                    width={400}
                                    height={400}
                                />
                                <div className={styles.wm}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_URL}/wm.png`}
                                        alt={'wm'}
                                        width={400}
                                        height={400}
                                    >
                                    </Image>
                                </div>
                            </div>

                        )
                    })}

                </div>

                <div className={styles.review}>
                    <div className={styles.judul}>
                        {dataku.name}
                    </div>

                    <div className={styles.price}>
                        {convertToRupiah(dataku.price)}
                    </div>
                    <div className={styles.buu}>
                        <div className={styles.stock}>
                            Stock:  {dataku.stock}
                        </div>
                        <button onClick={handleBeliSekarang}>
                            Beli Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
