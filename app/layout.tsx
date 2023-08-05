import '@styles/globals.css'

export const metadata = {
    title: 'Biodata Evaluation for Government Student Loans',
    description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
    openGraph: {
        title: 'Biodata Evaluation for Government Student Loans',
        description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
        images: [
            {
                url: '@public/image/og/og_image.png',
                width: 800,
                height: 600,
              },
        ]
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