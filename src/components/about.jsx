import styles from '@/components/about.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.dalamcontainer}>
                <div className={styles.judul}>Hi, We're PT Pelangi Teknik Indonesia</div>
                <div className={styles.desc1}>
                    <div className={styles.gambar}>

                    </div>
                    <div className={styles.text}>
                        <div>
                            <div className={styles.textjudul}>Tentang PT Pelangi Teknik Indonesia</div>
                            PT Pelangi Teknik Indonesia berdiri sejak tahun 2013,
                            memproduksi dan mendistribusikan berbagai keperluan
                            mesin-mesin untuk berbagai sektor mulai dari proyek-
                            proyek pertanian, konstruksi, pabrik hingga kebutuhan
                            mesin genset untuk pabrik dan rumahan.<br /><br />
                            Produk-produk dengan merk Tsuzumi Japan menjadi
                            salah satu pilihan paling laris di pasaran. Kepuasan
                            pelanggan adalah kunci utama keberhasilan kami
                            dengan mengedepankan kualitas dan servis yang baik
                        </div>
                    </div>
                </div>


                <div className={styles.desc2}>

                    <div className={styles.text}>
                        <div>
                            <div className={styles.textjudul}>VISI & MISI</div>
                            Menerangi seluruh Indonesia dengan pendistribusian barang & jasa dari Sabang sampai Merauke dengan cepat dan tepat
                        </div>
                    </div>
                    <div className={styles.gambar}>

                    </div>
                </div>
            </div>
        </div>
    )
}
