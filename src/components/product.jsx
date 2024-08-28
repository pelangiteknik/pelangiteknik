'use client'
import styles from '@/components/product.module.css'
import convertToRupiah from '@/utils/ConvertRupiah'
import Image from 'next/image';
import ProductDetail from '@/components/productDetail';
import ProductSpecs from '@/components/productSpecs';
import { useState } from 'react';
import { FaCaretUp } from "react-icons/fa"

export default function Product({ data }) {
    const dataku = data?.data

    const handleBeliSekarang = () => {
        alert('otwww')
    }

    const [pilihan, setPilihan] = useState('detail')

    const handlePilihBawah = (e) => {
        e == 'detail' && setPilihan('detail')
        e == 'specs' && setPilihan('specs')
    }

    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>

                <div className={styles.atas}>
                    <div className={styles.swipper}>
                        {dataku?.productImages?.map((data, i) => {
                            return (
                                <div
                                    key={i}
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
                            {dataku?.name}
                        </div>

                        <div className={styles.price}>
                            {convertToRupiah(dataku?.price)}
                        </div>
                        <div className={styles.buu}>
                            <div className={styles.stock}>
                                Stock:  {dataku?.stock}
                            </div>
                            <button onClick={handleBeliSekarang}>
                                Beli Sekarang
                            </button>
                        </div>
                    </div>
                </div>

                <div className={styles.bawah}>
                    <div className={styles.bawahjudul}>
                        <div
                            className={styles.detailjudul}
                            style={pilihan == 'detail' ? { background: 'var(--colorthrid)', color: 'var(--colorsekunder)' } : {}}
                            onClick={() => handlePilihBawah('detail')}
                        >
                            Detail
                            {pilihan == 'detail' && <div className={styles.ikon}><FaCaretUp size={30} /></div>}
                        </div>

                        <div
                            className={styles.detailjudul}
                            onClick={() => handlePilihBawah('specs')}
                            style={pilihan == 'specs' ? { background: 'var(--colorthrid)', color: 'var(--colorsekunder)' } : {}}
                        >
                            Specs
                            {pilihan == 'specs' && <div className={styles.ikon}><FaCaretUp size={30} /></div>}
                        </div>
                    </div>
                    <div className={styles.bawahpilihan}>
                        {pilihan == 'detail' && <ProductDetail data={dataku?.desc} />}
                        {pilihan == 'specs' && <ProductSpecs data={dataku?.features_by_category} />}
                    </div>
                </div>
            </div>
        </div >
    )
}
