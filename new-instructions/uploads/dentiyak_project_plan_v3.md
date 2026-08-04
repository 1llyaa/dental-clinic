# Dentiyak stomatologická klinika — Website Project Plan

*Managed by: Alex (AI-augmented web project manager)*
*Last updated: Phase 2 complete. Design system + image spec done. Phase 5 build ready.*

---

## Project overview

Building a new website for **Dentiyak s.r.o. stomatologická klinika** — a full-service dental clinic positioning itself as a warm, premium practice with a strong lean toward self-pay patients seeking implants, aesthetics, and PRF therapy.

---

## Phase roadmap

```
Phase 1 — Strategy & Discovery     ✓ COMPLETE
Phase 2 — Information Architecture ✓ COMPLETE
Phase 3 — Copy Briefs & Writing    ← odpoledne
Phase 4 — Design Direction         ✓ COMPLETE (wireframe + design system schválen)
Phase 5 — Build                    ← NEXT
Phase 6 — Review & QA
Phase 7 — Launch & Handoff
```

Each phase ends with a summary of decisions made, a list of open items, and an explicit "ready to move on?" checkpoint before proceeding.

---

## Phase 1 — What was confirmed

### The practice

| Area | Confirmed detail |
|---|---|
| **Legal name** | Dentiyak s.r.o. stomatologická klinika |
| **Services** | Restorative, aesthetic/prosthetic, pedostomatology, oral surgery, implants, PRF therapy, laughing gas, orthodontic collaboration (external) |
| **Insurance** | VZP, ČPZP, OZP, VoZP, ZPMV + self-pay for premium services |
| **Practice stage** | Mixed — existing patients + growing, some new elements (likely rebrand/expansion) |
| **Own lab** | Yes |

### Web goals

| Area | Confirmed detail |
|---|---|
| **Primary goal** | Inform visitors about procedures |
| **Secondary goal** | Attract self-pay patients (implants, aesthetics) |
| **New patients** | Limited — waitlist in place |
| **Booking method** | Phone only, permanent reception (hours TBD) |
| **Pricing policy** | "Per treatment plan" — no published price list on site |

### Audience & patient psychology

| Area | Confirmed detail |
|---|---|
| **Ideal patient** | Self-pay adult, aesthetics or implants |
| **Primary barrier** | Bad past experience (not price, not logistics) |
| **What they need** | To feel safe and trust the clinic before booking |
| **Common entry point** | Looking for a dentist after bad experience elsewhere |

### Differentiators

- Modern equipment: 3D X-ray, microscope, intraoral scanner
- Own laboratory
- PRF therapy with blood work (see brochure — approved source only)
- Short wait times
- Comprehensive / holistic approach
- Laughing gas (sedation option — notable differentiator for anxious patients)

### Trust signals available

- Modern equipment (documentable)
- Team photos *(TBD — none yet)*
- Patient references *(TBD)*
- Before/after photos *(TBD)*

### Tone & brand

| Area | Confirmed detail |
|---|---|
| **Tone** | Warm + calming first, premium second |
| **Aesthetic** | Luxury-refined, organic — not clinical white/blue |
| **Primary color** | Warm taupe/sand ~#9a8b6e (logo linework) |
| **Text** | Near-black #1a1a1a on cream/white backgrounds |
| **Typography direction** | Refined serif display + humanist sans-serif body |
| **Logo** | Available, strong — organic linework |
| **Avoid** | Dental stock photo clichés, blue/turquoise "dentist" palette |

### Confirmed pages

- Home
- Services (with sub-pages per treatment area)
- About / Team
- New Patients
- FAQ
- Contact
- Ochrana osobních údajů *(legal requirement — GDPR privacy policy page)*

*Explicitly excluded: published price list (Ceník)*
*Required at build: cookie consent banner (site-wide component)*

### Services to feature on site

- Restorative dentistry (záchovná stomatologie)
- Aesthetic & prosthetic dentistry
- Dental hygiene
- Implants
- Oral surgery with PRF
- Paediatric dentistry (pedostomatologie)
- Whitening & aesthetics
- Laughing gas (rajský plyn)
- Joint/TMJ treatment (klouby)
- Orthodontic collaboration

### Languages

- Czech (primary)
- English + German (secondary — scope TBD: full translations or basic info pages only)

### PRF — source rule

> **Only use claims from the approved PRF brochure (PRF_treatment_brochure.pdf).** Do not invent or extrapolate claims. Do not call it "revolutionary."

PRF applications confirmed in brochure:
- Post-extraction healing, implants, periodontal regeneration, bone augmentation, sinus lift
- Aesthetic medicine (skin quality, fine lines, elasticity, post-procedure regeneration, scar appearance)
- Hair growth support
- Joint/musculoskeletal (osteoarthritis, joint pain, tendinopathy)

### Legal requirements for the website

Verified against Czech legislation. Full analysis in `dentiyak_pravni_pozadavky_web.md`.

**Povinné (must be on site at launch):**

- Identifikace poskytovatele: název (Dentiyak s.r.o.), IČO, sídlo, zápis v OR (soud, oddíl, vložka) — §435 OZ + §7 ZOK + §45 zák. 372/2011 Sb.
- Ordinační hodiny — §45 odst. 2 písm. c) zák. 372/2011 Sb.
- Informace o neodkladné péči mimo ordinační dobu (zubní pohotovost, zastupující lékař) — §45 odst. 2 písm. e) zák. 372/2011 Sb.
- Zásady ochrany osobních údajů / GDPR — čl. 13 a 14 GDPR + zák. 110/2019 Sb.
- Cookie consent banner — pokud web používá analytiku nebo marketing cookies — §89 zák. 127/2005 Sb.

