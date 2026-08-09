'use client'
import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NewsDetailPage() {
  const pathname = usePathname();

  return (
    <div id="new">
      <h1>News {pathname.split('/').pop()} Page</h1>
    </div>
  );
}
