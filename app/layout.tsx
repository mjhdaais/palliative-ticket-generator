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
                url: 'https://drive.google.com/file/d/1hZZN9UPqh8cuskhNU5vNdWRXDUDYhxE7/view?usp=drive_link',
                width: 800,
                height: 600,
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