interface Feature {
    excerptTitle: string;
    title: string;
    description: string;
}

export const domParser = (htmlText: string): string => {
    const parser = new DOMParser()
    const parsedDocument = parser.parseFromString(htmlText, 'text/html')

    // Remove script and style elements
    // const scripts = parsedDocument.querySelectorAll('script, style')
    // scripts.forEach((script) => script.remove())

    const plainText = parsedDocument.body.textContent || ''
  
    return plainText
}
   
export const excerpt = (intro: string, maxLength: number = 130) => {
    return intro.substring(0, maxLength) + "...";
}

export const features: Feature[] = [
    {
        excerptTitle: 'Biodata Submission',
        title: 'Biodata Submission for Student Loan Application',
        description: '<p>Biodata evaluation plays a crucial role in the assessment process for government student loan applications.</p> <p>Applicants are required to submit their biodata, which includes important personal information, educational background, and other relevant details.</p> <p>This biodata is carefully reviewed to determine the eligibility of applicants for the student loan program.</p> <p>It helps authorities ensure that deserving students receive financial assistance to pursue their education and achieve their academic goals.</p>'
    },

    {
        excerptTitle: 'Student Count and Analytics',
        title: 'Importance of Analytics in Student Loan Applications',
        description: '<p>Analytics plays a crucial role in streamlining and enhancing the efficiency of government student loan applications.</p> <p>By harnessing data-driven insights, analytics enables a thorough assessment of student profiles, educational trends, and financial needs.</p> <p>This comprehensive analysis helps in accurately determining the student count, ensuring that eligible applicants receive timely financial assistance.</p> <p>Additionally, analytics empowers policymakers to make informed decisions, allocate resources effectively, and tailor loan programs to better support aspiring students on their academic journey.</p>'
    },

    {
        excerptTitle: 'Payment of a Refundable Fee',
        title: 'Payment of a Refundable Fee for Student Loan Applications',
        description: `<p>As part of the official procedures, all applicants are required to remit a refundable fee of ₦200. If the student is deemed ineligible for the student loan after being assessed and evaluated, the fee will be fully refunded to them. Conversely, if the student qualifies for the student loan, the amount will be applied as part of the loan. <p>This refundable fee not only helps ensure a fair evaluation process but also demonstrates the applicant's commitment to pursuing their educational goals.</p>`
    },

    {
        excerptTitle: 'Privacy and Data Protection',
        title: 'Privacy and Data Protection',
        description: '<p>Ensuring robust data privacy measures is of utmost importance in student loan applications. Rigorous protocols are implemented to safeguard individuals personal information from unauthorized access, data breaches, and misuse.</p> <p>Advanced encryption techniques are employed to secure sensitive data during transmission and storage.</p> <p>Regular audits and security assessments are conducted to maintain a high level of data protection.</p> <p>By prioritizing privacy, the government aims to instill trust and confidence in the loan application process, assuring applicants that their personal information is handled with the utmost care and confidentiality.</p>'
    },
];