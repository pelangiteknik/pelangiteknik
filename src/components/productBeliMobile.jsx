import styles from '@/components/productBeliMobile.module.css'
import { FaWhatsapp } from "react-icons/fa";

export default function ProductBeliMobile({ handleBeliSekarang, handleWhatsapp, price, stock }) {
    return (
        <div className={styles.container}>
            <div className={styles.atas}>
                <div className={styles.harga}>
                    {price} / barang
                </div>
                <div className={styles.stock}>( {stock} stock ) </div>
            </div>
            <div className={styles.bawah}>
                <div className={styles.whatsapp} onClick={handleWhatsapp}>
                    <FaWhatsapp /> &nbsp; Whatsapp
                </div>
                <div className={styles.belisekarang} onClick={handleBeliSekarang}>
                    Beli Sekarang
                </div>
            </div>
        </div>
    )
}
