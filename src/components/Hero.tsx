"use client";

import { useState } from "react";
import Image from "next/image";
import { heroMovie, trendingMovies, platformOriginals } from "@/data/movies";
import { Play, Plus, Home, User, Wifi, Film, Tv, Settings, LogOut, ChevronRight, History, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    const [activeTab, setActiveTab] = useState('home');
    return (
        <div className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax effect feeling */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src={heroMovie.image}
                    alt={`${heroMovie.title} background`}
                    fill
                    className="object-cover scale-105"
                    priority
                    quality={90}
                />
                {/* Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/40 z-0" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Side Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-1/2 flex flex-col items-start"
                    >
                        {/* Meta tags */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap items-center gap-4 mb-6 text-sm sm:text-base font-semibold text-white/90 tracking-wide"
                        >
                            <span className="text-green-500 bg-green-500/10 px-2 py-0.5 rounded backdrop-blur-sm">{heroMovie.match}</span>
                            <span>{heroMovie.year}</span>
                            <span className="px-2 py-0.5 border border-white/30 rounded backdrop-blur-sm">{heroMovie.rating}</span>
                            <span>{heroMovie.duration}</span>
                            <span className="px-2 py-0.5 bg-red-600 rounded text-white text-xs uppercase tracking-wider font-bold shadow-lg shadow-red-600/30">
                                Top 10
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                                {heroMovie.title}
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/70 mb-8 max-w-xl leading-relaxed font-light"
                        >
                            {heroMovie.description}
                        </motion.p>

                        {/* Genres */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap gap-x-4 gap-y-2 mb-10"
                        >
                            {heroMovie.genres.map((genre, index) => (
                                <div key={genre} className="flex items-center gap-2">
                                    <span className="text-[15px] font-medium text-white/80">{genre}</span>
                                    {index < heroMovie.genres.length - 1 && (
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="flex flex-wrap items-center gap-5 w-full sm:w-auto"
                        >
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-all active:scale-95 font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
                                <Play size={24} className="fill-black" />
                                Watch Now
                            </button>
                            <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 backdrop-blur-md transition-all active:scale-95 font-bold text-lg border border-white/10 hover:border-white/30">
                                <Plus size={24} strokeWidth={2.5} />
                                Add to List
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side Realistic Static Mobile Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -15, z: -100 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="hidden lg:flex w-1/3 relative perspective-1000 justify-center items-center"
                    >
                        {/* Device Frame */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-full max-w-[340px] aspect-[9/19.5] bg-[#050505] rounded-[3.5rem] border-[12px] border-[#2a2a2a] shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_80px_rgba(255,255,255,0.05)] overflow-hidden transform-gpu flex flex-col items-center"
                        >
                            {/* Inner Bezel Edge (creates depth) */}
                            <div className="absolute inset-0 rounded-[2.8rem] border-[3px] border-black pointer-events-none z-50"></div>

                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-50 flex justify-between items-center px-2">
                                {/* Camera lens detail */}
                                <div className="w-3 h-3 rounded-full bg-[#0a0a0a] border border-white/10 flex justify-center items-center ml-1 object-cover shadow-inner">
                                    <div className="w-1 h-1 rounded-full bg-blue-900/50 absolute"></div>
                                </div>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500/20 mr-2 relative">
                                    <div className="w-1 h-1 rounded-full bg-green-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_2px_#22c55e]"></div>
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="w-full h-10 pt-2 px-6 flex justify-between items-center text-[11px] font-semibold text-white z-40 relative bg-gradient-to-b from-black/80 to-transparent">
                                <span>9:41</span>
                                <div className="flex items-center gap-1.5">
                                    {/* Cellular Signal Bars */}
                                    <div className="flex items-end gap-[1.5px] h-2.5 mb-[1px]">
                                        <div className="w-[3px] h-1 bg-white rounded-sm" />
                                        <div className="w-[3px] h-1.5 bg-white rounded-sm" />
                                        <div className="w-[3px] h-2 bg-white rounded-sm" />
                                        <div className="w-[3px] h-2.5 bg-white rounded-sm" />
                                    </div>
                                    <Wifi size={13} className="mb-[1px]" />
                                    <div className="flex items-center gap-1">
                                        <span>100%</span>
                                        {/* Battery Icon */}
                                        <div className="relative flex items-center">
                                            <div className="w-[22px] h-[11px] border border-white/50 rounded-[3px] p-[1px] flex items-center">
                                                <div className="w-full h-full bg-white rounded-[1.5px]" />
                                            </div>
                                            <div className="w-[1.5px] h-1.5 bg-white/50 rounded-r-sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Screen Content - Static OTT UI */}
                            <div className="w-full h-full relative overflow-hidden -mt-10 pt-10">
                                <div className="w-full flex flex-col gap-6 pt-4 pb-20 px-4 h-full overflow-y-auto no-scrollbar">
                                    {activeTab === 'home' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                                            {/* App Header */}
                                            <div className="flex justify-between items-center px-1">
                                                <span className="text-white text-base font-bold tracking-tight">STREAM<span className="text-red-600">X</span></span>
                                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                    <User size={12} className="text-white" />
                                                </div>
                                            </div>

                                            {/* Mock Featured Movie */}
                                            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 shrink-0">
                                                <Image src={heroMovie.image} alt="Featured" fill className="object-cover" sizes="300px" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3">
                                                    <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-md">{heroMovie.title}</h3>
                                                    <div className="flex gap-2">
                                                        <button className="flex-1 bg-white text-black py-2.5 rounded text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg cursor-pointer hover:bg-neutral-200 active:scale-95 transition-all">
                                                            <Play size={14} className="fill-black" /> Play
                                                        </button>
                                                        <button className="flex-1 bg-white/20 backdrop-blur-md text-white py-2.5 rounded text-xs font-bold flex items-center justify-center gap-1.5 border border-white/20 shadow-lg cursor-pointer hover:bg-white/30 active:scale-95 transition-all">
                                                            <Plus size={14} strokeWidth={3} /> My List
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Mock Trending Carousel */}
                                            <div className="flex flex-col gap-3 shrink-0">
                                                <h4 className="text-white/90 text-[13px] font-semibold px-1 tracking-wide">Trending Now</h4>
                                                <div className="flex gap-3 overflow-hidden">
                                                    {trendingMovies.slice(0, 3).map((movie, index) => (
                                                        <div key={movie.id} className="w-[100px] aspect-[2/3] shrink-0 rounded-xl bg-neutral-800 overflow-hidden relative border border-white/5 cursor-pointer hover:border-white/30 active:scale-95 transition-all group">
                                                            <Image src={movie.image} alt={movie.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" sizes="100px" />
                                                            {index === 0 && <div className="absolute top-1 right-1 bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded shadow-sm z-10">TOP 10</div>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Mock Categories */}
                                            <div className="flex flex-col gap-3 shrink-0">
                                                <h4 className="text-white/90 text-[13px] font-semibold px-1 tracking-wide">Categories</h4>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {["Action", "Sci-Fi", "Drama", "Comedy"].map((cat) => (
                                                        <button key={cat} className="bg-neutral-900 rounded-xl py-3.5 text-center text-xs text-white/80 font-medium border border-white/5 cursor-pointer hover:bg-neutral-800 hover:text-white active:scale-95 transition-all w-full">
                                                            {cat}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'movies' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center px-1">
                                                <span className="text-white text-base font-bold tracking-tight">Movies</span>
                                                <Search size={16} className="text-white/70" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {trendingMovies.slice(3, 9).map((movie) => (
                                                    <div key={movie.id} className="w-full aspect-[2/3] rounded-xl bg-neutral-800 overflow-hidden relative border border-white/5 cursor-pointer shadow-md">
                                                        <Image src={movie.image} alt={movie.title} fill className="object-cover opacity-90" sizes="150px" />
                                                        <div className="absolute flex inset-0 bg-gradient-to-t from-black/80 to-transparent flex-col justify-end p-2 opacity-0 hover:opacity-100 transition-opacity">
                                                            <span className="text-[10px] text-white font-bold leading-tight">{movie.title}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'series' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-4">
                                            <div className="flex justify-between items-center px-1">
                                                <span className="text-white text-base font-bold tracking-tight">Original Series</span>
                                                <Search size={16} className="text-white/70" />
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                {platformOriginals.map((series) => (
                                                    <div key={series.id} className="w-full h-[110px] rounded-xl bg-neutral-900 overflow-hidden relative border border-white/5 cursor-pointer shadow-md flex group hover:bg-neutral-800 transition-colors">
                                                        <div className="w-[80px] h-full relative shrink-0">
                                                            <Image src={series.image} alt={series.title} fill className="object-cover opacity-90 group-hover:opacity-100 transition-opacity" sizes="80px" />
                                                        </div>
                                                        <div className="p-3 flex flex-col justify-center gap-1">
                                                            <h4 className="text-white text-[11px] font-bold">{series.title}</h4>
                                                            <p className="text-white/50 text-[9px] line-clamp-2 leading-snug">{series.description}</p>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <span className="text-green-500 text-[9px] font-semibold">{series.match}</span>
                                                                <span className="text-white/40 text-[9px]">{series.duration}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}

                                    {activeTab === 'profile' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
                                            <div className="flex flex-col items-center pt-4 pb-6 border-b border-white/10">
                                                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-red-600 to-purple-600 p-[2px] mb-3 relative shadow-[0_10px_20px_rgba(220,38,38,0.2)]">
                                                    <div className="w-full h-full rounded-full bg-black flex justify-center items-center overflow-hidden border-2 border-black">
                                                        <User size={36} className="text-white/80" />
                                                    </div>
                                                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-600 rounded-full border-[3px] border-[#050505] flex justify-center items-center shadow-lg">
                                                        <Plus size={12} className="text-white font-bold" />
                                                    </div>
                                                </div>
                                                <h3 className="text-white text-base font-bold tracking-wide">Alex Mercer</h3>
                                                <p className="text-white/50 text-[10px] mt-0.5">Premium Plan • Ultra HD</p>
                                            </div>

                                            <div className="flex flex-col gap-1 mt-4">
                                                {[
                                                    { icon: User, label: "Account Settings" },
                                                    { icon: Settings, label: "App Preferences" },
                                                    { icon: History, label: "Watch History" },
                                                    { icon: LogOut, label: "Sign Out", color: "text-red-500 hover:bg-red-500/10" }
                                                ].map((item, i) => (
                                                    <button key={i} className={`flex items-center justify-between w-full py-3.5 px-3 rounded-xl hover:bg-white/5 transition-colors group ${item.color?.includes('hover') ? item.color.split(' ')[1] : ''}`}>
                                                        <div className="flex items-center gap-3">
                                                            <item.icon size={15} className={item.color ? item.color.split(' ')[0] : "text-white/60 group-hover:text-white"} />
                                                            <span className={`text-[11px] font-semibold ${item.color ? item.color.split(' ')[0] : "text-white/90"}`}>{item.label}</span>
                                                        </div>
                                                        <ChevronRight size={14} className="text-white/30 group-hover:text-white/70" />
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Mock App Bottom Navigation */}
                                <div className="absolute bottom-0 left-0 right-0 h-[72px] bg-black/95 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-2 z-20 pb-4 pt-1">
                                    <button onClick={() => setActiveTab('home')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'home' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>
                                        <Home size={22} className={activeTab === 'home' ? 'stroke-[2.5px]' : ''} />
                                        <span className={`text-[9px] ${activeTab === 'home' ? 'font-semibold' : 'font-medium'}`}>Home</span>
                                    </button>
                                    <button onClick={() => setActiveTab('movies')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'movies' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>
                                        <Film size={22} className={activeTab === 'movies' ? 'stroke-[2.5px]' : ''} />
                                        <span className={`text-[9px] ${activeTab === 'movies' ? 'font-semibold' : 'font-medium'}`}>Movies</span>
                                    </button>
                                    <button onClick={() => setActiveTab('series')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'series' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>
                                        <Tv size={22} className={activeTab === 'series' ? 'stroke-[2.5px]' : ''} />
                                        <span className={`text-[9px] ${activeTab === 'series' ? 'font-semibold' : 'font-medium'}`}>Series</span>
                                    </button>
                                    <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center gap-1 cursor-pointer transition-colors ${activeTab === 'profile' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}>
                                        <User size={22} className={activeTab === 'profile' ? 'stroke-[2.5px]' : ''} />
                                        <span className={`text-[9px] ${activeTab === 'profile' ? 'font-semibold' : 'font-medium'}`}>Profile</span>
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        {/* Glow effect under device */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/5 blur-[70px] rounded-full -z-10" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
