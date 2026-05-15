"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLang } from "@/contexts/LanguageContext"
import { landingTranslations } from "@/app/landing-translations"
import { useInView, fi } from "@/hooks/use-in-view"

const storesMeta = [
  { flag: "🇩🇪", stores: "Lidl · Aldi · Rewe" },
  { flag: "🇦🇹", stores: "Hofer · Spar"        },
]

export function StoresSection() {
  const { lang } = useLang()
  const t = landingTranslations[lang].stores
  const { ref, inView } = useInView()

  return (
    <section ref={ref as any} className="py-20 sm:py-28 bg-card border-y border-border/50" id="stores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16" style={fi(inView, 0)}>
          <div className="inline-block bg-white/80 backdrop-blur-md border border-border/60 rounded-3xl px-10 py-8 shadow-xl shadow-black/5">
            <Badge variant="outline" className="mb-4 bg-primary/5 text-primary border-primary/20 font-semibold">
              {t.badge}
            </Badge>
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {t.title}{" "}
              <span className="text-primary">{t.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {t.items.map((store, index) => {
            const meta = storesMeta[index]
            return (
              <Card
                key={store.name}
                className="group border-border/50 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
                style={fi(inView, index + 1)}
              >
                <CardContent className="p-0">
                  <div className="bg-white flex flex-col items-center justify-center h-32 px-8 border-b border-border/40 gap-1">
                    <span className="text-5xl">{meta.flag}</span>
                    <span className="text-xs text-muted-foreground font-medium">{meta.stores}</span>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-foreground">
                      {store.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {store.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground/70 mt-10 italic">
          {t.thankYou}
        </p>
      </div>
    </section>
  )
}
