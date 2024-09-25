import ogImage from "@/assets/og/og-image.jpg";
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Studio89",
    description:
        "We believe in the power of creativity and the endless possibilities it brings.",
    keywords: ["Studio89", "creative studio", "design", "art", "projects"],
    authors: [{ name: "Studio89 Team" }],
    openGraph: {
        title: "Studio89",
        description:
            "We believe in the power of creativity and the endless possibilities it brings.",
        url: "https://studio89bd.com",
        images: [
            {
                url: `https://studio89bd.com${ogImage.src}`,
                alt: "Studio89 OG Image",
            },
        ],
        siteName: "Studio89",
    },
    twitter: {
        card: "summary_large_image",
        title: "Studio89",
        description:
            "We believe in the power of creativity and the endless possibilities it brings.",
        images: [
            {
                url: `https://studio89bd.com${ogImage.src}`,
                alt: "Studio89 Twitter Image",
            },
        ],
        site: "@YourTwitterHandle",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
