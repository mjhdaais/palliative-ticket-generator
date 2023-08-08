interface Feature {
    excerptTitle: string;
    title: string;
    description: string;
}

// export const excerpt = (intro: string) => {
//     return intro.substring(0, 130) + "..."
// }

export const excerpt = (intro: string, maxLength: number = 130) => {
    return intro.substring(0, maxLength) + "...";
}

export const features: Feature[] = [
    {
        excerptTitle: 'Biodata Submission',
        title: 'Biodata Submission for Government Student Loan Application',
        // excerpt: 'Biodata evaluation plays a crucial role in assessing the financial capacity and eligibility of applicants in governmental student loan applications. To ensure equitable financial assessments',
        description: 'Biodata evaluation plays a crucial role in the assessment process for government student loan applications. Applicants are required to submit their biodata, which includes important personal information, educational background, and other relevant details. This biodata is carefully reviewed to determine the eligibility of applicants for the student loan program. It helps authorities ensure that deserving students receive financial assistance to pursue their education and achieve their academic goals.'
    },

    {
        excerptTitle: 'Student Count and Analytics',
        title: 'Importance of Analytics in Government Student Loan Applications',
        // description: 'Analytics plays a crucial role in governmental student loan applications, providing accurate student count information and valuable insights into student trends.',
        description: 'Analytics plays a crucial role in streamlining and enhancing the efficiency of government student loan applications. By harnessing data-driven insights, analytics enables a thorough assessment of student profiles, educational trends, and financial needs. This comprehensive analysis helps in accurately determining the student count, ensuring that eligible applicants receive timely financial assistance. Additionally, analytics empowers policymakers to make informed decisions, allocate resources effectively, and tailor loan programs to better support aspiring students on their academic journey.'
    },

    {
        excerptTitle: 'Payment of a Refundable Fee',
        title: 'Payment of a Refundable Fee for Government Student Loan Applications',
        // description: 'As part of the official and institutional procedures, it is a mandatory requirement for all students to remit a refundable fee payment of N200 upon the submission of their comprehensive and accurate bio-data.',
        description: "As part of the official procedures, all applicants are required to remit a refundable fee of N200. If the student is deemed ineligible for the student loan after being assessed and evaluated, the fee will be fully refunded. Conversely, if the student qualifies for the student loan, the amount will be applied as part of the loan. This refundable fee not only helps ensure a fair evaluation process but also demonstrates the applicant's commitment to pursuing their educational goals."
    },

    {
        excerptTitle: 'Privacy and Data Protection',
        title: 'Privacy and Data Protection',
        // description: 'Safeguarding data privacy is paramount in governmental student loan applications to protect individuals personal information and ensure their trust in the process.',
        description: 'Ensuring robust data privacy measures is of utmost importance in government student loan applications. Rigorous protocols are implemented to safeguard individuals personal information from unauthorized access, data breaches, and misuse. Advanced encryption techniques are employed to secure sensitive data during transmission and storage. Regular audits and security assessments are conducted to maintain a high level of data protection. By prioritizing privacy, the government aims to instill trust and confidence in the loan application process, assuring applicants that their personal information is handled with the utmost care and confidentiality.'
    },
];

// export default features

// 'Safeguarding data privacy is paramount in governmental student loan applications to protect individuals personal information and ensure their trust in the process.'.substring(0, 130) + '...' + ' more'
