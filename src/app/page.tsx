import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MovieSlider from "@/components/MovieSlider";
import Categories from "@/components/Categories";
import FeaturedOriginals from "@/components/FeaturedOriginals";
import ChooseYourMood from "@/components/ChooseYourMood";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { trendingMovies, platformOriginals } from "@/data/movies";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden pb-10">
      <Navbar />
      <main>
        <Hero />

        <div className="relative z-10 py-8 lg:py-12 space-y-12">
          <MovieSlider title="🔥 Trending Now" movies={trendingMovies} />

          <Categories />

          <FeaturedOriginals />

          <ChooseYourMood />
        </div>

        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
