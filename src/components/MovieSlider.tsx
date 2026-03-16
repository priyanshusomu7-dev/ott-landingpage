"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Plus, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Movie {
    id: number;
    title: string;
    image: string;
    rating?: string;
    duration?: string;
    match?: string;
    genres?: string[];
}

interface MovieSliderProps {
    title: string;
    movies: Movie[];
}

export default function MovieSlider({ title, movies }: MovieSliderProps) {
    return (
        <div className="w-full py-6 pl-4 sm:pl-6 lg:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight max-w-[1400px] mx-auto">
                {title}
            </h2>

            <div className="relative group/slider max-w-[1400px] mx-auto py-8">
                <Swiper
                    loop={true}
                    speed={800} // Smooth, interactive slide speed
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={24}
                    centeredSlides={true} // makes center card the focus
                    slideToClickedSlide={true} // Allows clicking any poster to center and select it
                    slidesPerView={1.5}
                    autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }} // Proper delay allows manual control
                    breakpoints={{
                        640: { slidesPerView: 2.5, spaceBetween: 24 },
                        768: { slidesPerView: 3.5, spaceBetween: 32 },
                        1024: { slidesPerView: 4.5, spaceBetween: 40 },
                    }}
                    className="w-full !px-4 sm:!px-8 lg:!px-12 cinematic-swiper"
                    style={{ overflow: 'visible' }}
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id} className="py-8 transition-transform duration-700 ease-out">
                            {({ isActive }) => (
                                <motion.div
                                    className={`relative rounded-xl group bg-[#101010] flex flex-col aspect-[4/5] object-cover transition-all duration-700 mx-auto ${isActive ? 'scale-[1.2] opacity-100 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.6)]' : 'scale-[0.85] opacity-50 z-10 blur-[3px]'}`}
                                >
                                    <div className="absolute inset-0 z-10 w-full h-full rounded-xl overflow-hidden transition-all duration-500 ease-out origin-center group-hover:scale-[1.05] group-hover:z-50 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]">
                                        {/* Cinematic Poster Image */}
                                        <div className="relative w-full h-full cursor-pointer">
                                            <Image
                                                src={movie.image}
                                                alt={movie.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                sizes="(max-width: 640px) 70vw, 30vw"
                                            />
                                            {/* Permanent Dark Gradient for text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                                            {/* Movie Title Overlay (Always visible on active, rises on hover) */}
                                            <div className={`absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end transition-all duration-500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight drop-shadow-lg leading-tight uppercase">
                                                    {movie.title}
                                                </h3>

                                                {/* Meta Info that beautifully fades in on hover */}
                                                <div className="flex flex-col gap-3 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 ease-in-out mt-1">
                                                    <div className="flex items-center gap-2 text-[12px] font-semibold text-white/90">
                                                        {movie.match && <span className="text-green-500 font-bold drop-shadow">{movie.match}</span>}
                                                        {movie.rating && <span className="px-1.5 py-0.5 border border-white/40 rounded text-[10px] text-white/90 backdrop-blur-sm">{movie.rating}</span>}
                                                        {movie.duration && <span className="text-white/90 drop-shadow">{movie.duration}</span>}
                                                    </div>

                                                    {movie.genres && (
                                                        <div className="flex flex-wrap items-center gap-1.5">
                                                            {movie.genres.map((genre, idx) => (
                                                                <div key={genre} className="flex items-center gap-1.5">
                                                                    <span className="text-[12px] text-white/70 font-medium">{genre}</span>
                                                                    {idx < movie.genres!.length - 1 && (
                                                                        <span className="w-1 h-1 rounded-full bg-white/40" />
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}

                                                    <button className="mt-2 flex items-center justify-center gap-2 w-full py-2.5 bg-white text-black font-bold uppercase tracking-wider text-xs rounded hover:bg-white/90 transition-colors shadow-lg">
                                                        <Play size={14} className="fill-black" /> Watch Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
