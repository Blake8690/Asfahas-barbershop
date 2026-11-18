Bygg en personlig portfolio/CV-hemsida åt mig. Jag har bifogat 4 inspirationsbilder.
Följ deras design EXAKT: layout, typografi, spacing, knappar, färger och känsla.
Byt bara ut innehållet mot mitt. Hitta inte på egna designidéer.
Allt innehåll på sidan ska vara på svenska.

==================================================
TEKNIK
==================================================
- HTML, CSS och vanilla JavaScript. Inga ramverk.
- Filstruktur:
  index.html
  style.css
  script.js
  /bild        (porträtt, profilbild, projektbilder)
  /projekt     (en HTML-sida per projekt, alla använder samma style.css)
- Alla färger, typsnitt och avstånd ska ligga som CSS-variabler i :root i början av style.css.
- Semantisk HTML (header, nav, main, section, footer). Alla bilder ska ha alt-text.
- Starta en lokal förhandsvisning när du är klar.

==================================================
DESIGNSYSTEM (följ strikt)
==================================================
Färger:
- Bakgrund: #FFFFFF
- Ljusgrå sektionsbakgrund: #F4F4F4
- Text: #111111
- Sekundär text: #6B6B6B
- Små etiketter: #A0A0A0
- Ramar: #E5E5E5
- Mörk sektion: #0A0A0A
- Accent: ENDAST en liten grön prick (#22C55E) i "Tillgänglig"-badgen. Inga andra färger.

Typsnitt (Google Fonts):
- Rubriker: "Archivo", weight 800, VERSALER, letter-spacing -0.02em
- Brödtext, knappar och meny: "Manrope", weight 400–600

Knappar ("pills", border-radius: 999px, padding 12px 22px):
- Primär: svart bakgrund, vit text, pil ↗ efter texten, mjuk skugga
- Sekundär: vit bakgrund, 1px ram #E5E5E5, svart text, mjuk skugga
- Hover: lyfts 2px (transform: translateY(-2px)), transition 0.2s

Taggar och etiketter: små vita pills med tunn ram, 12–13px text.

Skuggor: bara mjuka och diffusa: 0 4px 20px rgba(0,0,0,0.06). Inga hårda skuggor.

Layout: mycket luft, stora marginaler. Innehållet har max-bredd 1280px och är centrerat.
Sektionerna har padding på minst 120px uppe och nere på dator, 72px på mobil.

FÖRBJUDET: färggradienter, emojis, glödeffekter, neon, generiska stockikoner,
kort med tjocka skuggor och allt som ser ut som en AI-mall.

==================================================
SEKTION 1: HERO (följ bild 1)
==================================================
- Fyller hela skärmen (min-height: 100vh), vit bakgrund.
- Uppe till vänster: pill-badge med grön prick + texten "Tillgänglig för nya uppdrag".
- Meny uppe till höger: "Projekt [8]", "Erfarenhet [3]", "Utbildning [2]", "Kontakt".
  Siffran inom hakparentes ska vara liten och grå (#A0A0A0), exakt som i bild 1.
- Längst upp till höger: svart pill-knapp "Hör av dig ↗" som länkar till #kontakt.
- MITT NAMN i jättestor text över hela bredden (font-size: clamp(64px, 15vw, 260px)):
  - Förnamnet "[FÖRNAMN]" som OUTLINE: transparent fyllning,
    -webkit-text-stroke: 2px #111. Placerat uppe till vänster.
  - Efternamnet "[EFTERNAMN]" SOLID svart, förskjutet nedåt och åt höger.
- I mitten: mitt porträtt bild/portratt.png (frilagt, utan bakgrund), svartvitt
  med filter: grayscale(100%). Porträttet ligger OVANPÅ namnet med högre z-index,
  så att huvudet överlappar texten precis som i bild 1. Bilden når ända ner till
  hero-sektionens underkant.
- Nere till vänster:
  - Titel i fetstil: "[DIN TITEL, t.ex. Webbutvecklare & IT-student]"
  - Grå mening, max 2 rader: "[DIN MENING]"
  - Svart pill-knapp: "Låt oss samarbeta ↗"
- Nere till höger: vertikal stapel med vita pill-länkar med små enkla linjeikoner
  (inline SVG): LinkedIn, GitHub, Instagram, Mejl.

==================================================
SEKTION 2: UTVALDA PROJEKT (följ bild 3)
==================================================
- Bakom rubriken: ordet "PORTFOLIO" i enorm text (ca 12vw), färg #F0F0F0, centrerat.
- Ovanpå, centrerat: rubriken "/UTVALDA PROJEKT" i svart.
- Under, till vänster: filterflikar "Alla", "Webbsidor", "UF", "Verktyg".
  Aktiv flik är svart text, övriga grå. Ett klick filtrerar korten med JS och mjuk fade.
- Till höger på samma rad: vit pill "Se alla ↗".
- Grid med 2 kolumner (1 kolumn på mobil), gap 32px. Varje kort innehåller:
  - En skärmdump av projektet (border-radius 12px, mjuk skugga)
  - Vid hover: bilden zoomar lätt (scale 1.03) och en rund vit knapp med ↗ visas i mitten
  - Titel: "Projektnamn - kort beskrivning"
  - Pill-taggar under titeln
- Hela kortet länkar till projektets egen sida i /projekt.

PROJEKT:
1. [PROJEKTNAMN] - [kort beskrivning] - taggar: Webbsida - live: [URL] - bild: bild/projekt1.png
2. Incident Tracker - [kort beskrivning, t.ex. Verktyg för att rapportera och följa upp incidenter] - taggar: Verktyg - live: [URL] - bild: bild/incident-tracker.png
3. [UF-FÖRETAGETS NAMN] - [kort beskrivning] - taggar: UF - live: [URL] - bild: bild/uf.png
4. [UF-HEMSIDA] - [kort beskrivning] - taggar: UF, Webbsida - live: [URL] - bild: bild/uf-hemsida.png
5. [HEMSIDA 2] - [kort beskrivning] - taggar: Webbsida - live: [URL] - bild: bild/hemsida2.png
6. [HEMSIDA 3] - [kort beskrivning] - taggar: Webbsida - live: [URL] - bild: bild/hemsida3.png
(Saknas en bild ska du använda en ljusgrå platshållare med projektnamnet, inte en stockbild.)

==================================================
SEKTION 3: PROJEKTSIDA, mall för varje projekt (följ bild 2)
==================================================
Skapa en egen sida i /projekt för varje projekt ovan, med exakt den här layouten:
- Ljusgrå bakgrund #F4F4F4.
- Uppe till vänster: vit pill "← Tillbaka" som länkar till ../index.html#projekt.
- Uppe till höger: pill-badge med grön prick "Tillgänglig för nya uppdrag".
- Vänsterkolumn:
  - Pill-taggar ovanför titeln
  - Stor titel "[Projektnamn]" följd av tunnare grå text "/Eget projekt" eller "/UF-projekt"
  - Grå beskrivning, 2–3 rader
  - Knappar: svart "Se live ↗" + vit "Kontakta mig"
- Högerkolumn med info-rader, med liten grå etikett överst och fet text under:
  - "Roll": [t.ex. Design & utveckling]
  - "Tid": [t.ex. 4 veckor]
  - "Verktyg": små vita kvadratiska rutor (48x48, rundade hörn, mjuk skugga)
    med verktygets namn eller logga, t.ex. HTML, CSS, JS, Figma
- Under båda kolumnerna: en stor skärmdump av projektet i ett vitt kort med rundade hörn,
  sedan en kort text "Om projektet" med 3–5 meningar.

==================================================
SEKTION 4: ERFARENHET (svart sektion)
==================================================
- Bakgrund #0A0A0A, vit text, rubrik "/ERFARENHET".
- En lista med en rad per jobb:
  [år till vänster i grått] | [roll i fetstil + företag under] | [kort grå beskrivning till höger]
- Tunna linjer (#222) mellan raderna. Raden blir lite ljusare vid hover (#141414).
  - [ÅR–ÅR] | Budbilsförare | PostNord | [vad du gjorde/lärde dig]
  - [ÅR–ÅR] | [ROLL] | Nordic Wellness | [beskrivning]
  - [ÅR–ÅR] | [ROLL] | [FÖRETAG 3] | [beskrivning]

==================================================
SEKTION 5: UTBILDNING (vit sektion)
==================================================
- Samma radlayout som erfarenhet, men på vit bakgrund med svart text.
- Rubrik "/UTBILDNING".
  - [ÅR–nu] | [KURSEN DU GÅR NU] | [SKOLA] | liten pill "Pågående" med grön prick
  - [ÅR–ÅR] | [AVSLUTAD KURS] | [SKOLA] | liten pill "Avslutad"

==================================================
SEKTION 6: KONTAKT (följ bild 4), id="kontakt"
==================================================
- Mjuk ljusgrå bakgrund med en mycket subtil molnig/dimmig textur
  (flera stora radial-gradients i vitt med låg opacitet på #EDEDED).
- Centrerat:
  - pill-badge med grön prick "Tillgänglig för nya uppdrag"
  - stor rubrik "HAR DU ETT UPPDRAG I ÅTANKE?"
  - grå undertext på 2 rader: "[DIN TEXT, t.ex. Hör av dig så skapar vi något tydligt och effektivt tillsammans.]"
  - svart pill-knapp "Kontakta mig ↗" som öppnar mailto:[DIN MEJL]
- Under: en rad med pills. Den första är svart med min lilla runda profilbild
  (bild/profil.jpg) och mitt namn, sedan vita pills: LinkedIn, GitHub, Instagram, Mejl.
- Footer: liten grå text "© [ÅR] [DITT NAMN]".

==================================================
LÄNKAR
==================================================
- LinkedIn: [URL]
- GitHub: [URL]
- Instagram: [URL]
- Mejl: [DIN MEJL]

==================================================
ANIMATIONER (diskreta)
==================================================
- Sektioner tonar in och glider upp 20px när man scrollar till dem (IntersectionObserver).
- Vid sidladdning glider förnamnet in från vänster och efternamnet från höger (0.8s, ease-out).
- Porträttet tonar in efter namnet.
- Smooth scroll för menylänkarna.
- Respektera prefers-reduced-motion: stäng av alla animationer då.

==================================================
RESPONSIVT
==================================================
Testa på 375px, 768px och 1440px.
- Mobil: namnet staplas på två rader, porträttet hamnar under namnet,
  de sociala länkarna blir en horisontell rad som kan scrollas,
  menyn blir en hamburgare som öppnar en vit helskärmsmeny.
- Ingen horisontell scroll på någon skärmstorlek.

==================================================
SEO OCH DETALJER
==================================================
- <title>[DITT NAMN] - [DIN TITEL]</title>
- meta description, Open Graph-taggar och en enkel favicon med mina initialer.
- Kontrastkrav: all text ska vara läsbar.

==================================================
KONTROLL (gör detta sist)
==================================================
1. Jämför varje sektion med de bifogade bilderna. Lista alla skillnader i spacing,
   storlekar, typografi och knappar, och fixa dem.
2. Klicka igenom alla länkar och projektsidor och kontrollera att de fungerar.
3. Visa mig skärmdumpar av hela sidan på dator (1440px) och mobil (375px).
