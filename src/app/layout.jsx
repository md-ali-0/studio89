
import Footer from "@/components/footer";
import Navbar from "@/components/header";
import { ThemeProvider } from "@/provider/ThemeProvider";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Studio89",
    description: "Studio89 Project",
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
                    <Footer/>
                </ThemeProvider>
            </body>
        </html>
    );
}
