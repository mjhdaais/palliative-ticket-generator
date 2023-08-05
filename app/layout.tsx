import '@styles/globals.css'
import og_image from '@public/image/og/og_image.png'

export const metadata = {
    title: 'Biodata Evaluation for Government Student Loans',
    description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
    openGraph: {
        title: 'Biodata Evaluation for Government Student Loans',
        description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
        images: [
            {
                url: 'https://img.freepik.com/free-photo/abstract-blur-empty-green-gradient-studio-well-use-as-background-website-template-frame-business-report_1258-54629.jpg?w=740&t=st=1691197827~exp=1691198427~hmac=0bb8adf8616f6749b18c74b66f48a709b0eb3de7d945fb58c1e5c43e4aa73912',
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