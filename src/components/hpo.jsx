import styles from '@/components/hpo.module.css'
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { RiKeyboardBoxFill } from "react-icons/ri";
import Link from 'next/link';
export default function Hpo() {
    return (
        <div className={styles.container}>
            <div className={styles.containerdalam}>
                <div className={styles.list} >
                    <RiQuestionnaireFill size={30} className={styles.help} />
                    HELP CENTER
                </div>
                <div className={styles.list} >
                    <FaRegEdit size={30} className={styles.productregistion} />
                    PRODUCT REGISTRATION
                </div>
                <Link
                    href={'/shop'}
                    target='_blank'
                    className={styles.list} >
                    <RiKeyboardBoxFill size={30} className={styles.orderparts} />
                    ORDER PARTS
                </Link>
            </div>
        </div>
    )
}
