'use client'
import styles from '@/components/bannerMain.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

export default function BannerMain({ data }) {
    return (
        <div className={styles.container}>
            <div className={styles.kotak1}>
            </div>

            <div className={styles.containerdalam}>
                <Swiper
                    spaceBetween={0}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {data?.data?.map((data, i) => {
                        const url = data.name.toLowerCase().replace(/ /g, '-')
                        return (
                            <SwiperSlide key={i}>
                                <Link
                                    href={`/category/${url}`}
                                    target='_blank'
                                    className={styles.gambar}>
                                    <Image src={data.url_banner_image}
                                        alt='satu'
                                        width={850}
                                        height={328}
                                    />
                                </Link >
                            </SwiperSlide>

                        )
                    })}
                </Swiper>
            </div>
            <div className={styles.kotak2}>
            </div>
        </div >
    )
}
