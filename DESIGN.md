# DESIGN.md — Areej Al-Majnuni Law Firm Design System

## 1. Design Direction: Saudi Judicial Heritage & Modern Precision
A tailored, bespoke visual language reflecting judicial solemnity, Saudi legal majesty, and contemporary clarity.

### Banned Anti-Patterns (Per Impeccable & Anti-Slop Discipline)
- ❌ No default Inter / Roboto / generic fonts.
- ❌ No garish purple-to-blue or neon gradients.
- ❌ No nested cards within cards.
- ❌ No static pill badge clutter or badge sandwiches.
- ❌ No code-style prefix comments (`// 01_SERVICES`, `>_ SYSTEM`).
- ❌ No purely decorative pulsing dots or gimmicks.
- ❌ No pure black (`#000000`) or harsh uncalibrated white (`#ffffff`).

---

## 2. Color System (60-30-10 & Tinted Neutrals)
Perceptually harmonious palette inspired by warm Makkah limestone, legal parchment, and royal Saudi bronze.

### Light Theme:
- **Canvas (60%)**: `#FAF8F5` (Warm Alabaster / Fine Travertine)
- **Surfaces & Cards (30%)**: `#FFFFFF` / `#F4EFE6` (Subtle Warm Sandstone)
- **Primary Text**: `#1A1918` (Deep Umber Ink)
- **Secondary Text**: `#5C564E` (Warm Charcoal)
- **Hairline Dividers**: `rgba(154, 120, 78, 0.16)` / `#E7E1D4`
- **Accent (10%)**: `#9A784E` (Royal Saudi Bronze / Gold)
- **Interactive Hover**: `#84653D`
- **Verification Green**: `#15803D` (Saudi Ministry & WhatsApp Accent)

### Dark Theme:
- **Canvas (60%)**: `#131211` (Obsidian Marble)
- **Surfaces & Cards (30%)**: `#1B1917` (Deep Basalt)
- **Primary Text**: `#F6F4F0` (Soft Parchment)
- **Secondary Text**: `#A8A196` (Muted Warm Stone)
- **Hairline Dividers**: `rgba(194, 162, 115, 0.14)` / `#2A2724`
- **Accent (10%)**: `#C2A273` (Luminous Polished Gold)
- **Interactive Hover**: `#D6B98D`

---

## 3. Typography Architecture
- **Primary Arabic Display & Dignified Headings**: `Amiri` (`font-serif-legal`) — traditional Arabic calligraphic majesty and legal solemnity.
- **Arabic Body & UI Elements**: `Cairo` (`font-sans-ar`) — balanced, modern Arabic legibility with excellent optical geometry.
- **Secondary Latin Display**: `Cinzel` (`font-cinzel`) & `Plus Jakarta Sans` for English terminology, license credentials, and branding.
- **Data & Numbers**: `tabular-nums` for all stats, license numbers (`42691`), ratings (`4.7 / 5.0`), phone numbers (`+966548989025`), and working shift times.
- **Typesetting Rules**:
  - `text-wrap: balance` on all primary display headlines to avoid orphan words.
  - Strict measure constraints (`max-w-2xl` to `max-w-3xl`) for continuous body prose.
  - Generous line heights (`leading-relaxed` / `leading-loose`) for Arabic readability.

---

## 4. Layout & Spatial Rhythm
- **Top Bar Contract**: Clean 3-zone header: [Single-line brand wordmark with emblem] — [4-5 single-line navigation links] — [Quick consultation CTA + Theme/Lang toggles].
- **Breathing Room**: Spacious padding between sections (`py-16` to `py-24`) without artificial clutter.
- **Card Discipline**: Single-elevation cards with subtle 1px hairline borders and soft ambient blur. Content structured through typographic hierarchy and whitespace rather than sub-boxes.
- **Focal Dominance**: Each section features one dominant visual anchor (e.g. Hero value proposition, Diwan Al-Mazalim judicial spotlight, Interactive live office clock).

---

## 5. Interaction & Motion Latency Budgets
- Button press & hover transitions settle in $\le 180\text{ms}$ (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Touch targets strictly $\ge 44\text{px}$ on mobile for effortless phone & WhatsApp access.
- All interactive controls have visible `focus-visible:ring-2` focus rings for accessibility.
