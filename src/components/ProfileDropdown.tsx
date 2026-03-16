"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserCircle2, LogIn, UserPlus, HelpCircle } from "lucide-react";
import Link from "next/link";

export default function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { icon: LogIn, label: "Login", href: "#", primary: true },
        { icon: UserPlus, label: "Sign Up", href: "#" },
        { icon: HelpCircle, label: "Help Center", href: "#", separator: true },
    ];

    return (
        <div
            className="relative flex-shrink-0"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            {/* Guest Avatar Button */}
            <button
                className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 cursor-pointer border-[2px] transition-all duration-300 flex items-center justify-center relative overflow-hidden focus:outline-none ${isOpen ? 'border-white/50 !scale-110 shadow-[0_0_20px_rgba(255,255,255,0.1)] bg-white/20' : 'border-transparent hover:border-white/30 hover:scale-105 hover:bg-white/15'}`}
                aria-label="Guest Profile"
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <UserCircle2 className={`transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/70'}`} size={24} strokeWidth={1.5} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute right-0 top-full mt-2 w-56 md:w-64 bg-[#121212]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden z-50 origin-top-right ring-1 ring-white/5"
                    >
                        {/* Top Section - Guest Welcome */}
                        <div className="p-5 border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent text-center">
                            <h3 className="text-white font-bold text-lg mb-1 tracking-wide">Welcome</h3>
                            <p className="text-white/50 text-xs font-medium leading-relaxed">Sign in to save your watchlist and stream anywhere.</p>
                        </div>

                        {/* Menu Options */}
                        <div className="p-2 flex flex-col gap-1">
                            {menuItems.map((item, index) => (
                                <div key={item.label}>
                                    {item.separator && <div className="h-[1px] w-full bg-white/10 my-1 rounded-full" />}
                                    <Link
                                        href={item.href}
                                        className={`group flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${item.primary ? 'text-white bg-red-600/90 hover:bg-red-500 shadow-lg shadow-red-600/20' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon
                                                size={18}
                                                className={`transition-transform duration-200 group-hover:scale-110 ${item.primary ? 'text-white' : 'text-white/50 group-hover:text-white'}`}
                                            />
                                            {item.label}
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
