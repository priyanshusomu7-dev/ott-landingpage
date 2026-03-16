"use client";

import { useState, useEffect } from "react";
import { Search, Bell, Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Movies", href: "#" },
        { name: "Series", href: "#" },
        { name: "My List", href: "#" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${isScrolled || isMobileMenuOpen
                ? "bg-black/80 backdrop-blur-md border-white/10 shadow-2xl"
                : "bg-black/40 backdrop-blur-md border-white/10"
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center h-20">

                    {/* Left: Logo */}
                    <div className="flex-shrink-0 flex items-center pr-8">
                        <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
                            STREAM<span className="text-red-600">X</span>
                        </Link>
                    </div>

                    {/* Center: Desktop Menu */}
                    <div className="hidden md:flex flex-1 items-center justify-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative text-[15px] font-medium text-white/70 hover:text-white transition-colors group py-2"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full opacity-0 group-hover:opacity-100"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center justify-end gap-5 flex-shrink-0 ml-auto md:ml-0">
                        <button className="text-white/80 hover:text-white transition-all transform hover:scale-110 duration-200">
                            <Search size={20} strokeWidth={2.5} />
                        </button>
                        <button className="text-white/80 hover:text-white transition-all transform hover:scale-110 duration-200 relative hidden sm:block">
                            <Bell size={20} strokeWidth={2.5} />
                            <span className="absolute top-0 right-0.5 w-2 h-2 bg-red-600 rounded-full border border-black"></span>
                        </button>

                        {/* User Avatar Dropdown */}
                        <ProfileDropdown />

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white/80 hover:text-white ml-2 transition-transform active:scale-95"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden bg-[#050505] overflow-y-auto"
                    >
                        <div className="px-6 pt-8 pb-32 flex flex-col gap-8 min-h-screen">
                            <div className="flex flex-col gap-6">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-3xl font-semibold text-white/90 hover:text-white transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="mt-8 pt-8 border-t border-white/10 flex items-center gap-6"
                            >
                                <div className="flex items-center gap-4 text-white/80 hover:text-white">
                                    <Bell size={24} />
                                    <span className="text-xl font-medium">Notifications</span>
                                    <span className="ml-auto bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold">3 NEW</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
