import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetailPage({ params }) {
  const slug = params.slug;
  const news = DUMMY_NEWS.find((n) => n.slug === slug);

  if(!news) {
    notFound()
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${news.slug}/image`}>
          <Image src={`/images/news/${news.image}`} alt={news.title} width={300} height={200} />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
