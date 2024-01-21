import CorouselBannerWrapped from "@/components/CorouselBannerWrapped ";
import MoviesCarousel from "@/components/MoviesCarousel";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main className="">
      <div className="flex flex-col ">
        <CorouselBannerWrapped />
        <div className="flex flex-col space-y-2 xl:-mt-48">
          <MoviesCarousel movies={upcomingMovies} title="Up comming" />
          <MoviesCarousel movies={topRatedMovies} title="Top rated" />
          <MoviesCarousel movies={popularMovies} title="Popular" />
        </div>
      </div>
    </main>
  );
}
