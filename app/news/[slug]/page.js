import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({ params }) {
  const slug = params.slug;
  const news = DUMMY_NEWS.find((n) => n.slug === slug);

  return (
    <article className="news-article">
      <header>
        <Image src={`/images/news/${news.image}`} alt={news.title} width={300} height={200} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
