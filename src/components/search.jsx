import styles from "@/components/search.module.css"
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useStore } from "@/zustand/zustand";
import { useState } from "react";

export default function Search({ kondisi }) {
    const router = useRouter()

    const setSearchTerm = useStore((state) => state.setSearchTerm)
    const setSearchTermClose = useStore((state) => state.setSearchTermClose)

    const [cari, setCari] = useState('')
    const [close, setClose] = useState(false)
    const handleChange = (event) => {
        setCari(event.target.value)
        setClose(cari != '')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle search logic here
        router.push(`/search/${cari}`)
        console.log(`Searching for ${cari}...`);
        setSearchTerm(cari)
        setSearchTermClose()
    }


    const handleClose = (event) => {
        event.preventDefault();
        setSearchTermClose()
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" onChange={handleChange} placeholder="MODEL OR KEYWORD" />
            <button className={styles.desktop} type="submit"><FaSearch color="white" /></button>
            {close && <button className={styles.mobile} type="submit"><FaSearch color="white" /></button>}
            {!close && <button onClick={handleClose} className={styles.close}>X</button>}
        </form>
    )
}
