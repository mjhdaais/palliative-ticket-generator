import '@styles/globals.css'

export const metadata = {
    title: 'Biodata Evaluation for Government Student Loans',
    description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
    openGraph: {
        title: 'Biodata Evaluation for Government Student Loans',
        description: 'Biodata evaluation for fair student loan assessments. Discover the ethical considerations and measures for equitable access to educational loan.',
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