import { blogPosts } from '@/lib/blog-data';
import { BlogCard } from '@/components/blog/BlogCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Blog | Sri Sai Realtors',
  description: 'Insights on design, materials, and project execution.',
};

export default function BlogPage() {
  return (
    <main className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Insights"
          title="From the Studio"
          subtitle="Notes on design thinking, materials, and how we execute projects on the ground."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} index={i} />
          ))}
        </div>
      </div>
    </main>
  );
}