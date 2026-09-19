# № page456

**The Infinite Encyclopedia of Numbers.**
Auto-generated digital space where every number - from negative infinity to positive infinity - has its own page, passport, and community-driven facts.

[![Next.js](https://img.shields.io/badge/Next.js-16.3.1-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-2.112.3-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![License: Copyright](https://img.shields.io/badge/License-PolyForm%20Noncommercial-blue)](#license--usage)

---

## The Vision

I was deeply fascinated by the concept of the Library of Babel, a theoretical repository containing every possible combination of letters. Around the same time, I came across a massive, collaborative digital canvas project - an endlessly animated scene of a space station floor filled with pop culture references and characters. It sparked a thought: what if there was a similar infinite space, but dedicated entirely to numbers? What if I could create a home for every single number in the universe, stretching from negative infinity to positive infinity?

The immediate challenge was architectural. You cannot simply build a static database or a simple list to hold infinity. Furthermore, treating numbers just as raw data is boring. There are numbers so incomprehensibly large that visualizing them in standard form would require more atoms than exist in the observable universe. How do you fit them on a single website?

The solution was a shift in perspective. page456 treats numbers not as static database entries, but as procedurally generated entities. If a number exists in the database, its curated history is served. If it doesn't, the system dynamically calculates its mathematical passport - such as its parity and binary representation - on the fly. It generates a landing page the exact moment someone searches for it, creating a space ready to be populated.

I realized early on that this platform had to be the exact intersection where rigorous mathematics collides with human internet culture. A number is rarely just a mathematical value. The number 404 is the universal feeling of digital frustration. 51 carries the weight of extraterrestrial conspiracies. page456 is built to be a digital museum for these cultural artifacts. My vision is to eventually give these legendary numbers bespoke, completely unique UI designs that reflect their specific meaning in our culture.

However, I absolutely do not want this to become another dry, strictly moderated encyclopedia like Wikipedia. page456 is designed as a creative, community-driven space. If you think about it, the platform is essentially an infinite, ever-expanding wall of posters. When a user types a random, obscure integer into the search bar and lands on a freshly generated page, I want them to feel like they just found an empty spot on that wall. It is an open invitation to pin the very first story, start a local meme, or even establish a digital cult around that specific number.

This creative philosophy extends to the extreme limits of computation. I have plans to implement ways to visualize those hyper-large numbers that defy standard physics and logic. Tackling these colossal integers isn't just about the math; it is a creative UI/UX and engineering challenge. It is about finding a way to visually represent the impossible on a screen, simply because it is a fascinating boundary to push. page456 is not just an encyclopedia; it is a blank canvas for human creativity across an infinite scale.

---

## The Name Behind the Number

This project wasn't always called page456. It started life as *Numerogram* - a
functional, descriptive name that did its job but said nothing about the
project itself. As the platform's identity crystallized, I wanted a name that
wasn't just *about* numbers, but was itself a small puzzle to be solved -
in the same spirit as the numbers this project catalogs.

The name is built from two layers.

**page** is the literal unit of the platform: every number gets its own page,
the same way every user gets a profile on a social network. It's a deliberate
choice over "encyclopedia" or "database" - this project is a social space,
not a static reference work.

**456** is a hidden encoding. Take the root of the word *Number* - **N-U-M** - and
convert each letter into International Morse code. Instead of counting dots
and dashes, sum their signal duration, where a dot equals 1 unit and a dash
equals 3:

```txt
N = − · → 3 + 1 = 4
U = · · − → 1 + 1 + 3 = 5
M = − − → 3 + 3 = 6
```

`NUM` becomes **456** - and the three digits land in ascending order purely
as a side effect of the letters themselves, not by design. Unlike naming
schemes based on shifting external systems (chemical elements, alphabet
positions), Morse code is a fixed, universal standard - the cipher will
never need to be reinvented.

So **page456** reads two ways at once: a plain, ordinary name for a web
page - and, once you know the key, a small encoded tribute to the very
thing this project is about.

---

## Architectural Highlights & Features

- **Infinite Routing (Lazy Creation):** Dynamic URL parsing dynamically calculates mathematical properties for any valid integer on the fly (`/en/100500`), eliminating the need to pre-seed infinite rows in the database.
- **Zero-UI Moderation System:** Integrated server actions connected to Telegram API. Community submissions bypass traditional admin dashboards, sending moderation requests directly to Telegram with interactive webhooks for approval/rejection.
- **Robust i18n & Fallback Engine:** Full multi-language support (Azerbaijani, English, Russian). Implements dictionary merging that gracefully falls back to default translations (English) if localized strings or database fields are missing.
- **Edge-Ready Performance:** Built on Next.js 15 App Router with hybrid static and dynamic rendering strategies for minimal latency.

---

## Tech Stack

- **Framework:** Next.js 16.3.1 (App Router, Server Actions, Route Handlers)
- **Core:** React 19.2.8
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4 (PostCSS)
- **Database & BaaS:** Supabase (PostgreSQL, JSONB localization)
- **Internationalization:** `next-intl` (4.13.6) with custom fallback resolution
- **Integrations:** Telegram Bot API (for headless moderation)

---

## Roadmap

- [ ] **Number Adoption & User Authentication:** Allow users to "adopt" unclaimed numbers and establish numerical communities.
- [ ] **Hyper-Large Number Rendering Engine:** Custom visualization algorithm designed to represent colossal numbers (e.g., Graham's Number scale) that exceed standard computational bounds.
- [ ] **Community Badges & Milestones:** Gamification system for top contributors and mathematical discoverers.

---

## License & Usage

**page456** is source-available under the [PolyForm Noncommercial
License 1.0.0](./LICENSE), with additional restrictions.

**You can:**

- Read, study, and learn from the source code
- Use it for personal, educational, and non-commercial purposes
- Submit Pull Requests - contributions are welcome

**You can't:**

- Deploy or host a public or private copy of this project as a
  service accessible to others
- Use the name "page456", its logo, or visual identity for any
  other deployment, fork, or product
- Use this project (or any part of it) commercially

See the [LICENSE](./LICENSE) file for the full legal text.
