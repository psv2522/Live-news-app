import { categories } from '../constants';
import fetchNews from "@/lib/fetchnews";
import NewsList from "@/components/newslist"
async function Home() {
  // fetch news data
  const news: NewsResponse = await fetchNews(categories.join(','));

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
}

export default Home;