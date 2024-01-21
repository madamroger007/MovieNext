import { getDiscoverMovies } from "@/lib/getMovies";
import CorouselBanner from "./CorouselBanner";

type Props = {
    id?: string;
    keywords?:string;
}
async function CorouselBannerWrapped ({id, keywords}:Props) {
  const movies = await getDiscoverMovies(id,keywords);
    return (
    < CorouselBanner movies={movies} />
  )
}

export default CorouselBannerWrapped 