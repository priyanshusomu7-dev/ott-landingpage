"use client";

import { motion } from "framer-motion";
import { Play, Compass } from "lucide-react";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative w-full py-24 sm:py-32 overflow-hidden flex items-center justify-center">
            {/* Cinematic Background Glow Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center gap-6"
                >
                    {/* Headline */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl leading-tight">
                        Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Streaming?</span>
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-white/60 max-w-2xl leading-relaxed font-medium">
                        Discover thousands of movies, series, and exclusive originals.
                        Watch anytime, anywhere.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 w-full sm:w-auto">
                        <Link href="#" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all active:scale-95 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
                                <Play size={22} className="fill-black" />
                                Start Watching
                            </button>
                        </Link>

                        <Link href="#" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white rounded-full hover:bg-white/10 backdrop-blur-md transition-all active:scale-95 font-bold text-lg border border-white/10 hover:border-white/30">
                                <Compass size={22} strokeWidth={2.5} />
                                Explore Movies
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Subtle Top/Bottom Borders to blend evenly */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
}
