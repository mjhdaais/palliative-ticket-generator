import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap'
})

export default function Page() {
    return <header className={styles.header}>
            <section className={styles.column_i}>
                <h1 className={`${roboto.className} ${styles.title}`}>Student Loan Bio-data Submission</h1>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">FAQs</a>
            </section>
            <section className={styles.column_ii}>
                <div className={styles.searchField}>
                    <i><FontAwesomeIcon icon={faSearch} /></i>
                    <input type="search" placeholder="Check Assessment Status using NIN (National Identification Number)"/>
                </div>
            </section>
        </header>
}