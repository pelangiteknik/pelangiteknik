'use client'
import styles from "@/components/header.module.css"
import Image from "next/image"
import Search from "@/components/search";
import { IoIosArrowForward } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useCallback, useState } from "react";

export default function Header() {

  const [data, setData] = useState([])

  const [product, setProduct] = useState(false)

  const HandlePilihProduct = useCallback(async () => {
    const res = await fetch('https://api-ecom.tsuzumijapan.com/api/category.list')
    const data = await res.json()
    setData(data?.data)
    setProduct(!product)
  }, [product])


  return (
    <header className={styles.header}>
      <div className={styles.atas}>
        <div className={styles.container}>
          <Link href={'/'} className={styles.gambar}>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/logo.svg`} height={80} width={400} alt="logo" />
          </Link>
          <a className={styles.text1} onClick={HandlePilihProduct}>PRODUK</a>
          <a className={styles.text2}>BLOG</a>
          <a className={styles.text3}>ABOUT</a>
          <div className={styles.pencarian}>
            <div className={styles.deskop}>
              <Search />
            </div>
            <div className={styles.mobile}>
              <FaSearch color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.notifikasi} >
        <div className={styles.lebarnotif}>
          <div className={styles.text}>
            ⛈️Dukungan obrolan langsung tersedia. Untuk bantuan swalayan, kunjungi:
          </div>
          <div className={styles.klik}> <a href="">Help Center <IoIosArrowForward /></a>
          </div>
        </div>

        {
          product &&
          <>
            <div className={styles.melayang}
              style={product ? { transition: 'all ease 1s', opacity: 0.3 } : { transition: 'all ease 1s', opacity: 0.3 }}
              onClick={() => setProduct(!product)}></div>
            <div className={styles.isimelayang}>
              <div className={styles.isimelayangdalam}>
                <div className={styles.dalamkontainer}>
                  {data.map((data) => {
                    return (
                      <div className={styles.kotak}>
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
        }

      </div>


    </header>
  )
}
