let articles = [
  { title: "Article One", slug: "article-one", content: "Content for the first article." },
  { title: "Article Two", slug: "article-two", content: "Content for the second article." },
  { title: "Article Three", slug: "article-three", content: "Content for the third article." },
  { title: "Article Four", slug: "article-four", content: "Content for the fourth article." },
  { title: "Article Five", slug: "article-five", content: "Content for the fifth article." },
  { title: "Article Six", slug: "article-six", content: "Content for the sixth article." },
  { title: "Article Seven", slug: "article-seven", content: "Content for the seventh article." },
  { title: "Article Eight", slug: "article-eight", content: "Content for the eighth article." },
  { title: "Article Nine", slug: "article-nine", content: "Content for the ninth article." },
  { title: "Article Ten", slug: "article-ten", content: "Content for the tenth article." }
];

import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession();
  if (!session) {

  }
  return NextResponse.json(articles);
}
