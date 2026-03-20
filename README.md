# HimTrek Website

Built from the HimTrek Figma design — 5 sections pixel-matched to screenshots.

---

## Sections
| # | Section | Background |
|---|---------|-----------|
| 1 | Hero Banner | Light / mountain photo |
| 2 | About – Reo Purgyil | Warm peach `#f5c5a8` |
| 3 | Our Services | Near-black `#0e0e0e` + topo lines |
| 4 | Guide & Trails | Dark maroon `#140810` |
| 5 | Footer | Deep wine `#580826` |

---

## File Structure

```
himtreks/
├── index.html        ← All HTML
├── css/
│   └── style.css     ← All styles + CSS variables
├── js/
│   └── main.js       ← Loader, scroll, nav, animations
└── README.md
```

---

## Step-by-Step: From Scratch in VS Code + GitHub

### STEP 1 — Install tools (once only)

| Tool | Link |
|------|------|
| VS Code | https://code.visualstudio.com |
| Git | https://git-scm.com |
| GitHub account | https://github.com |

Inside VS Code press `Ctrl+Shift+X` → search **Live Server** → Install.

---

### STEP 2 — Create folder

Open terminal (`Ctrl+`` in VS Code) and type:

```bash
mkdir himtreks
cd himtreks
mkdir css js
```

---

### STEP 3 — Paste all files

| File | Destination |
|------|------------|
| `index.html` | `himtreks/` |
| `style.css` | `himtreks/css/` |
| `main.js` | `himtreks/js/` |

---

### STEP 4 — Preview in browser

Right-click `index.html` → **Open with Live Server**
→ Opens at `http://127.0.0.1:5500`

Any save → browser auto-reloads.

---

### STEP 5 — Set up Git

```bash
git init
git add .
git commit -m "first commit: HimTrek website"
```

---

### STEP 6 — Push to GitHub

1. Go to https://github.com/new
2. Name the repo `himtreks`, leave it empty
3. Copy the commands GitHub gives you:

```bash
git remote add origin https://github.com/YOUR_USERNAME/himtreks.git
git branch -M main
git push -u origin main
```

---

### STEP 7 — Deploy FREE on GitHub Pages

1. GitHub → your repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main / root** → Save
4. ~2 min later, live at: `https://YOUR_USERNAME.github.io/himtreks/`

---

## Making Future Changes

### Change colors (all in one place)
Open `css/style.css` — top section `:root {}`:

```css
:root {
  --peach:       #f5c4a7;   /* peach accents & separators  */
  --about-bg:    #f5c5a8;   /* about section background    */
  --services-bg: #0e0e0e;   /* services dark background    */
  --guide-bg:    #140810;   /* guide dark background       */
  --footer-bg:   #580826;   /* footer wine/burgundy        */
  --red-btn:     #c0392b;   /* Book Now button border      */
}
```

Change one line = changes everywhere.

### Change loader duration
Open `js/main.js` line ~12:

```js
var DURATION = 3000; // 3000 = 3s, 2000 = 2s, 5000 = 5s
```

### Add scroll animations
Add class `reveal` to any HTML element:

```html
<div class="reveal">This fades in when scrolled to</div>
```

For staggered children:

```html
<div class="reveal-stagger">
  <div>Animates first</div>
  <div>Animates second</div>
  <div>Animates third</div>
</div>
```

### Save changes to GitHub
```bash
git add .
git commit -m "describe your change"
git push
```

---

## Credits
- Design: HimTrek / Lakshya Thakur
- Photos: Unsplash (free licence)
- Font: Roboto – Google Fonts (free)