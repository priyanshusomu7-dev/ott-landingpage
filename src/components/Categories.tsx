"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { categories } from "@/data/movies";

export default function Categories() {
    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Popular Categories</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {categories.map((category, index) => (
                    <motion.div
                        key={category.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative cursor-pointer aspect-[4/5] rounded-xl overflow-hidden shadow-lg"
                    >
                        {/* Background Image */}
                        <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                        {/* Darker hover overlay to make text pop */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Content */}
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col items-center justify-end h-full">
                            <h3 className="text-white text-lg sm:text-xl font-bold tracking-wide transition-transform duration-300 group-hover:-translate-y-2">
                                {category.name}
                            </h3>
                            {/* Animated Underline */}
                            <div className="h-[2px] w-0 bg-red-600 rounded-full transition-all duration-300 group-hover:w-8 mt-1 opacity-0 group-hover:opacity-100" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
