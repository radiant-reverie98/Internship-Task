import React from 'react';
import BlogCard from './BlogCard';
import EmptyState from './EmptyState';


const DUMMY_BLOGS = [
  {
    id: 1,
    title: 'The Art of Writing Clean, Maintainable Technical Documentation',
    excerpt: 'Discover the exact workflows and writing frameworks used by high-performing teams to keep production documentation synchronized with agile cycles.',
    category: 'Writing',
    publishedDate: 'May 20, 2026',
    readingTime: '4 min read',
    thumbnail: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Sarah Jenkins',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 2,
    title: 'Why Micro-Frontends Are Shifting Modern SaaS Topographies',
    excerpt: 'An investigative deep-dive analyzing modular development practices, framework decoupling risks, and real-time network orchestration costs.',
    category: 'Engineering',
    publishedDate: 'May 17, 2026',
    readingTime: '9 min read',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Tejendra Singh',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 3,
    title: 'Fostering Organic Growth Channels for Independent Platforms',
    excerpt: 'Forget paying for basic impressions. Learn how content alignment, newsletters, and semantic markup optimizations anchor long-term search value.',
    category: 'Marketing',
    publishedDate: 'May 15, 2026',
    readingTime: '6 min read',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Emily Zhang',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 4,
    title: 'Mastering Layout Constraints: Whitespace Rules You Ignore',
    excerpt: 'A definitive breakdown on macro visual grids, typographic bounding fields, and spatial layouts that divide amateur blocks from modern designs.',
    category: 'Design',
    publishedDate: 'May 11, 2026',
    readingTime: '5 min read',
    thumbnail: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Julian Vance',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 5,
    title: 'The Future of Markdown: Interactive Editor Layout Blocks',
    excerpt: 'How embedding real-time sandboxes, mathematical notation blocks, and fluid component injections transforms readers into active users.',
    category: 'Product',
    publishedDate: 'May 06, 2026',
    readingTime: '7 min read',
    thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Elena Rostova',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    }
  },
  {
    id: 6,
    title: 'Architecting a Resilient Web Hook Notification Engine',
    excerpt: 'Handling infinite payload retries, circuit-breaking edge drops, and verifying cryptographic event origins safely under heavy traffic spikes.',
    category: 'Engineering',
    publishedDate: 'Apr 28, 2026',
    readingTime: '11 min read',
    thumbnail: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=600&q=80',
    author: {
      name: 'Devon King',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80'
    }
  }
];

const BlogsGrid = () => {
  const hasBlogs = DUMMY_BLOGS.length > 0;

  return (
    <section 
      className={`w-full bg-[#F8FAFC] font-sans antialiased ${
        hasBlogs 
          ? 'pt-10 md:pt-16 pb-24 md:pb-32' 
          : 'py-12 md:py-16'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {hasBlogs ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {DUMMY_BLOGS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}

      </div>
    </section>
  );
};

export default BlogsGrid;