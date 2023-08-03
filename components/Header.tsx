import Image from "next/image"
import bgImage from '@public/image/young-african-female-student-with-facemask-holding-her-textbooks-campus-area.webp'

const Header = () => {
    return (
        <header className="header">
            <div className="radial_background"></div>
            <Image 
                src={bgImage} 
                alt={"Young african female student with facemask holding her textbooks campus area"}
                className="header_image"
                style={{
                    objectFit: "cover",
                    height: '100%',
                }}
            />
            <nav className="nav">
            <div className="container">
                <div className="nav__content">
                    <div className="nav__links">
                        <a className="nav__link" href="#">Inquery</a>
                        <a className="nav__link" href="#">FAQS</a>
                    </div>
                </div>
            </div>
            </nav>    
        
            <div className="container">
            <div className="header__content">
                <h1>Student Loan Biodata <br /> Submission</h1>
                <p>Fuel Your Educational Dreams: Unlock Your Potential, Embrace Learning, and Soar Towards Success!</p>
                <div className="header__search">
                <form className="search__form">
                    <input className="search__input" type="search" placeholder="Check Assessment Status using NIN (National Identification Number)" />
                    <button className="search__button">Check</button>
                </form>
                </div>
            </div>
            </div>
      </header>
    )
}

export default Header