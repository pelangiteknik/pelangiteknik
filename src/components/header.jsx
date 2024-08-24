'use client'
import styles from "@/components/header.module.css"
import Image from "next/image"
import Search from "@/components/search";
import { IoIosArrowForward } from "react-icons/io";
import { BsFillTriangleFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter()
  const [data, setData] = useState([])
  const [product, setProduct] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/category.json`)
        const data = await res.json()
        setData(data?.data)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData()
  }, [])

  const HandlePilihProduct = () => {
    setProduct(!product)
  }

  const handleKlikProduct = (e) => {
    router.push(`/category/` + e)
    setProduct(!product)
  }

  return (
    <header className={styles.header}>
      <div className={styles.atas}>
        <div className={styles.container}>
          <Link href={'/'} className={styles.gambar}>
            <Image src={`${process.env.NEXT_PUBLIC_URL}/logo.svg`} height={80} width={400} alt="logo" />
          </Link>
          <a className={styles.text1}
            onClick={() => HandlePilihProduct()}
            style={product ? { background: ' var(--colorthrid)' } : {}}
          >
            {product && <div className={styles.ikon}>
              <BsFillTriangleFill color="var(--colorbggreyutama)" />
            </div>}
            PRODUK</a>
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
              onClick={() => setProduct(!product)}></div>
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
        }

      </div>
    </header>
  )
}
