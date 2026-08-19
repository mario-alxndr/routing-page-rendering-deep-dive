'use client'

import { notFound, useRouter } from 'next/navigation';

import { DUMMY_NEWS } from "@/dummy-news";

export default function ImagePage({ params }) {
  const router = useRouter()

  const slug = params.slug;
  const news = DUMMY_NEWS.find((n) => n.slug === slug);

  if(!news) {
    notFound()
  }

  return (
    <>
      <div className="modal-backdrop" onClick={() => router.back()}/>
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.item} />
        </div>
      </dialog>
    </>
  )
}