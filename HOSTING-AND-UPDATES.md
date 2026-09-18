# SEYIK Website – Hosting, Pricing & Client Updates

This site is **production-ready**: multi-page, SEO files, security headers, contact form, donation page, team profiles, and a simple admin panel so the client can write articles and upload photos/videos **without coding**.

---

## Recommended host: **Netlify** (best fit)

| Why Netlify | Detail |
|-------------|--------|
| Client updates | Built-in login at `/admin` (Decap CMS) – write articles, upload images/videos |
| Cost for SEYIK | **Free** for a typical CBO site |
| Custom domain | Free HTTPS (e.g. `seyik.org`) |
| Forms | Contact form works with no extra service |
| Speed & security | Global CDN + HTTPS + security headers already configured |
| Workflow | GitHub → automatic rebuild when content is saved |

### Netlify prices (2026)

| Plan | Price | Enough for SEYIK? |
|------|-------|-------------------|
| **Free** | **$0 / month** | Yes – start here. Custom domain, SSL, forms, CMS, CDN |
| Personal | $9 / month | Only if you outgrow free credits (unlikely for this site) |
| Pro | $20 / month | Teams / higher traffic – not needed at launch |

**Domain name** (separate): ~$10–15 / year for `.org` or `.ug` (Namecheap, Cloudflare Registrar, or local Uganda registrars).

**Expected monthly cost for SEYIK at launch: $0 host + ~$1 domain/month ≈ $12–15 per year total.**

---

## Other good options

| Host | Price | Client can update? | Notes |
|------|-------|--------------------|-------|
| **Cloudflare Pages** | Free (unlimited static bandwidth) | Possible with Decap, but setup is harder than Netlify | Excellent if traffic grows a lot |
| **Vercel** | Free hobby tier | Similar static hosting | Strong for developers; CMS slightly less smooth |
| **Shared hosting (cPanel) in Uganda** | ~$3–15 / month | Only if you install WordPress or use FTP | Easier local support; client needs WordPress training |
| **WordPress.com / managed WP** | $0–$25+ / month | Yes (full CMS) | Heavier site; different design rebuild |

**Recommendation:** Stay on **Netlify Free** unless the client specifically wants WordPress and is ready for a redesign.

---

## How the client keeps updating the site

1. Open: `https://seyik.org/admin/` (or your Netlify URL + `/admin/`)
2. Log in with the invited email (Netlify Identity)
3. They can:
   - **Write & publish articles** (with photos)
   - **Upload images and short videos**
   - Edit some homepage / about text (if enabled in CMS)
4. Save → site rebuilds automatically in 1–2 minutes

No coding. No FTP. No developer needed for normal content updates.

---

## One-time setup (you or a technical helper)

### A. GitHub
1. Create a free GitHub account
2. Create repository: `seyik-website`
3. Upload **all** project files (HTML, CSS, `admin/`, `content/`, `images/`, `netlify.toml`, etc.)

### B. Netlify
1. Sign up at [netlify.com](https://www.netlify.com)
2. **Add new site** → Import from GitHub → select `seyik-website`
3. Build settings (already in `netlify.toml`):
   - Build command: `npx @11ty/eleventy`
   - Publish directory: `_site`
4. Deploy

### C. Identity + Git Gateway (required for client login)
1. Site settings → **Identity** → Enable
2. Registration: **Invite only**
3. Services → **Git Gateway** → Enable
4. Identity → **Invite user** → client’s email

### D. Custom domain
1. Buy `seyik.org` (or preferred name)
2. Netlify → Domain settings → Add custom domain → follow DNS instructions
3. HTTPS is automatic

### E. Contact form notifications
1. Netlify → Forms → after first test submit, form appears
2. Set notification email to `info.seyik@24.org`

---

## Production checklist (already done on this package)

- [x] Multi-page professional layout (About, Programs, Team, Impact, Climate, Get Involved, Donate, Contact, Articles)
- [x] Brand colors & logo
- [x] Mobile responsive navigation
- [x] SEO: titles, descriptions, Open Graph, sitemap, robots.txt
- [x] 404 page
- [x] Security headers (netlify.toml)
- [x] Contact form (Netlify Forms + spam honeypot)
- [x] Donate page (Mobile Money + bank instructions)
- [x] Team profiles (Muya James Jemo + Lemu Eric Sam)
- [x] CMS admin for articles & media uploads
- [x] Structured data (Organisation schema)

---

## What “production-ready” means here

The site is ready to go live on a real domain. Content is aligned to the SEYIK profile. The client can publish updates through `/admin` after the one-time Netlify Identity setup. Design changes (new pages, layout) still need a developer; day-to-day articles and photos do not.

---

## Next steps for you

1. Confirm domain name preference (`seyik.org` vs something else)
2. Create GitHub repo + connect Netlify (or ask us to walk through it)
3. Invite the client’s email to Identity
4. Optional: add Centenary full account number on the Donate page when confirmed
5. Optional later: Flutterwave/Pesapal payment link on Donate

Questions or stuck on a step — send a screenshot of the Netlify/GitHub screen and we’ll guide you.
