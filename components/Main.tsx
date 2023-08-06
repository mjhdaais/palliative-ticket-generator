import { features, excerpt } from "@utils/features";

const CTA = () => {
    return (
        <section className="cta">
            <div className="container">
            <div className="cta__content">
                <p className="cta__paragraph">
                Promoting Equitable Financial Assessments: Empowering Students through Transparent Evaluations
                </p>
                <p className="cta__button">
                    <button>Submit Your Biodata Now</button>
                </p>
            </div>
            </div>
        </section>
    )
}

const Feature = (props: { feature: { title: string; excerpt: string } }) => {
    const { title, excerpt: featureExcerpt } = props.feature;
    const shortenedExcerpt = excerpt(featureExcerpt);
    return (
        <div className="feature">
            <h4>{title}</h4>
            <p>
                {shortenedExcerpt}
                <a href="#">more</a>
            </p>
            
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
                <div className="container">
                    {features.map((feature, index) => (
                        <Feature key={index} feature={feature} />
                    ))}
                </div>
            </section>
            <CTA />
        </main>
    )
}

export default Main;
