import styles from '@/components/product.module.css'

export default function ProductSpecs({ data }) {

    return (
        <div>
            {data?.map((data, i) => {
                return (
                    <tbody key={i} className={styles.specs}>
                        <tr>
                            <th scope="row">{data?.title}</th>
                            <td>
                                : {data?.value}
                            </td>
                        </tr>
                    </tbody>
                )
            })}
        </div>
    )
}
