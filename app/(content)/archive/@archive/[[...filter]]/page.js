import NewsList from "@/components/news-list";
import Link from "next/link";
import { getAvailableNewsYears, getNewsForYearAndMonth, getNewsForYear, getAvailableNewsMonths } from "@/lib/news";

export default function FilteredNewsPage({ params }) {
  const filter = params.filter;

  const selectedYear = filter ? filter[0] : undefined;
  const selectedMonth = filter && filter.length > 1 ? filter[1] : undefined;

  let news;
  let links = getAvailableNewsYears();

  if(selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear);
    links = getAvailableNewsMonths(selectedYear);
  }

  if(selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth);
    links = []
  }
  
  let newsContent = <p>No News found for the selected criteria.</p>

  if(news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  // + mean casting number
  if(
    selectedYear && !getAvailableNewsYears().includes(+selectedYear) ||
    selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth)
  ) {
    throw new Error('Invalid filter.')
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map(link => {
              const href = selectedYear ? 
                `/archive/${selectedYear}/${link}` :
                `/archive/${link}`;

              return (
                <li key={link}>
                  <Link href={href}>{link}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  )
}
