# Laundro-Hub website

Static, fully responsive website for **Laundro-Hub, Bloemfontein**: plain HTML, CSS and a little JavaScript.
There is no framework and no build step, so any editor or AI IDE (such as Antigravity) can open it as-is.

## Run it

- Open `index.html` in a browser, **or**
- serve the folder locally, e.g. `npx serve .` or `python3 -m http.server 8000`, then visit http://localhost:8000

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `services.html` | Services overview + pricing (`#pricing`) |
| `washing-drying.html` | Washing & Drying |
| `ironing.html` | Ironing |
| `bedding-linen.html` | Bedding & Linen |
| `collection-delivery.html` | Drop-Off & Collection (Laundro-Hub Express) |
| `monthly-packages.html` | Monthly Packages |
| `about.html` | About us |
| `contact.html` | Contact + booking/quote form |

## Structure

```
assets/
  css/styles.css   – all styles; design tokens at the top (:root)
  js/main.js       – mobile menu, contact-form thank-you state, footer year
  img/             – photos + logo (web-optimised JPG/PNG)
  icons/           – the custom Laundro-Hub icon set as standalone SVGs
```

- **Responsive breakpoints:** desktop by default, then `max-width: 1100px` (tablet) and `max-width: 760px` (phone).
  Tested at 390px, 768px and 1440px wide, with no sideways scrolling on any page.
- **Brand colours:** purple `#4A1677`, deep purple `#2B0F48`, teal `#0B6E71`, mint `#8FE0DC`, lavender `#F1EBF8`.
- **Fonts:** Bricolage Grotesque (headings) and Figtree (body), both from Google Fonts.
- **Icons:** inline SVG in each page, using `currentColor`, so they take the colour of the surrounding text.
  The same icons are in `assets/icons/`.

## Before going live: things to fill in

Search the project for `[` to find every placeholder:

- `[R —]` – prices (price table, service pages, monthly packages) and `[— kg]` package allowances
- `[Opening hours]` / `[— to —]` – store hours (home, contact, collection page)
- `[Add suburb]` – areas you collect from (contact + collection page)
- `[Add a few lines about the founders…]` – About page
- **Team photo** – About page has an image slot waiting for a real photo of the team
- **Map** – Google Maps embed of The Towers Shopping Centre, Langenhovenpark
- **Contact form** – Connected to Next.js server actions.

## Contact details used

WhatsApp / phone **064 830 8785** (`https://wa.me/27648308785`) · **info@laundro-hub.co.za** ·
The Towers Shopping Centre, Langenhovenpark, Bloemfontein (opposite the car wash, old Panarottis location).
