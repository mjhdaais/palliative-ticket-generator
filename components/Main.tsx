"use client"

import { useState } from "react";
import { features, excerpt, domParser } from "@utils/features";

const FeatureModal = (props) => {
    const { title, description, setShowFeatureModal } = props;

    return (
        <div className="feature_modal">
            <div className="modal_content">
                <div className="modal_content_header">
                    <div>
                        {/* <span className="close" onClick={() => setShowFeatureModal(false)}>&times;</span> */}
                        <h4>{title}</h4>
                    </div>
                </div>
                {/* <p>{description}</p> */}
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
                <div>
                    <span className="close" onClick={() => setShowFeatureModal(false)}>Close</span>
                </div>
            </div>
        </div>
    )
}

const CTA = () => {
    return (
        <section className="cta">
            <div className="container">
            <div className="cta__content">
                <p className="cta__paragraph">
                    {/* Promoting Equitable Financial Assessments: Empowering Students through Transparent Evaluations */}
                    Formalizing Student Funding: Biodata Submission in Accordance with Regulations
                </p>
                <p className="cta__button">
                    <button>Submit Your Biodata Now</button>
                </p>
            </div>
            </div>
        </section>
    )
}

const Feature = (props) => {
    const { excerptTitle, title, description: description } = props.feature
    const [showFeatureModal, setShowFeatureModal] = useState(false)
  
    const toggleModal = () => {
        setShowFeatureModal(!showFeatureModal);
    };
  
    return (
        <div className="feature">
            <h4>{excerptTitle}</h4>
            <hr />
            <p>
                {excerpt(domParser(description))}
                {showFeatureModal && 
                    <FeatureModal 
                        title={title} 
                        description={description} 
                        setShowFeatureModal={setShowFeatureModal} 
                    />
                }
                {!showFeatureModal && (
                    <span className="more" onClick={toggleModal}>more</span>
                )}
            </p>
        </div>
    )
}

const FeatureHeader = () => {
    return (
        <section className="features_header">
            <div className="container">
                <p className="features_header__content">
                    Empowering Futures: Seamless Student Loan assessment with Data Privacy & Insights!
                </p>
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
