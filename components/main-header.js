import Link from "next/link";
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link  href="/">Home</Link>
      </div>
      <ul>
        <li><NavLink href="/news">News</NavLink></li>
        <li><NavLink href="/archive">Archive</NavLink></li>
      </ul>
    </header>
  );
}