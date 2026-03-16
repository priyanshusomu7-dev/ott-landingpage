"use client";

import Image from "next/image";
import { Play, Plus } from "lucide-react";
import { platformOriginals } from "@/data/movies";

export default function FeaturedOriginals() {
    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
            <div className="flex flex-col mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight uppercase">
                    StreamX <span className="text-red-600">Originals</span>
                </h2>
                <p className="text-white/60 mt-2 text-sm md:text-base max-w-2xl">
                    Exclusive, critically acclaimed cinematic experiences created just for you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                {platformOriginals.map((original) => (
                    <div
                        key={original.id}
                        className="group relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] lg:aspect-[4/3] bg-[#0a0a0a] cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] ring-1 ring-white/5 hover:ring-white/20"
                    >
                        {/* Background Image */}
                        <Image
                            src={original.image}
                            alt={original.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            sizes="(max-width: 1024px) 100vw, 33vw"
                        />

                        {/* Immersive Dark Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300" />

                        {/* Content Area */}
                        <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                            {/* Platform badge */}
                            <div className="mb-auto">
                                <span className="px-3 py-1 bg-red-600/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded shadow-lg">
                                    Originals
                                </span>
                            </div>

                            <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                                {/* Meta tags */}
                                <div className="flex items-center gap-2 text-xs font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <span className="text-green-500">{original.match}</span>
                                    <span className="text-white/40">•</span>
                                    <span className="text-white/80">{original.duration}</span>
                                    <span className="text-white/40">•</span>
                                    <span className="px-1.5 py-0.5 border border-white/30 rounded text-[10px] text-white/70">{original.rating}</span>
                                </div>

                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight shadow-black drop-shadow-lg">
                                    {original.title}
                                </h3>

                                <p className="text-sm text-white/70 line-clamp-2 mb-6 max-w-[90%] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                    {original.description}
                                </p>

                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded hover:bg-white/90 transition-colors shadow-lg hover:scale-105 ease-out duration-200 text-sm font-bold">
                                        <Play size={16} className="fill-black" />
                                        Watch Now
                                    </button>
                                    <button className="flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md text-white rounded hover:bg-white/20 hover:text-white transition-all ring-1 ring-white/20 hover:scale-105 ease-out duration-200">
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
