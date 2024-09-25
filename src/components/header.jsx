"use client";

import logoDark from "@/assets/logo/dark-logo.png";
import logo from "@/assets/logo/logo.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { Button } from "./ui/button";
import Container from "./ui/container";
import { ThemeSwitcher } from "./ui/theme-switcher";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const pathname = usePathname();
    console.log(pathname);
    return (
        <header className="border-b shadow py-4 px-4 sm:px-10 font-sans min-h-[75px]">
            <Container>
                <div className="flex    tracking-wide relative z-50">
                    <div className="flex flex-wrap items-center justify-between gap-4 w-full">
                        <Link href={"/"}>
                            {theme == "light" ? (
                                <Image
                                    src={logo}
                                    alt="logo"
                                    className="w-28 sm:w-36"
                                    width={114}
                                    height={20}
                                />
                            ) : (
                                <Image
                                    src={logoDark}
                                    alt="logo"
                                    className="w-28 sm:w-36"
                                    width={114}
                                    height={20}
                                />
                            )}
                        </Link>

                        <div
                            className="lg:ml-16 max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
                            style={{ display: isOpen ? "block" : "none" }}
                        >
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white dark:bg-slate-600 p-3"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 fill-black"
                                    viewBox="0 0 320.591 320.591"
                                >
                                    <path
                                        d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                        data-original="#000000"
                                    ></path>
                                    <path
                                        d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                        data-original="#000000"
                                    ></path>
                                </svg>
                            </button>

                            <ul className="lg:flex lg:gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white dark:bg-[#020817] max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                                <li
                                    className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link href="/">
                                        {theme == "light" ? (
                                            <Image
                                                src={logo}
                                                alt="logo"
                                                className="w-28 sm:w-36"
                                                width={114}
                                                height={20}
                                            />
                                        ) : (
                                            <Image
                                                src={logoDark}
                                                alt="logo"
                                                className="w-28 sm:w-36"
                                                width={114}
                                                height={20}
                                            />
                                        )}
                                    </Link>
                                </li>
                                <li
                                    className="max-lg:border-b max-lg:py-3 px-3"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Link
                                        href="/"
                                        className={
                                            pathname === "/"
                                                ? "active"
                                                : "navlink"
                                        }
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
                                    <Link href="#" className={"navlink"}>
                                        Services
                                    </Link>
                                    <ul className="absolute shadow-lg  bg-white dark:bg-gray-950 space-y-3 lg:top-10 max-lg:top-14 -left-6 min-w-[230px] z-10 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-2 group-active:opacity-100 group-active:max-h-[700px] group-hover:border group-active:pb-4 group-active:pt-2 transition-all duration-500 rounded-md ">
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/service/live-stream"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Live Stream
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/service/podcast"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                PodCast
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/service/video-content"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Video Content
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/service/social-media-content"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Social Media Content
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/service/edTech-classroom"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                EdTech Classroom
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/service/photo-shoot"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Photo Shoot
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="group max-lg:border-b max-lg:py-3 px-3 relative">
                                    <Link href="#" className={"navlink"}>
                                    Packages
                                    </Link>
                                    <ul className="absolute shadow-lg  bg-white dark:bg-gray-950 space-y-3 lg:top-10 max-lg:top-14 -left-6 min-w-[230px] z-10 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-2 group-active:opacity-100 group-active:max-h-[700px] group-hover:border group-active:pb-4 group-active:pt-2 transition-all duration-500 rounded-md ">
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/packages/live-stream"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Live Stream Packages
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/packages/podcast"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                PodCast Packages
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/packages/content-creator"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Content Creator Packages
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/packages/ed-tech"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                EdTech Packages
                                            </Link>
                                        </li>
                                        <li className="border-b dark:border-gray-600 last:border-0">
                                            <Link
                                                href={"/packages/photography"}
                                                className="hover:text-green text-gray-600 dark:text-gray-300 text-[15px] block"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                Product Photography Packages
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="max-lg:border-b max-lg:py-3 px-3">
                                    <Link
                                        href="/about"
                                        className={
                                            pathname === "/about"
                                                ? "active"
                                                : "navlink"
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="max-lg:border-b max-lg:py-3 px-3">
                                    <Link
                                        href="http://studio89crm.liveblog365.com/?ng=login/"
                                        target="_blank"
                                        className='navlink'
                                        onClick={() => setIsOpen(false)}
                                    >
                                        CRM
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="flex gap-2">
                            <ThemeSwitcher />
                            <Button className="hidden sm:block">Get Started</Button>
                            <button
                                className="block md:hidden"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                {isOpen ? (
                                    <LuX size={20} />
                                ) : (
                                    <LuMenu size={20} />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;
