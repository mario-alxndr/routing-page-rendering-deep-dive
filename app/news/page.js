import Link from "next/link";
import Image from "next/image";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div id="new">
      <h1>News Page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.slug}`}>
              <Image src={`/images/news/${news.image}`} alt={news.title} width={300} height={200} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
