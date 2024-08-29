import styles from '@/components/productBeliMobile.module.css'
import { FaWhatsapp } from "react-icons/fa";

export default function ProductBeliMobile({ handleBeliSekarang }) {
    return (
        <div className={styles.container}>
            <div className={styles.atas}>
                <div className={styles.harga}>
                    Rp 75.000.000,00 / barang
                </div>
                <div className={styles.stock}>( 12 stock ) </div>
            </div>
            <div className={styles.bawah}>
                <div className={styles.whatsapp}>
                    <FaWhatsapp /> &nbsp; Whatsapp
                </div>
                <div className={styles.belisekarang} onClick={handleBeliSekarang}>
                    Beli Sekarang
                </div>
            </div>
        </div>
    )
}
