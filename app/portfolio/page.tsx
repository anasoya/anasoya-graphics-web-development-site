'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import { useState } from 'react'

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Ecommerce Platform',
    category: 'web-development',
    client: 'TechStore Inc',
    image: '/api/placeholder/400/300',
    description: 'Full-stack ecommerce solution with inventory management'
  },
  {
    id: 2,
    title: 'Brand Identity Design',
    category: 'graphics',
    client: 'StartupXYZ',
    image: '/api/placeholder/400/300',
    description: 'Complete branding package including logo and style guide'
  },
  {
    id: 3,
    title: 'Corporate Website',
    category: 'web-development',
    client: 'Enterprise Corp',
    image: '/api/placeholder/400/300',
    description: 'Responsive corporate website with CMS integration'
  },
  {
    id: 4,
    title: 'Product Packaging Design',
    category: 'graphics',
    client: 'Beauty Brand Co',
    image: '/api/placeholder/400/300',
    description: 'Eye-catching packaging design for product line'
  },
  {
    id: 5,
    title: 'SaaS Application',
    category: 'web-development',
    client: 'CloudTech Solutions',
    image: '/api/placeholder/400/300',
    description: 'Scalable SaaS platform with user management'
  },
  {
    id: 6,
    title: 'Marketing Campaign',
    category: 'graphics',
    client: 'Digital Agency',
    image: '/api/placeholder/400/300',
    description: 'Integrated marketing campaign with multiple assets'
  }
]

const categories = ['all', 'web-development', 'graphics']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filtered = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Portfolio</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcase of our recent projects and achievements
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {cat === 'all' ? 'All Projects' : cat === 'web-development' ? 'Web Dev' : 'Graphics'}
              </button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-card border border-border h-64 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/40 group-hover:to-accent/40 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <p className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">View Project</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary mb-1">{item.category === 'web-development' ? 'Web Development' : 'Graphics Design'}</p>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.client}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
