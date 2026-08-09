import Link from "next/link";

export default function NewsPage() {
  return (
    <div id="new">
      <h1>News Page</h1>
      <ul>
        <li><Link href="/news/first-news">News A</Link></li>
        <li><Link href="/news/second-news">News B</Link></li>
        <li><Link href="/news/third-news">News C</Link></li>
      </ul>
    </div>
  );
}
