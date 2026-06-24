'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">AG</span>
          </div>
          <span className="font-bold text-xl hidden sm:inline text-foreground">Anasoya</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          <Link href="/portfolio">
            <Button variant="ghost" className="text-foreground">Portfolio</Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" className="text-foreground">About</Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" className="text-foreground">Blog</Button>
          </Link>
          <Link href="/contact">
            <Button variant="ghost" className="text-foreground">Contact</Button>
          </Link>
          <Link href="/auth/login" className="ml-2">
            <Button className="bg-primary hover:bg-primary/90">Admin</Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-3 space-y-2">
            <Link href="/portfolio" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">Portfolio</Button>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">About</Button>
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">Blog</Button>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-foreground">Contact</Button>
            </Link>
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-primary hover:bg-primary/90">Admin Login</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
