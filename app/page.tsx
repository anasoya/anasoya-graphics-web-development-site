'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Check, Zap, Globe, Palette } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        {/* Hero Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-primary uppercase tracking-wide">Welcome to Anasoya</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Transform Your Brand with Professional Design & Development
                </h1>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl">
                We deliver stunning graphics, cutting-edge web development, and comprehensive business solutions to help your brand stand out in the digital world.
              </p>
              <div className="flex gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button size="lg" variant="outline">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl" />
              <div className="relative h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                    <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                      <Palette className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-foreground">Creative Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for all your creative and business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Palette,
                title: 'Graphics Design',
                description: 'Logo design, branding, illustrations, and visual content creation'
              },
              {
                icon: Globe,
                title: 'Web Development',
                description: 'Modern, responsive websites and web applications'
              },
              {
                icon: Zap,
                title: 'ERP Solutions',
                description: 'Dynamic business management and inventory systems'
              }
            ].map((service, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Why Choose Anasoya?</h2>
              <ul className="space-y-4">
                {[
                  'Award-winning design and development team',
                  'Custom solutions tailored to your needs',
                  'Advanced technology and best practices',
                  'Ongoing support and maintenance',
                  'Transparent pricing and timelines',
                  'Proven track record of success'
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
              <div className="relative h-full bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/20 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="w-24 h-24 text-accent mx-auto mb-4" />
                  <p className="text-xl font-semibold text-foreground">Digital Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-primary to-accent p-8 sm:p-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Brand?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can help achieve your business goals.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-background text-primary hover:bg-background/90">
                Get in Touch Today
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
