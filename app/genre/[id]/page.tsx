import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";

type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

async function GenrePage({
  params: { id },
  searchParams: { genre },
}: Readonly<Props>) {
  const movies = await getDiscoverMovies(id);
  return (
    <div className="max-w-7xl mx-auto">
      {/* AI Azure Suggestion */}
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-4xl font-bold px-10">
          Results for {genre}
        </h1>
      </div>
     <MoviesCarousel title={"Genre Movies"} movies={movies} isVertical/>
    </div>
  );
}

export default GenrePage;
