const Feature = () => {
    return (
        <div className="container">
            <div className="feature">
                <h4>Bio-data Submission</h4>
                <p>
                    Bio-data evaluation plays a crucial role in assessing the financial 
                    capacity and eligibility of applicants in governmental student loan applications. 
                    To ensure equitable financial assessments
                </p>
            </div>
        </div>
    )
}

const FeatureHeader = () => {
    return (
        <section className="features_header">
            <div className="container">
                <div className="features_header__content">
                    Empowering Futures: Seamless Student Loan assessment with Data Privacy & Insights!
                </div>
            </div>
        </section>
    )
}

const Main = () => {
    return (
        <main>
            <FeatureHeader />
            <section className="features">
                <Feature />
            </section>
        </main>
        
    )
}

export default Main