"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-card/95 shadow-sm shadow-accent/[0.02] backdrop-blur-md">
      <div className="site-container">
        <div className="flex min-h-24 items-center justify-between gap-3 py-3 sm:gap-5">
          {/* Logo */}
          <Link href="/" className="flex min-w-0 items-center gap-2.5 sm:gap-3">
            <Image
              src="/deep-chopra-logo.webp"
              alt="Deep Chopra law logo with gold scales, wreath, and an Old English D on blue"
              width={256}
              height={256}
              sizes="(min-width: 640px) 64px, 48px"
              priority
              className="h-12 w-12 shrink-0 rounded-lg border border-accent/10 object-contain shadow-sm sm:h-16 sm:w-16 sm:rounded-xl"
            />
            <span className="flex min-w-0 max-w-[260px] flex-col">
              <span className="whitespace-nowrap font-serif text-[17px] font-semibold leading-tight tracking-tight min-[375px]:text-xl sm:text-2xl">
                <span className="text-accent">Deep</span>
                <span className="text-primary"> Chopra, Esq.</span>
              </span>
              <span className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:text-[10px]">
                Attorney At Law
              </span>
              <span className="mt-1 text-[8px] uppercase leading-relaxed tracking-[0.06em] text-muted-foreground sm:text-[9px]">
                Estate & Elder Law Planning • Wills & Trusts • Probate • Real Estate
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden items-center gap-0.5 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/5 hover:text-accent"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="ml-auto hidden items-center gap-5 md:flex xl:ml-0">
            <a href="tel:516-912-8111" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" />
              516 912 8111
            </a>
            <Button asChild className="button-polish h-11 rounded-lg bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
              <Link href="#contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="shrink-0 rounded-lg border border-border p-2.5 text-accent transition-colors hover:bg-secondary xl:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div id="mobile-navigation" className="mobile-menu-enter border-t border-border py-4 xl:hidden">
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-md transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-4">
                <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Free Consultation</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
