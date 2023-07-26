import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.module.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
    display: 'swap'
})

// ${roboto.className}
{/* <i><FontAwesomeIcon icon={faSearch} /></i> */}

export default function Page() {
    return <header className={`${roboto.className} ${styles.header}`}>
        {/* Navs */}
        <div className={`${styles.navs}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.row} ${styles.nav_wrapper}`}>
                    <div className={`${styles.col} ${styles.m6} ${styles.nav_links}`}>
                        <a href="#" className={`${styles.hide_small}`}>About</a>
                        <a href="#" className={`${styles.hide_small}`}>Contact</a>
                        <a href="#" className={`${styles.hide_small}`}>FAQs</a>
                        <i className={`${styles.hide_medium} ${styles.hide_large} ${styles.bars}`}>
                            <FontAwesomeIcon icon={faBars} />
                        </i>
                    </div>
                    
                    <div className={`${styles.col} ${styles.m6} ${styles.nav_button}`}>
                        <button>Submit Your Bio-data Now</button>
                    </div>
                </div>
            </div>
        </div>

        {/* Banner */}
        <div className={`${styles.banner}`}>
            <div className={`${styles.container}`}>
                <h1>Student Loan Bio-data Submission</h1>
                <p>Student Loan Bio-data</p>
                <p>Submission</p>
            </div>
        </div>

        {/* Search Field */}
        <div className={`${styles.search_field}`}>
            <div className={`${styles.container}`}>
                <input type="search" placeholder='Assessment Status using NIN (National Identification Number)' 
                className={`${styles.col} ${styles.s10}`} />
                <button className={`${styles.col} ${styles.s2}`}>Check</button>
            </div>
        </div>

        {/* Intro */}
        <div className={`${styles.features}`}>
            <div className={`${styles.container} ${styles.features_row}`}>
                <div className={`${styles.col} ${styles.m6}`}>
                    <h3>Bio-data Submission</h3>
                    <p>
                        Bio-data evaluation plays a crucial role in assessing the financial 
                        capacity and eligibility of applicants in governmental student loan applications. 
                        To ensure equitable financial assessments,
                    </p>
                </div>

                <div className={`${styles.col} ${styles.m6}`}>
                    <h3>Student Count and Analytics</h3>
                    <p>
                        Analytics plays a crucial role in governmental student loan applications, 
                        providing accurate student count information and valuable insights into student trends.
                    </p>
                </div>
            </div>

            <div className={`${styles.container} ${styles.features_row}`}>
                <div className={`${styles.col} ${styles.m6}`}>
                    <h3>Payment of a Refundable Fee</h3>
                    <p>
                        As part of the official and institutional procedures, it is a mandatory requirement for all 
                        students to remit a refundable fee payment of N200 upon the submission of their comprehensive and 
                        accurate bio-data.
                    </p>
                </div>

                <div className={`${styles.col} ${styles.m6}`}>
                    <h3>Privacy and Data Protection</h3>
                    <p>
                        Safeguarding data privacy is paramount in governmental student loan applications to protect individuals' 
                        personal information and ensure their trust in the process.
                    </p>
                </div>
            </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.cta_section}`}>
            <div className={`${styles.container}`}>
                <p>
                    Promoting Equitable Financial Assessments: Empowering Students through Transparent Evaluations
                </p>
                <p>
                    <button>Submit Your Bio-data Now</button>
                </p>
                
            </div>
        </div>

        {/* Footer */}
        {/* <div className={`${styles.footer}`}>
            <div className={`${styles.container}`}>
                <p className={`${styles.col} ${styles.m3}`}>EGL</p>
                <p className={`${styles.col} ${styles.m3}`}>About</p>
                <p className={`${styles.col} ${styles.m3}`}>Contact</p>
                <p className={`${styles.col} ${styles.m3}`}>edugovloans@gmail.com</p>
                <p className={``}>© 2019 Edugovloans. All rights reserved. </p>
            </div>
        </div> */}


                
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