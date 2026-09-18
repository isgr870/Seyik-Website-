# SEYIK Website – Client Content Manager (Decap CMS)

Your client can **write articles**, **upload photos**, and **upload videos** through a simple admin panel — without editing any code.

---

## How it works

1. Website is hosted on **Netlify** (free).
2. Client goes to: `https://your-site.netlify.app/admin/`
3. Logs in with email + password (Netlify Identity).
4. Creates/edits **Articles**, uploads **images & videos**, and saves.
5. Netlify automatically rebuilds and publishes the site.

---

## What the client can do

| Feature | How |
|---------|-----|
| Write articles | Admin → Articles → New Article |
| Upload photos | Use the image button when writing, or Media |
| Upload videos | Upload video files into the media library (keep under ~50MB for best results) |
| Edit homepage text | Admin → Page Content → Homepage Text |
| Edit About text | Admin → Page Content → About Page |

---

## Setup steps (one-time – for you or a developer)

### 1. Put the site on GitHub
- Create a free GitHub account (if needed)
- Create a new repository (e.g. `seyik-website`)
- Upload all the website files to the repository

### 2. Deploy on Netlify (free)
1. Go to [netlify.com](https://www.netlify.com) and sign up
2. Click **Add new site** → **Import an existing project**
3. Connect GitHub and select the `seyik-website` repo
4. Build settings:
   - **Build command:** `npx @11ty/eleventy`
   - **Publish directory:** `_site`
5. Click **Deploy**

### 3. Enable Identity (for client login)
1. In Netlify → **Site settings** → **Identity** → Enable Identity
2. Under **Registration** → choose **Invite only** (recommended)
3. Enable **Git Gateway** (Identity → Services → Git Gateway → Enable)
4. Invite your client: Identity → Invite users → enter their email

### 4. Client login
- Client opens: `https://YOUR-SITE.netlify.app/admin/`
- Clicks login and uses the invite email/password
- Starts writing articles and uploading media

---

## Local testing (optional)

On a computer with Node.js installed:

```bash
npm install
npx decap-server          # in one terminal (local CMS backend)
npm run dev               # in another terminal (preview site)
```

Then open:
- Site: http://localhost:8080
- Admin: http://localhost:8080/admin/

---

## File structure (important parts)

```
admin/                  ← CMS admin panel
  index.html
  config.yml            ← controls what client can edit
content/
  blog/                 ← articles live here (Markdown)
  pages/                ← editable page text (JSON)
images/uploads/         ← photos & videos uploaded by client
```

---

## Tips for the client

- **Images**: Prefer JPG or WebP, not huge files (under 2–3 MB is ideal)
- **Videos**: Short clips work best; for long videos consider YouTube/Vimeo and embed the link
- **Articles**: Write a clear title + short summary — these appear on the Articles page
- Always click **Publish** / **Save** after editing

---

## Need help?

If you get stuck on the Netlify or GitHub steps, share the error message or a screenshot and we can walk through it.
