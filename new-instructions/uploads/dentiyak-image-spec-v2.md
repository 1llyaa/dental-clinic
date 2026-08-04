# Dentiyak — Image Spec v2

*Dokument pro předání Claude Design / designérovi / fotografovi.*
*Verze: 2.0 — odsouhlaseno v rámci wireframe review*
*Celkem foto-pozic: 13 (11 fotografie, 1 video/bg, 1 ikony)*

---

## Jak dokumentem pracovat

Každá pozice obsahuje:
- **Rozměr** — cílová velikost v px (dodat ve 2× pro retina)
- **Typ** — foto / video / blur / ikony
- **CSS třída** — odpovídá `dentiyak-design-system.css` (sekce 6 — Obrazkové vrstvy)
- **Obsah** — co má být na fotce / videu
- **Nálada** — atmosféra, pocit
- **Brief** — konkrétní instrukce pro fotografa
- **Priorita** — 🔴 Nutné pro launch / 🟡 Volitelné

---

## Sekce 1 — Hero

### 1a. Hero pozadí — video nebo blurred foto

| Parametr | Detail |
|---|---|
| **Rozměr** | 1440 × 800 px (video: 1080p min) |
| **Typ** | Video (MP4, smyčka) nebo statická foto s CSS blur |
| **CSS třída** | `.hero-bg-media` + `.hero-bg-overlay` |
| **Overlay** | `rgba(250, 248, 244, 0.72)` — krémová průhledná vrstva přes médium |
| **Priorita** | 🔴 Launch |

**Obsah:** Interiér ordinace — ošetřovací sál nebo chodba. Celkový pohled, žádné osoby. Použito jako rozmazané médium na celé pozadí hero sekce.

**Nálada:** Mlhavé, klidné, teplé. Nesmí odvádět pozornost od textu a portrétu doktorky. Viditelné jen jako atmosféra za překryvnou vrstvou.

**Brief pro fotografa / kameramana:**
- **Video varianta (preferovaná):** 10–20s smyčka bez zvuku, bez pohyblivých osob, pomalý pohyb kamery (např. pomalý pan nebo statický záběr). Export: MP4 H.264, 1080p, do 5 MB po kompresi.
- **Foto varianta (záložní):** Foto ordinace, rozmazání přidáme CSS `blur(8px) + scale(1.05)`. Stačí ostrá fotka interiéru.
- Teplá barevnost, žádné studené světlo.

---

### 1b. Hero portrét — doktorka (ostrá fotka)

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 600 px (dodat 960 × 1200 px) |
| **Typ** | Ostrá fotografie, polopostava nebo 3/4 |
| **CSS třída** | `.hero-portrait` |
| **Priorita** | 🔴 Launch |

**Obsah:** Ostrá fotka doktorky — polopostava nebo 3/4 postava na popředí hero sekce. Bílý plášť nebo čistý pracovní oděv. Přirozený, důvěryhodný výraz. Neutrální nebo lehce rozmazané pozadí (interiér ordinace).

**Nálada:** Profesionální, přívětivá, sebejistá. Ne reklamní pose — přirozená pozice, mírný úsměv nebo klidný výraz. Výrazný kontrast vůči rozmazanému pozadí.

**Brief pro fotografa:** Záběr od pasu nahoru nebo na 3/4 postavu. Světlé nebo rozmazané pozadí — doktorka musí být ostře oddělená od pozadí. Teplé přirozené světlo zepředu nebo ze strany. Hloubka ostrosti — popředí ostrý, pozadí rozmazáno přirozeně.

---

## Sekce 2 — Proč právě my

*Sekce má gradientní pozadí (`section-gradient-warm`). Každá karta obsahuje foto s blur efektem (`card-photo-blur`). Foto slouží jako atmosferická ilustrace, ne dokumentace.*

### 2a. Vlastní laboratoř

| Parametr | Detail |
|---|---|
| **Rozměr** | 400 × 200 px |
| **Typ** | Foto — blur efekt CSS (`filter: blur(3px)`) |
| **CSS třída** | `.card-photo-blur-wrap` + `.card-photo-blur` |
| **Priorita** | 🔴 Launch |

**Obsah:** Zubní laboratoř — pracovní stůl, nástroje, zubní protéza nebo sádrový model. Detail práce v laboratoři nebo laboratorní vybavení.

**Brief:** Teplé světlo, řemeslný pocit. Rozmazání přidáme v CSS — foto může být ostré, stačí zajímavá kompozice.

---

### 2b. Moderní vybavení

| Parametr | Detail |
|---|---|
| **Rozměr** | 400 × 200 px |
| **Typ** | Foto — blur efekt CSS |
| **CSS třída** | `.card-photo-blur-wrap` + `.card-photo-blur` |
| **Priorita** | 🔴 Launch |

**Obsah:** Mikroskop, 3D rentgen (CBCT) nebo intraorální skener. Čistý moderní přístroj v ordinaci. Přístroj musí být rozpoznatelný i po blur efektu.

**Brief:** Zaostřit na přístroj, rozmazané pozadí. Čisté, technologické.

---

