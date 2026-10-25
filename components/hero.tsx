import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, FileText, Heart, Scale } from "lucide-react"

const specialties = [
  { icon: FileText, title: "Wills & Trusts", description: "Secure your estate" },
  { icon: Heart, title: "Medicaid Planning", description: "Preserve your assets" },
  { icon: Scale, title: "Elder Law", description: "Comprehensive care" },
]

export function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden bg-background pt-28 lg:pt-32">
        <div aria-hidden="true" className="hero-backdrop pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] border-l border-border/60 lg:block" />
        <div className="site-container relative py-12 sm:py-16 lg:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
            <div>
              <div className="hero-intro mb-7 inline-flex items-center gap-2 rounded-full border border-accent/15 bg-accent/5 px-4 py-2 text-xs font-semibold tracking-wide text-accent sm:text-sm">
                <Shield aria-hidden="true" className="h-4 w-4" />
                Protecting Families Since 1998
              </div>
              <h1 data-intro-order="1" className="hero-intro mb-6 font-serif text-[clamp(2.8rem,4.2vw,4rem)] font-medium leading-[1.12] tracking-[-0.035em] text-foreground">
                Protect Your <span className="legacy-word text-accent">Legacy</span>,{" "}
                Secure Your <span className="text-primary">Family</span>
              </h1>
              <p data-intro-order="2" className="hero-intro mb-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Expert Elder Law and Estate Planning for families in Nassau County, NY. Let us handle the complexity while you focus on what matters most.
              </p>
              <div data-intro-order="3" className="hero-intro mb-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild size="lg" className="button-polish h-12 rounded-lg bg-accent px-6 font-semibold text-accent-foreground shadow-sm hover:bg-accent/90">
                  <Link href="#contact">Schedule Free Consultation <ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" className="button-polish h-12 rounded-lg border border-primary/35 bg-transparent px-6 font-semibold text-primary shadow-none hover:bg-primary/5">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
              <div data-intro-order="4" className="hero-intro flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/5">
                  <Shield aria-hidden="true" className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-serif text-3xl font-semibold leading-tight text-accent">100%</p>
                  <p className="mt-1 text-sm text-muted-foreground">Client Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="hero-visual relative pb-3 lg:pl-4">
              <div aria-hidden="true" className="hero-orbit" />
              <div aria-hidden="true" className="absolute bottom-0 right-0 left-8 top-8 rounded-2xl border border-primary/20" />
              <div className="hero-photo relative mr-3 overflow-hidden rounded-2xl border border-border/60 border-t-[3px] border-t-primary bg-card shadow-xl shadow-accent/5">
                <div className="relative h-72 sm:h-[390px] lg:h-[440px]">
                  <Image src="/office-meeting.jpg" alt="Attorney Deep consulting with clients" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" priority />
                </div>
                <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-card px-1 py-5 sm:px-2">
                  {specialties.map((specialty) => (
                    <div key={specialty.title} className="hero-specialty rounded-lg px-2 text-center sm:px-3">
                      <specialty.icon aria-hidden="true" className="mx-auto mb-2 h-5 w-5 text-primary" />
                      <p className="text-xs font-semibold leading-5 text-accent sm:text-sm">{specialty.title}</p>
                      <p className="mt-1 text-[11px] leading-4 text-muted-foreground sm:text-xs">{specialty.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-y border-border/70 bg-card">
        <div className="site-container flex items-center justify-center gap-4 py-6 sm:gap-7">
          <div aria-hidden="true" className="h-px flex-1 bg-border" />
          <Scale aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-primary/60 sm:block" />
          <p className="text-center text-[10px] font-semibold uppercase leading-6 tracking-[0.16em] text-muted-foreground sm:text-xs sm:tracking-[0.2em]">Elder Law &bull; Estate Planning &bull; Asset Protection</p>
          <Scale aria-hidden="true" className="hidden h-5 w-5 shrink-0 text-primary/60 sm:block" />
          <div aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>
      </div>
    </>
  )
}
