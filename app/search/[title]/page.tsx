import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

type Props = {
  params: {
    title: string;
  };
};

async function SearchPage({ params: { title } }: Readonly<Props>) {
  if (!title) notFound();

  const termToUse = decodeURI(title);
  // API call to get the searched movies
  const movies = await getSearchedMovies(termToUse);
  // API call to get the popular movies
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        {/* AI Suggestion  */}
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="Popular Movies" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
