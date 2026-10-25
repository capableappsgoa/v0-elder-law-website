import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Scale, ArrowRight } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Asset Protection",
    description: "Safeguard your wealth from unnecessary taxes and legal complications",
  },
  {
    icon: Heart,
    title: "Family First",
    description: "Ensure your loved ones are cared for according to your wishes",
  },
  {
    icon: Scale,
    title: "Legal Excellence",
    description: "Expert guidance through complex estate planning matters",
  },
]

export function Mission() {
  return (
    <section id="about" className="section-spacing overflow-hidden bg-card">
      <div className="site-container">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left - Image with overlay card */}
          <div data-reveal className="portrait-frame mx-auto w-full max-w-md pb-7 pr-5 lg:max-w-none">
            <div className="portrait-photo relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary shadow-lg shadow-accent/5">
              <Image
                src="/deep-chopra.jpg"
                alt="Mr. Deep Chopra, Attorney at Law"
                fill
                sizes="(min-width: 1024px) 40vw, 85vw"
                className="object-cover"
              />
            </div>
            
            {/* Trusted service badge */}
            <div className="absolute bottom-0 right-0 rounded-xl border border-border border-b-[3px] border-b-primary bg-card p-5 shadow-lg shadow-accent/5 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of</p>
                  <p className="text-foreground/70">Trusted Service</p>
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div aria-hidden="true" className="absolute -left-4 top-8 bottom-14 w-4 rounded-l-md bg-primary/10" />
          </div>

          {/* Right - Content */}
          <div data-reveal data-reveal-order="1">
            <div>
              <span className="section-kicker">
                About Your Attorney, Deep Chopra
              </span>
            </div>
            
            <h2 className="section-heading mb-4">
              My Mission
            </h2>
            
            <p className="mb-4 font-serif text-xl font-medium text-primary">
              — Mr. Deep Chopra
            </p>
            
            <p className="mb-1 text-sm leading-relaxed text-muted-foreground">
              Attorney At Law admitted to practice law in New York State, USA
            </p>
            
            <p className="mb-7 text-sm leading-relaxed text-muted-foreground">
              Advocate admitted to practice law in the High Courts of Mumbai and Goa, India
            </p>
            
            <div className="mb-8 space-y-4 border-l-2 border-primary/30 pl-5 text-base leading-7 text-muted-foreground">
              <p>
                Attorney Deep will help you craft an estate plan to ensure your accumulated legacy-wealth transfers seamlessly to your chosen beneficiaries, on your timeline and under the specific terms you dictate.
              </p>
              <p>
                By establishing tailored instruments such as revocable and irrevocable trusts, comprehensive last Wills &amp; Pour-Over Wills and Testaments, and Statutory Powers of Attorney, you safeguard your family from the protracted delays and public expense of Surrogate’s Court probate proceedings.
              </p>
              <p>
                Furthermore, proactive elder law and long-term care planning by Attorney Deep will protect your hard-earned assets against Medicaid spend-down depletion and unnecessary federal and state tax liabilities, securing peace of mind for generations to come.
              </p>
            </div>

            <Button 
              asChild 
              size="lg"
              className="button-polish h-12 rounded-lg bg-primary px-7 font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="#services" className="flex items-center gap-2">
                Explore Our Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-12 grid gap-5 border-t border-border/70 pt-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={value.title} data-reveal data-reveal-order={index}>
              <div className="mission-value flex items-start gap-4 rounded-xl bg-background p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/5">
                  <value.icon aria-hidden="true" className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-accent">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
