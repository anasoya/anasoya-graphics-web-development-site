'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Check } from 'lucide-react'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        {/* Header */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Anasoya</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into reality through design and technology
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2015, Anasoya Graphics & Web Development started with a vision to provide exceptional design and development services to businesses of all sizes. What began as a small team of passionate designers has grown into a comprehensive solutions provider.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the years, we&apos;ve helped hundreds of companies establish their digital presence, strengthen their brands, and streamline their operations through innovative technology solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver innovative design and development solutions that empower businesses to succeed in the digital economy.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted partner for creative and technical excellence in the industry.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Excellence, integrity, innovation, and client-centric approach guide everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Sarah Designer', role: 'Creative Director' },
              { name: 'John Developer', role: 'Lead Developer' },
              { name: 'Emma Manager', role: 'Project Manager' },
              { name: 'Mike Specialist', role: 'UX/UI Specialist' }
            ].map((member, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-card border border-border text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-accent" />
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">Why Choose Anasoya?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Expert team with years of industry experience',
              'Creative solutions tailored to your unique needs',
              'Latest technologies and best practices',
              '24/7 support and continuous improvement',
              'Transparent communication and reporting',
              'Competitive pricing and flexible packages'
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
