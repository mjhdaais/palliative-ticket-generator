import '@styles/globals.css'
// import og_image from '@public/image/og/og_image.png'

export const metadata = {
    title: 'Biodata Evaluation for Student Loans',
    description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
    openGraph: {
        title: 'Biodata Evaluation for Student Loans',
        description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
        images: [
            {
                url: 'https://i.ibb.co/47mc0Tx/og-image.png',
                // width: 800,
                // height: 600,
              },
        ],
        url: 'https://education-loan.vercel.app/'
    }
}

const RootLayout = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    )
}

export default RootLayout

// govloansbio.com
// support@govloansbio.com.ng
// xoroceg946@backva.com