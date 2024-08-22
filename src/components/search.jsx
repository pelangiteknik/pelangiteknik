import { useState } from "react";
import styles from "@/components/search.module.css"
import { FaSearch } from "react-icons/fa";

export default function Search() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle search logic here
        console.log(`Searching for ${searchTerm}...`);
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input type="text" placeholder="MODEL OR KEYWORD" />
            <button type="submit"><FaSearch color="white" /></button>
        </form>
    )
}
