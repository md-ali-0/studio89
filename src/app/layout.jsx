
import ogImage from '@/assets/og/og-image.jpg';
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Studio89",
    description: "we believe in the power of creativity and the endless possibilities it brings.",
    keywords: "Studio89, creative studio, design, art, projects",
    author: "Studio89 Team",
    ogTitle: "Studio89",
    ogDescription: "we believe in the power of creativity and the endless possibilities it brings.",
    ogImage: ogImage.src,
    ogUrl: "https://studio89bd.com",
    twitterCard: "summary_large_image",
    twitterTitle: "Studio89",
    twitterDescription: "we believe in the power of creativity and the endless possibilities it brings.",
    twitterImage: ogImage.src,
    twitterSite: "@YourTwitterHandle",
};

export default function RootLayout({ children }) {
    console.log(ogImage);
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
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    );
}
