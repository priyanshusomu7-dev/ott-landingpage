import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Apple, Play } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] border-t border-white/5 py-12 lg:py-16 mt-16 relative z-10">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
                    {/* Brand & About */}
                    <div className="flex flex-col gap-5 lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white uppercase inline-block mb-2">
                            STREAM<span className="text-red-500">X</span>
                        </Link>
                        <p className="text-white/50 text-sm leading-relaxed max-w-sm font-medium">
                            Your ultimately curated cinematic journey. Discover, stream, and share the best premium movies and shows across the globe without limits.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 mt-4">
                            <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all ring-1 ring-white/5 hover:ring-white/20">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all ring-1 ring-white/5 hover:ring-white/20">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all ring-1 ring-white/5 hover:ring-white/20">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="flex items-center justify-center h-10 w-10 rounded-full bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all ring-1 ring-white/5 hover:ring-white/20">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links Grouping */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        {/* Info Links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-2">Company</h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">About</Link></li>
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Careers</Link></li>
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Press</Link></li>
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Support Links */}
                        <div className="flex flex-col gap-4">
                            <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-2">Support</h4>
                            <ul className="flex flex-col gap-3">
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Help Center</Link></li>
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Terms of Service</Link></li>
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-white/50 hover:text-white text-sm transition-colors font-medium">Cookie Preferences</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* App Download */}
                    <div className="flex flex-col gap-5 lg:col-span-1">
                        <h4 className="text-white text-sm font-bold tracking-wider uppercase mb-2">Get the App</h4>
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                            {/* App Store Button */}
                            <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl p-3 transition-all hover:-translate-y-1">
                                <Apple size={28} className="text-white" />
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] text-white/60 mb-1 font-medium tracking-wide">Download on the</span>
                                    <span className="text-sm text-white font-bold">App Store</span>
                                </div>
                            </a>

                            {/* Google Play Button */}
                            <a href="#" className="flex items-center gap-3 bg-white/5 hover:bg-white/10 ring-1 ring-white/10 rounded-xl p-3 transition-all hover:-translate-y-1">
                                <Play size={24} className="text-white ml-0.5" />
                                <div className="flex flex-col items-start leading-none ml-1">
                                    <span className="text-[10px] text-white/60 mb-1 font-medium tracking-wide">GET IT ON</span>
                                    <span className="text-sm text-white font-bold">Google Play</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs font-medium">
                        &copy; {new Date().getFullYear()} StreamX, Inc. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 text-white/40 text-xs font-medium">
                        <Link href="#" className="hover:text-white transition-colors">Terms</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
