// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '500',
    subsets: ['latin'],
    display: 'swap'
})

// ${roboto.className}
{/* <i><FontAwesomeIcon icon={faSearch} /></i> */}

export default function Page() {
    return <header className={`${styles.container} ${styles.header}`}>
                <div className={`${styles.row}`}>
                    <div className={`${styles.col} ${styles.s4}`}>Column 1 content</div>
                    <div className={`${styles.col} ${styles.s4}`}>Column 2 content</div>
                    <div className={`${styles.col} ${styles.s4}`}>Column 3 content</div>
                </div>
            {/* <section className={`${styles.header_col_i} w3-row`}>
                <div className={`${roboto.className} ${styles.title} w3-col m12 l10`}>
                    <h1>Student Loan Bio-data Submission</h1>
                </div>
                <div className={`${styles.navs} w3-hide-small w3-hide-medium l2`}>
                    <a href="#" className=''>About</a>
                    <a href="#" className=''>Contact</a>
                    <a href="#" className=''>FAQs</a>
                </div>
            </section>
            <section className={`${styles.header_col_ii}`}>
                <div className=''></div>
                <div className={`${styles.searchField}`}>
                    <input type="search" placeholder="Check Assessment Status using NIN (National Identification Number)"/>
                    <button>Check</button>
                </div>
            </section> */}
        </header>
}