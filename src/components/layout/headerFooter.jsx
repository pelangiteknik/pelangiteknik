import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "@/components/layout/headerFooter.module.css"

export default function HeaderFooter({ children }) {
  return (
    <main className={styles.container} >
      <Header />
      <div className={styles.main}>
        {children}
      </div>
      <Footer />
    </main>
  )
}
