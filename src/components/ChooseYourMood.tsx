"use client";

import { motion } from "framer-motion";

const moods = [
    { id: 1, title: "Feel Good", emoji: "☀️", gradient: "from-amber-400 to-orange-500", shadow: "hover:shadow-orange-500/50" },
    { id: 2, title: "Thriller Night", emoji: "🦇", gradient: "from-zinc-800 to-black", shadow: "hover:shadow-zinc-700/50" },
    { id: 3, title: "Mind Bending", emoji: "🌀", gradient: "from-indigo-600 to-purple-800", shadow: "hover:shadow-purple-500/50" },
    { id: 4, title: "Romantic Evening", emoji: "💖", gradient: "from-rose-400 to-pink-600", shadow: "hover:shadow-pink-500/50" },
    { id: 5, title: "Comedy Time", emoji: "🍿", gradient: "from-cyan-400 to-blue-600", shadow: "hover:shadow-blue-500/50" },
];

export default function ChooseYourMood() {
    return (
        <div className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Choose Your Mood</h2>

            <div className="flex overflow-x-auto pt-6 pb-8 -mx-4 px-4 sm:-mx-4 sm:px-4 gap-4 sm:gap-6 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {moods.map((mood, index) => (
                    <motion.div
                        key={mood.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.15 } }}
                        whileTap={{ scale: 0.95 }}
                        className={`group cursor-pointer flex-shrink-0 w-[200px] sm:w-[240px] aspect-[4/3] sm:aspect-video rounded-2xl bg-gradient-to-br ${mood.gradient} p-6 flex flex-col items-center justify-center gap-4 snap-center relative overflow-hidden shadow-lg ${mood.shadow} border border-white/10`}
                    >
                        {/* Shimmer glass effect overlay */}
                        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 backdrop-blur-[2px]" />

                        {/* Playful Floating Emoji */}
                        <motion.span
                            className="text-5xl sm:text-6xl drop-shadow-xl relative z-10"
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                            transition={{ duration: 0.5 }}
                        >
                            {mood.emoji}
                        </motion.span>

                        {/* Title */}
                        <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide text-center drop-shadow-md relative z-10">
                            {mood.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
