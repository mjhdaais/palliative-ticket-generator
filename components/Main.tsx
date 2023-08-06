// import features from "@utils/features"

// const Feature = () => {
//     return (
//         <div className="container">
//             <div className="feature">
//                 <h4>Bio-data Submission</h4>
//                 <p>
//                     Bio-data evaluation plays a crucial role in assessing the financial 
//                     capacity and eligibility of applicants in governmental student loan applications. 
//                     To ensure equitable financial assessments
//                 </p>
//             </div>
//         </div>
//     )
// }

// const FeatureHeader = () => {
//     return (
//         <section className="features_header">
//             <div className="container">
//                 <div className="features_header__content">
//                     Empowering Futures: Seamless Student Loan assessment with Data Privacy & Insights!
//                 </div>
//             </div>
//         </section>
//     )
// }

// const Main = () => {
//     return (
//         <main>
//             <FeatureHeader />
//             <section className="features">
//                 {features.map((feature, index) => {
//                     <Feature feature={feature} />
//                 })}
                
//             </section>
//         </main>
        
//     )
// }

// export default Main

import { features, excerpt } from "@utils/features";

// const Feature = (props: { feature: { title: string; excerpt: string } }) => {
//     const { title, excerpt } = props.feature;
//     return (
//         <div className="feature">
//             <h4>{title}</h4>
//             <p>{excerpt(excerpt)}</p>
//         </div>
//     )
// }

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
        </main>
    )
}

export default Main;
