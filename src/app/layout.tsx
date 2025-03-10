import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Solace Candidate Assignment",
    description: "Show us what you got",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="min-h-full">
            <body className={`${inter.className} min-h-full m-0`}>
                <div className="fixed inset-0 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#1d4339_100%)] -z-10 pointer-events-none" />
                <div className="fixed inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-9 pointer-events-none" />

                <div className="relative z-0 min-h-screen">{children}</div>
            </body>
        </html>
    )
}
