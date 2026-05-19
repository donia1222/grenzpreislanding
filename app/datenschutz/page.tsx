import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Datenschutz — GrenzPreis",
}

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10">
          <ArrowLeft className="w-4 h-4" /> Zurück
        </Link>

        <h1 className="font-bold text-3xl text-foreground mb-2">Datenschutzerklärung</h1>
        <p className="text-muted-foreground text-sm mb-10">Stand: 16. Mai 2026</p>

        <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">

          <section>
            <p>
              GrenzPreis („die App") hilft Personen in der Schweiz, Lebensmittelpreise im Vergleich zu Deutschland und Österreich besser einzuschätzen. Wir respektieren deine Privatsphäre und erheben grundsätzlich <strong className="text-foreground">keine personenbezogenen Daten</strong> — weder auf dieser Website noch in der App. Diese Erklärung beschreibt, welche Daten technisch verarbeitet werden, warum, und welche Rechte du hast.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">1. Wer wir sind</h2>
            <p>
              Betreiber der App und dieser Website ist <strong className="text-foreground">Lweb — Roberto Salvador</strong>, 9475 Sevelen, Schweiz. Für Fragen zum Datenschutz: <a href="mailto:info@lweb.ch" className="text-primary hover:underline">info@lweb.ch</a>.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">2. Keine Erhebung personenbezogener Daten</h2>
            <p>
              GrenzPreis sammelt <strong className="text-foreground">keine personenbezogenen Daten</strong> über seine Nutzerinnen und Nutzer. Wir erfassen weder Name, Adresse, Telefonnummer, Kontakte, Fotos, Mikrofoneingaben noch deine genaue GPS-Position. Es gibt keine Werbung, keinen Verkauf und keine Weitergabe von Daten an Werbenetzwerke.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">3. Daten, die in der App lokal bleiben</h2>
            <p>Folgende Einstellungen werden ausschliesslich auf deinem Gerät gespeichert und nie an uns übertragen:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Sprache, Heimatkanton/-stadt, bevorzugte Grenzstädte</li>
              <li>Eingaben zu Benzinverbrauch und Fahrtkosten</li>
              <li>Persönliche Einkaufsliste und gewählte Kategorien</li>
              <li>Benachrichtigungs-Einstellungen</li>
            </ul>
            <p className="mt-2">Diese Daten werden beim Deinstallieren der App vollständig entfernt.</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">4. Abo-Verwaltung (nur bei GrenzPreis Pro)</h2>
            <p>
              Wenn du ein Abo abschliesst, wird dieses über <strong className="text-foreground">RevenueCat</strong> sowie Apple bzw. Google abgewickelt. Wir erhalten lediglich eine anonyme Kunden-ID, das aktive Produkt sowie Kauf- und Ablaufdatum. <strong className="text-foreground">Wir sehen niemals deine Zahlungsdaten.</strong>
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">5. KI-Suchen und Chatbot</h2>
            <p>
              Wenn du die KI-Preissuche oder den Chatbot nutzt, wird der Text deiner Anfrage zusammen mit der gewählten Route (z. B. „Zürich → Konstanz") an <strong className="text-foreground">OpenAI</strong> gesendet, um eine Antwort zu generieren. Wir speichern diese Anfragen <strong className="text-foreground">nicht</strong> auf unseren Servern. OpenAI verarbeitet sie gemäss API-Bedingungen und nutzt sie nicht zum Training.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">6. Absturzberichte</h2>
            <p>
              Apple und Google können anonyme Absturz- und Diagnoseberichte übermitteln, damit wir Fehler beheben können. Diese enthalten <strong className="text-foreground">keine</strong> personenbezogenen Informationen.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">7. Diese Website</h2>
            <p>
              Die Website grenzpreis-landing wird über Vercel ausgeliefert. Es werden keine Werbe- oder Tracking-Cookies eingesetzt. Optional kann <strong className="text-foreground">Vercel Analytics</strong> in anonymisierter, aggregierter Form Seitenaufrufe zählen — ohne Cookies und ohne personenbezogenen Bezug.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">8. Drittanbieter</h2>
            <p>Die App nutzt folgende Dienste mit eigener Datenschutzerklärung:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Apple App Store / Google Play — App-Distribution, In-App-Käufe, Absturzberichte</li>
              <li>RevenueCat — Abo-Verwaltung</li>
              <li>OpenAI — Verarbeitung von KI-Anfragen</li>
            </ul>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">9. Speicherung und Aufbewahrung</h2>
            <p>
              Lokale Einstellungen verbleiben auf deinem Gerät. Abo-Daten werden bei RevenueCat so lange aufbewahrt, wie es Apple/Google sowie das Steuer- und Konsumentenschutzrecht verlangen. KI-Anfragen werden in Echtzeit verarbeitet und nicht von uns gespeichert.
            </p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">10. Deine Rechte</h2>
            <p>Gemäss Schweizer DSG und EU-DSGVO kannst du jederzeit:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>eine Kopie aller über dich verarbeiteten Daten anfordern,</li>
              <li>die Berichtigung oder Löschung deiner Daten verlangen,</li>
              <li>deine Zustimmung zu KI-Funktionen jederzeit widerrufen (durch Nichtnutzung der KI-Suche/des Chatbots),</li>
              <li>eine Beschwerde beim Eidgenössischen Datenschutzbeauftragten (EDÖB) oder der zuständigen Behörde einreichen.</li>
            </ul>
            <p className="mt-2">Anfragen bitte an: <a href="mailto:info@lweb.ch" className="text-primary hover:underline">info@lweb.ch</a></p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">11. Kinder</h2>
            <p>Die App richtet sich nicht an Kinder unter 13 Jahren. Wir erheben wissentlich keine Daten von Kindern.</p>
          </section>

          <section>
            <h2 className="font-bold text-foreground text-base mb-3">12. Änderungen</h2>
            <p>Wir können diese Erklärung bei Änderungen der App anpassen. Wesentliche Änderungen werden in der App angekündigt. Das Datum „Stand" oben spiegelt immer die aktuelle Version wider.</p>
          </section>

        </div>
      </div>
    </div>
  )
}
