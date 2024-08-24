import styles from "@/components/search.module.css"
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useStore } from "@/zustand/zustand";
import { useState } from "react";

export default function Search() {
    const router = useRouter()

    const setSearchTerm = useStore((state) => state.setSearchTerm)
    const searchTerm = useStore((state) => state.searchTerm)

    const [cari, setCari] = useState()
    const handleChange = (event) => {
        setCari(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle search logic here
        router.push(`/search/${cari}`)
        console.log(`Searching for ${cari}...`);
        setSearchTerm(cari)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" onChange={handleChange} placeholder="MODEL OR KEYWORD" />
            <button type="submit"><FaSearch color="white" /></button>
        </form>
    )
}
