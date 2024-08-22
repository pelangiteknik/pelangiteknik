import styles from "@/components/footer.module.css"
import { TbHelpSquareFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { BsBorderStyle } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCalendar } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export default function Footer() {
  return (
    <div className={styles.container}>
      <footer>
        <div className={styles.atas}>
          <div className={styles.atasatas}>
            <div className={styles.help}>
              <h1>
                Butuh bantuan?
              </h1> Kami siap membantu 24 jam sehari, 7 hari seminggu.
            </div>
            <div className={styles.tombol}>
              <button className={styles.satu}> <TbHelpSquareFilled size={20} /> Help Center</button>
              <button className={styles.dua}><FaPhone size={15} /> 0818-0706-7555</button>
              <button className={styles.tiga}><MdEmail size={15} />Email Us</button>
              <button className={styles.empat}><BsBorderStyle size={15} /> Order Parts</button>
            </div>
            <div className={styles.garis}></div>

            <div className={styles.list}>
              <div className={styles.produkkategori}>
                <h1>Produk</h1>
                <a href="/">Best Products</a>
                <a href="/">Tower Light </a>
                <a href="/">Gear Bearing Puller</a>
                <a href="/">Genset FAW-VW</a>
                <a href="/">Dinamo</a>
                <a href="/">Alternator</a>
                <a href="/">Kompresor</a>
                <a href="/">Konstruksi Jalan</a>
                <a href="/">Genset Welding</a>
                <a href="/">Alat Cat</a>
                <a href="/">Bar Bending</a>
                <a href="/">Diesel Engine</a>
                <a href="/">Sparepart</a>
                <a href="/">Water Pump</a>
                <a href="/">Genset Tsuzumi</a>
                <a href="/">Submersible Pump</a>
                <a href="/">Genset Silent</a>
                <a href="/">PROMO SPESIAL!</a>
                <a href="/">TKDN</a>
              </div>
              <div className={styles.pusatbantuan}>
                <h1>Pusat Bantuan</h1>
                <a href="/">Tentang Kami</a>
                <a href="/">Kontak Kami</a>
                <a href="/">Pelangi Teknik</a>
                <a href="/">Syarat dan Ketentuan</a>
                <a href="/">Kebijakan Privasi</a>
                <div className={styles.sosmed}>
                  <FaFacebookSquare /> Facebook
                </div>
                <div className={styles.sosmed}>
                  <FaInstagramSquare /> Instagram
                </div>
                <div className={styles.sosmed}>
                  <FaYoutube /> Youtube
                </div>
              </div>
              <div className={styles.alamat}>
                <h1>Alamat</h1>
                <div className={styles.listalamat} style={{ alignItems: 'flex-start' }}>
                  <div className={styles.ikon}>
                    <IoHomeSharp />
                  </div>
                  Alamat : LTC Glodok, Lantai GF2, Blok B7. 5, Jl. Hayam Wuruk No.127, Mangga Besar, Kec. Taman Sari, Daerah Khusus Ibukota Jakarta 11180
                </div>
                <div className={styles.listalamat} >
                  <div className={styles.ikon}>
                    <FaPhoneSquareAlt />
                  </div>
                  Nomer: 0818-0706-7555
                </div>
                <div className={styles.listalamat} >
                  <div className={styles.ikon}>
                    <MdEmail />
                  </div>
                  Email: pelangiteknik@rocketmail.com
                </div>
                <div className={styles.listalamat} >
                  <div className={styles.ikon}>
                    <FaCalendar />
                  </div>
                  Monday-Friday: 9:00 AM - 6:00 PM
                </div>
                <div className={styles.listalamat} >
                  <div className={styles.ikon}>
                    <FaCalendar />
                  </div>
                  Saturday: 9:00 AM - 5:00 PM
                </div>
                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63470.143651135986!2d106.7407549486328!3d-6.146281799999984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f79b5218b78d%3A0x92b919673c00d2c2!2sPT.%20Pelangi%20Teknik%20Indonesia!5e0!3m2!1sen!2sid!4v1722924758833!5m2!1sen!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bawah}>
          <div className={styles.bawahbawah}>
            E-Commerce Pelangi Teknik Indonesia © 2024 EPTI All rights reserved.
          </div>
        </div>
      </footer >
    </div >
  )
}
