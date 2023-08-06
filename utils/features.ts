interface Feature {
    title: string;
    excerpt: string;
}

// export const excerpt = (intro: string) => {
//     return intro.substring(0, 130) + "..."
// }

export const excerpt = (intro: string, maxLength: number = 130) => {
    return intro.substring(0, maxLength) + "...";
}

export const features: Feature[] = [
    {
        title: 'Biodata Submission',
        excerpt: 'Biodata evaluation plays a crucial role in assessing the financial capacity and eligibility of applicants in governmental student loan applications. To ensure equitable financial assessments',
    },
    {
        title: 'Student Count and Analytics',
        excerpt: 'Analytics plays a crucial role in governmental student loan applications, providing accurate student count information and valuable insights into student trends.',
    },
    {
        title: 'Payment of a Refundable Fee',
        excerpt: 'As part of the official and institutional procedures, it is a mandatory requirement for all students to remit a refundable fee payment of N200 upon the submission of their comprehensive and accurate bio-data.',
    },
    {
        title: 'Privacy and Data Protection',
        excerpt: 'Safeguarding data privacy is paramount in governmental student loan applications to protect individuals personal information and ensure their trust in the process.',
    },
];

// export default features

// 'Safeguarding data privacy is paramount in governmental student loan applications to protect individuals personal information and ensure their trust in the process.'.substring(0, 130) + '...' + ' more'
