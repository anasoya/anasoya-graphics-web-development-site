'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Calendar, User } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Design in 2024',
    excerpt: 'Exploring the latest trends and technologies shaping the web design landscape',
    category: 'Design',
    author: 'Sarah Designer',
    date: '2024-01-15',
    slug: 'future-web-design-2024'
  },
  {
    id: 2,
    title: 'Building Scalable ERP Systems',
    excerpt: 'Best practices for implementing enterprise resource planning solutions',
    category: 'Development',
    author: 'John Developer',
    date: '2024-01-10',
    slug: 'scalable-erp-systems'
  },
  {
    id: 3,
    title: 'Brand Identity: More Than Just a Logo',
    excerpt: 'Understanding the importance of comprehensive brand strategy',
    category: 'Branding',
    author: 'Emma Manager',
    date: '2024-01-05',
    slug: 'brand-identity-strategy'
  },
  {
    id: 4,
    title: 'User Experience Best Practices',
    excerpt: 'Creating intuitive and engaging digital experiences',
    category: 'Design',
    author: 'Mike Specialist',
    date: '2024-01-01',
    slug: 'ux-best-practices'
  },
  {
    id: 5,
    title: 'Digital Marketing for Tech Companies',
    excerpt: 'Strategies to effectively reach your target audience',
    category: 'Marketing',
    author: 'Sarah Designer',
    date: '2023-12-28',
    slug: 'digital-marketing-tech'
  },
  {
    id: 6,
    title: 'Mobile-First Development Approach',
    excerpt: 'Why starting with mobile should be your development strategy',
    category: 'Development',
    author: 'John Developer',
    date: '2023-12-25',
    slug: 'mobile-first-development'
  }
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and updates from our team
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <div className="group cursor-pointer rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-96 lg:h-auto bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all" />
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-sm font-medium text-primary mb-3">{blogPosts[0].category}</p>
                  <h2 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">{blogPosts[0].title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {blogPosts[0].author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(blogPosts[0].date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Blog Posts Grid */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <div className="group cursor-pointer h-full rounded-xl bg-card border border-border p-6 hover:border-primary/50 transition-colors flex flex-col">
                  <p className="text-sm font-medium text-primary mb-2">{post.category}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
