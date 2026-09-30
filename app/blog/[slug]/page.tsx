import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { blogPosts, getBlogBySlug } from '@/lib/blog-data';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} | Sri Sai Realtors`, description: post.excerpt };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <main className="bg-background">
      {/* Hero */}
      <div className="relative h-[50vh] w-full overflow-hidden lg:h-[60vh]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />

        <div className="absolute inset-0 flex flex-col items-start justify-end p-6 pb-12 sm:p-10 lg:p-16">
          <div className="mx-auto w-full max-w-4xl">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>

            <span className="mb-4 inline-block rounded-sm bg-blue-600/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
              {post.category}
            </span>

            <h1 className="font-heading text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta + content */}
      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-10 flex items-center gap-3 border-b border-border pb-6 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span aria-hidden>·</span>
          <span>
            {new Date(post.date).toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <span aria-hidden>·</span>
          <span>{post.readTime}</span>
        </div>

        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all posts
          </Link>
        </div>
      </article>
    </main>
  );
}