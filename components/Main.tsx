"use client"

import { useState } from "react";
import { features, excerpt } from "@utils/features";

const FeatureModal = (props) => {
    const { title, description, setShowFeatureModal } = props;
    // const { title, description } = props.feature;
    // const [isModalOpen, setModalOpen] = useState(false)

    // const openModal = () => {
    //     setModalOpen(true)
    // }

    // const closeModal = () => {
    //     setModalOpen(false)
    // }

    // const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    //     if (event.target instanceof HTMLDivElement && event.target.id === 'full_content_modal') {
    //       closeModal()
    //     }
    // }

    return (
        // <div 
        //     id="full_content_modal" 
        //     // className="full_content_modal"
        //     className={`full_content_modal${isModalOpen ? ' open' : ''}`}
        //     onClick={handleOutsideClick}
        // >
        //     <div className="modal__content">
        //         <span className={`close${!isModalOpen ? '' : ' hide'}`} onClick={closeModal}>&times;</span>
        //         <p>Some text in the Modal..</p>
        //     </div>
        // </div>

        <div className="feature_modal">
            <div className="modal_content">
                <span className="close" onClick={() => setShowFeatureModal(false)}>&times;</span>
                <h4>{title}</h4>
                <p>{description}</p>
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

// const Feature = (props: { feature: { title: string; excerpt: string } }) => {
//     const { title, excerpt: featureExcerpt } = props.feature;
//     const shortenedExcerpt = excerpt(featureExcerpt);
//     return (
//         <div className="feature">
//             <h4>{title}</h4>
//             <p>
//                 {shortenedExcerpt}
//                 <a href="#">more</a>
//             </p>
            
//         </div>
//     )
// }

const Feature = (props) => {
    const { excerptTitle, title, description: description } = props.feature
    // const [showFullDescription, setShowFullDescription] = useState(false)
    const [showFeatureModal, setShowFeatureModal] = useState(false)
  
    const toggleModal = () => {
        setShowFeatureModal(!showFeatureModal);
    };
  
    return (
        // <div className="feature">
        //     <h4>{excerptTitle}</h4>
        //     <p>
        //         {showFullDescription ? 
        //             <FeatureModal {...props} setShowFullDescription={setShowFullDescription} /> : 
        //             excerpt(descriptionExcerpt)
        //         }
        //         {!showFullDescription && (
        //             <a onClick={toggleExcerpt} href="#">more</a>
        //         )}
        //     </p>
        // </div>

        <div className="feature">
            <h4>{excerptTitle}</h4>
            <p>
                {excerpt(description)}
                {showFeatureModal && 
                    <FeatureModal 
                        title={title} 
                        description={description} 
                        setShowFeatureModal={setShowFeatureModal} 
                    />
                }
                {!showFeatureModal && (
                    <span onClick={toggleModal}>more</span>
                )}
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