**Podmíněně povinné (neplatí pro aktuální scope, ale sledovat):**

- Ceník — stomatologové mají výjimku; aktuální přístup „cena dle plánu léčby" je v pořádku
- Obchodní podmínky — jen pokud přidáme online rezervace (aktuálně telefon only)
- RTG informace na webu — jen pokud RTG prezentujeme jako samostatnou službu

**Dopad na wireframe:**

| Požadavek | Umístění | Stav |
|---|---|---|
| Identifikace (název, IČO, sídlo, OR) | Footer + Kontakt | ❌ Chybí data od klienta |
| Ordinační hodiny | Kontakt + topbar | ⚠️ Placeholder |
| Neodkladná péče / pohotovost | Kontakt | ❌ Nová sekce — přidat |
| GDPR / Ochrana osobních údajů | Vlastní stránka + odkaz z footeru | ❌ Nutné vytvořit |
| Cookie consent | Celý web (banner) | ❌ Přidat do buildu |

### Build assets — připraveno

| Soubor | Popis | Stav |
|---|---|---|
| `dentiyak-design-system.css` | CSS variables, typografie, komponenty, obrazkové vrstvy | ✅ Hotovo v2 |
| `dentiyak-image-spec-v2.md` | 14 foto-pozic s rozměry, CSS třídami, briefem pro fotografa | ✅ Hotovo |
| `dentiyak-image-spec` (interaktivní wireframe) | Vizuální přehled s editorem popisků | ✅ Odsouhlaseno |

### Tech stack

| Parametr | Rozhodnutí |
|---|---|
| **Stack** | Statické HTML + CSS + JS (žádný CMS, žádný backend) |
| **Build přístup** | Vibe-coding v Claude Design, stránka po stránce |
| **Sdílený základ** | `dentiyak-design-system.css` importován na každé stránce |
| **Hosting** | TBD |

--- — must resolve before or during Phase 2

| # | Gap | Blocks | Client must provide |
|---|---|---|---|
| 1 | **Tech stack** | ✅ Vyřešeno — statické HTML/CSS/JS | — |
| 2 | **GDPR docs** — do they exist, or need creating? | Phase 6 QA, any form on site | ✅ Confirm status |
| 3 | **Reception / phone hours** | Home page, Contact page, expectations management | ✅ Exact hours |
| 4 | **EN/DE scope** — full translations or basic info only? | Phase 3 copy briefs, Phase 5 build | ✅ Decision |
| 5 | **Photography** — no photos exist yet | Cannot launch without real photography | ✅ Schedule photoshoot |
| 6 | **Clinic address + phone number** | Contact page, map embed, structured data/SEO | ✅ Data |
| 7 | **Success metrics** — how will client know the site is working? | Phase 7 handoff, analytics setup | ✅ Definition |
| 8 | **Competition** — nearby practices, differentiation narrative | Phase 3 positioning copy | ✅ Input |
| 9 | **Approval chain** — who signs off on copy and design? | Phase 3–4 review gates | ✅ Decision |
| 10 | **IČO + zápis v OR** (soud, oddíl, vložka) | Footer, Kontakt — legal requirement | ✅ Data |
| 11 | **Zubní pohotovost** — kam odkázat pacienty mimo ordinační dobu | Kontakt — legal requirement | ✅ Reference / dohoda |
| 12 | **Cookie / analytics scope** — bude na webu GA, Hotjar, jiné? | Cookie consent implementace | ✅ Decision |

### Photography note (standing flag)

The site cannot launch well without real photography of the clinic interior and team. This must run as a **parallel workstream** — photoshoot brief should be prepared during Phase 4 (design direction) at the latest. Placeholder strategy needed for build phase.

---

## Standing rules for this project

1. **No deliverable without a plan.** Outline/brief first, then production.
2. **Label every output.** Mark clearly: *Project Manager decision* / *AI-generated — review before use* / *Needs client input*.
3. **GDPR on every form.** Any contact form, booking element, or cookie must be flagged for legal review.
4. **PRF accuracy.** Use only what's in the approved brochure. No invented claims.
5. **No price list.** All copy routes pricing questions to a consultation.
6. **Languages are separate scope.** Default Czech only until EN/DE scope is confirmed.
7. **Photos are a blocker.** Flag early and often.
8. **Legal compliance.** Footer must contain full provider identification (název, IČO, sídlo, OR). Contact page must include emergency/out-of-hours info. GDPR page and cookie consent required before launch. See `dentiyak_pravni_pozadavky_web.md` for full checklist.
9. **No advertising overclaims.** Healthcare advertising is regulated (zák. 40/1995 Sb.). No promises of specific outcomes, no misleading claims, no undue urgency.

---

## AI sub-persona toolkit (for Phase 3+)

| Task | Sub-persona to write |
|---|---|
| Page copy (Czech) | Healthcare copywriter, Czech native, warm + premium tone |
| Sitemap / IA | UX architect for conversion-focused medical sites |
| SEO meta texts | Medical SEO specialist, Czech market |
| Design direction brief | Brand strategist with premium healthcare portfolio |
| GDPR checklist | Czech GDPR compliance reviewer for health data |
| FAQ content | Patient experience writer who anticipates fear and doubt |
| PRF service page | Medical content writer, explains procedures accessibly, PRF brochure as sole source |
| EN/DE translation brief | Medical translator with Czech→EN/DE healthcare experience |

---

## Next step

**Phase 2 — Information Architecture**

Gate question before starting: *What is the tech stack preference?* (Plain HTML/CSS, WordPress, Webflow, or other?)

Phase 2 deliverable: approved sitemap document (page list, hierarchy, per-page goals and CTAs, navigation labels) — before any copy or design begins.