### 2c. PRF terapie

| Parametr | Detail |
|---|---|
| **Rozměr** | 400 × 200 px |
| **Typ** | Foto — blur efekt CSS |
| **CSS třída** | `.card-photo-blur-wrap` + `.card-photo-blur` |
| **Priorita** | 🔴 Launch |

**Obsah:** Zkumavka s krví nebo centrifuga. Čisté, klinické podání bez dramatiky. Přirozené barvy.

**Brief:** Detail zkumavky nebo centrifugy na neutrálním pozadí. Klidné, vědecké. Vyhnout se dramatickým červeným záběrům.

*Poznámka: Veškerý text o PRF musí vycházet výhradně z `PRF_treatment_brochure.pdf`. Fotka nesmí implikovat více, než text říká.*

---

### 2d. Rajský plyn

| Parametr | Detail |
|---|---|
| **Rozměr** | 400 × 200 px |
| **Typ** | Foto — blur efekt CSS |
| **CSS třída** | `.card-photo-blur-wrap` + `.card-photo-blur` |
| **Priorita** | 🔴 Launch |

**Obsah:** Maska pro rajský plyn nebo klidný abstraktní záběr evokující pohodu. Klid, lehkost, bezstarostnost.

**Brief:** Maska nebo detail vybavení. Vyhnout se medicínsky strašidelné estetice. Teplé, uklidňující.

---

### 2e. Ikony karet (Proč právě my)

| Parametr | Detail |
|---|---|
| **Typ** | SVG ikony — tenká linka |
| **Rozměr** | 32 × 32 px viewBox |
| **Barva** | `#9a8b6e` (--taupe-500), stroke 1.5px, no fill |
| **Styl** | Organický linework — ladí s logem |
| **Priorita** | 🔴 Launch |

**4 ikony:**
1. Vlastní laboratoř — protéza nebo laboratorní nádobka
2. Moderní vybavení — lupy / mikroskop / 3D abstrakt
3. PRF terapie — kapka nebo buňka
4. Rajský plyn — vlnka / maska / oblak

**Zdroj:** Phosphor Icons (outline) přebarvené na `#9a8b6e`, nebo custom SVG v linework stylu loga.

---

## Sekce 3 — Péče, kterou hledáte (Služby)

*Každá ze 4 prioritních karet má foto nahoře, ostré, bez blur efektu. Hover: jemné zoom přes CSS (`.card-photo:hover → scale(1.03)`).*

### 3a. Implantáty

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 240 px |
| **Typ** | Ostrá fotografie |
| **CSS třída** | `.card-photo-wrap` + `.card-photo` |
| **Alt text** | `Zubní implantát, Dentiyak stomatologická klinika` |
| **Priorita** | 🔴 Launch |

**Obsah:** Implantát, protetická práce nebo detail výsledku. Případně model chrupu nebo detail laboratorní práce.

**Brief:** Čistý detail produktu nebo procedury. Bílé nebo neutrální pozadí. Precizní, kvalitní dojem.

---

### 3b. PRF terapie

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 240 px |
| **Typ** | Ostrá fotografie |
| **CSS třída** | `.card-photo-wrap` + `.card-photo` |
| **Alt text** | `PRF terapie, autologní regenerace, Dentiyak` |
| **Priorita** | 🔴 Launch |

**Obsah:** Zkumavka s krví nebo centrifuga — identické podání jako 2c, ale bez blur.

**Brief:** Může být totožná fotka jako 2c — zde zobrazena ostře.

---

### 3c. Estetická stomatologie

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 240 px |
| **Typ** | Ostrá fotografie |
| **CSS třída** | `.card-photo-wrap` + `.card-photo` |
| **Alt text** | `Estetická stomatologie, Dentiyak` |
| **Priorita** | 🔴 Launch |

**Obsah:** Přirozený krásný úsměv nebo detail práce (faseta, korunka). Žádné přehnané reklamní "billboard smile" — přirozená barevnost zubů.

**Brief:** Záběr úsměvu ze 3/4 nebo zpředu. Přirozené barvy. Teplé světlo.

---

### 3d. Dentální hygiena

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 240 px |
| **Typ** | Ostrá fotografie |
| **CSS třída** | `.card-photo-wrap` + `.card-photo` |
| **Alt text** | `Dentální hygiena, Dentiyak` |
| **Priorita** | 🔴 Launch |

**Obsah:** Hygiena v procesu nebo nástroje dentální hygieny na čistém povrchu. Čisté, pečovatelské.

**Brief:** Nástroje nebo procedura v klidném podání. Čistý povrch, teplé světlo.

---

## Sekce 4 — Váš tým

*Sekce má tmavé gradientní pozadí (`section-gradient-dark`). Každá dlaždice je celá foto osoby s tmavým gradient overlayem přes spodní část — jméno a role jsou přes overlay.*

### 4a. Tým — Doktor/ka 1

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 440 px (dodat 960 × 880 px) |
| **Typ** | Portrét — celá dlaždice |
| **CSS třída** | `.team-card-photo` + `.team-card-overlay` |
| **Alt text** | `MUDr. [Jméno], Dentiyak` |
| **Priorita** | 🔴 Launch |

