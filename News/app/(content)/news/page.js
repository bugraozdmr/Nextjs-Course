
import NewsList from '@/components/news-list';
import { getAllNews } from '@/lib/news';

export default async function NewsPage() {
  // direkt databaseden cekti ve use client felan eklemedik kod baya kisaldi
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