**Obsah:** Portrét lékaře/lékařky. Záběr od ramen nahoru nebo na celou postavu. Celá dlaždice je fotka, jméno přes tmavý overlay dole.

**Nálada:** Přirozený, důvěryhodný. Teplé světlo.

**Brief:** Konzistentní pozadí a světlo s ostatními portréty (Team 4b, 4c). Foceno ve stejném sezení. Záběr od ramen nahoru. Přirozená pozice, ne strnulá.

---

### 4b. Tým — Doktor/ka 2

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 440 px (dodat 960 × 880 px) |
| **Typ** | Portrét — celá dlaždice |
| **CSS třída** | `.team-card-photo` + `.team-card-overlay` |
| **Alt text** | `MUDr. [Jméno], Dentiyak` |
| **Priorita** | 🔴 Launch |

**Obsah:** Portrét druhého lékaře/lékařky. Identické podmínky jako 4a.

**Brief:** Totožné podmínky jako 4a — foceno ve stejném sezení.

---

### 4c. Tým — Recepce

| Parametr | Detail |
|---|---|
| **Rozměr** | 480 × 440 px (dodat 960 × 880 px) |
| **Typ** | Portrét — celá dlaždice |
| **CSS třída** | `.team-card-photo` + `.team-card-overlay` |
| **Alt text** | `[Jméno], recepce, Dentiyak` |
| **Priorita** | 🔴 Launch |

**Obsah:** Portrét pracovnice recepce. Přátelský výraz — první dojem pacienta.

**Brief:** Stejná série jako lékaři. Civilní nebo firemní uniforma. Přirozený úsměv.

---

## Souhrnná tabulka

| # | ID | Sekce | Typ | Rozměr | CSS třída | Priorita |
|---|---|---|---|---|---|---|
| 1 | `heroBg` | Hero pozadí | Video / blur foto | 1440×800 | `.hero-bg-media` | 🔴 |
| 2 | `heroDoc` | Hero doktorka | Portrét ostrý | 480×600 | `.hero-portrait` | 🔴 |
| 3 | `wuLab` | Proč my — Lab | Foto blur | 400×200 | `.card-photo-blur` | 🔴 |
| 4 | `wuEquip` | Proč my — Vybavení | Foto blur | 400×200 | `.card-photo-blur` | 🔴 |
| 5 | `wuPRF` | Proč my — PRF | Foto blur | 400×200 | `.card-photo-blur` | 🔴 |
| 6 | `wuGas` | Proč my — Rajský plyn | Foto blur | 400×200 | `.card-photo-blur` | 🔴 |
| 7 | `wuIcons` | Proč my — ikony | SVG | 32×32 | inline SVG | 🔴 |
| 8 | `svcImpl` | Služby — Implantáty | Foto ostrá | 480×240 | `.card-photo` | 🔴 |
| 9 | `svcPRF` | Služby — PRF | Foto ostrá | 480×240 | `.card-photo` | 🔴 |
| 10 | `svcEstetika` | Služby — Estetika | Foto ostrá | 480×240 | `.card-photo` | 🔴 |
| 11 | `svcHygiena` | Služby — Hygiena | Foto ostrá | 480×240 | `.card-photo` | 🔴 |
| 12 | `team1` | Tým — Lékař 1 | Portrét celá dlaž. | 480×440 | `.team-card-photo` | 🔴 |
| 13 | `team2` | Tým — Lékař 2 | Portrét celá dlaž. | 480×440 | `.team-card-photo` | 🔴 |
| 14 | `team3` | Tým — Recepce | Portrét celá dlaž. | 480×440 | `.team-card-photo` | 🔴 |

*Všechny pozice jsou 🔴 nutné pro launch — žádná fotografie zatím neexistuje.*

---

## Fotografický ateliér — shrnutý brief

**Celková nálada:** Teplá, klidná, prémiová. Žádná klinická bílá ani modrá. Přirozené světlo kde možné. Organické materiály v záběru. Bez pacientů.

**Povinné záběry:**
1. Portrét doktorky — ostrý, hero sekce (heroDoc)
2. Portréty celého týmu × 3 (team1, team2, team3) — konzistentní série, stejné sezení
3. Interiér ordinace — pro hero bg a karty Proč právě my (min. 4 záběry: chodba/čekárna, sál, laboratoř, vybavení)
4. Detail PRF — zkumavka nebo centrifuga
5. Detail estetika — přirozený úsměv
6. Detail hygiena — nástroje nebo procedura

**Technické požadavky:**
- Minimum 2000px na delší straně (dodat 2× pro retina)
- JPG, sRGB, 80–90% kvalita
- Video: MP4 H.264, 1080p, max 5 MB
- Pojmenování: `dentiyak-[id]-01.jpg` (dle ID z tabulky výše)

---

*CSS pro všechny foto-třídy: `dentiyak-design-system.css`, sekce 6 — Obrazkové vrstvy*
*Wireframe s foto-pozicemi: `dentiyak-homepage-wireframe-v2` (interaktivní)*
