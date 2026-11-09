# Pavan Kumar — 3D Developer Portfolio

A responsive, dependency-free HTML/CSS/JavaScript portfolio. All graphics, fonts, and scripts work locally; there are no CDN dependencies, API keys, paid services, or installation requirements beyond a local server.

## Start in VS Code (Windows)

1. Right-click `Pavan_Portfolio.zip` → Extract All.
2. In VS Code choose File → Open Folder. Open the inner `pavan-portfolio` folder containing `index.html`, `package.json`, and `server.js`.
3. Open Terminal → New Terminal (Ctrl + backtick).
4. Choose either method below. Run commands one line at a time.

### Option A — Python (recommended if Python is already installed)

```powershell
py --version
py -m http.server 5500 --bind 127.0.0.1
```

Open http://localhost:5500 in your browser. If `py` is not recognized, try:

```powershell
python --version
python -m http.server 5500 --bind 127.0.0.1
```

On macOS/Linux, use `python3 -m http.server 5500 --bind 127.0.0.1`.

### Option B — Node.js

With Node.js installed:

```powershell
node --version
node server.js
```

Open http://localhost:3000. Alternatively, use `npm run dev`. **No `npm install` is needed.** There are no package dependencies.

If PowerShell blocks npm.ps1, use `node server.js` or `npm.cmd run dev`; no execution-policy change is needed.

If port 3000 is busy:

```powershell
node server.js --port 3001
```

Then open http://localhost:3001.

### Stop and reopen

Press Ctrl+C in the terminal to stop the server. When reopening the project, open the same folder and run the same server command. No virtual environment, pip packages, Django setup, database migrations, or build step is needed.

If starting in the parent folder instead, first run `cd pavan-portfolio`. Do not run this if you are already inside it. `dir` should show index.html before starting.

## Included features

- Interactive 3D particle torus: genuine XYZ geometry with rotation and perspective projection onto Canvas 2D.
- Pointer interaction, orbital satellite, and floating CSS 3D code panel.
- Dark/light themes; theme preference saved locally when browser storage is available.
- Pause/play animation; OS reduced-motion preference respected.
- Animation pauses when the hero is offscreen or the tab is hidden; capped pixel density and approximately 30 fps rendering.
- Responsive navigation, active section links, and reading-progress bar.
- ShopCart and CareerForge project cards with keyboard-accessible detail dialogs.
- GitHub repository links, email links, and copy-email control with failure feedback.
- Printable résumé page: open Résumé, click Print / Save as PDF, select Save as PDF in the print dialog.
- Semantic page sections, skip link, visible focus indicators, metadata, and favicon.

## Edit your content

| File | What to edit |
| --- | --- |
| index.html | Name, introduction, project card descriptions, skills, education, contact details |
| script.js | Project dialog descriptions, feature lists, repository links, copy-email address |
| style.css | Colors, sizes, spacing, responsive layouts, animation styles |
| resume.html | Résumé content and print layout |
| assets/favicon.svg | Browser-tab icon |
| server.js | Optional local development server |

### Content notes to review before publishing

The included résumé is a new concise portfolio résumé based on the details provided in the conversation, not a copy of an existing uploaded résumé. Review it before sharing. GitHub URLs use the previously supplied username `karri44` and project names; repository availability was not verified in this session.

Project visuals are explicitly labeled CONCEPT PREVIEW. They are custom illustrations, not screenshots of your applications. Replace them with actual project screenshots when ready. No live-demo URLs, LinkedIn URL, professional experience, skill percentages, testimonials, or fabricated metrics have been added.

To add a LinkedIn link, add your actual profile URL to the footer in index.html. To use an existing PDF résumé, place it at assets/resume.pdf and change the header résumé link to `href="assets/resume.pdf"` (optionally add the download attribute).

Email links launch the visitor's email application; the website does not send email itself. The copy button works on localhost and HTTPS with clipboard permission; it provides a visible fallback if copying is unavailable.

## Publish later

This is a static website. Upload index.html, style.css, script.js, resume.html, and the assets folder to a static hosting service. No build command is needed. server.js is only a local development helper. Do not upload private files or credentials. Test all project links and review your contact information before making the site public.

## Checks performed

JavaScript syntax checks and local asset/anchor checks. Archive integrity checked. Browser visual and interaction QA could not be completed because the preview browser was blocked by the execution environment. Before publishing, test desktop/mobile layout, theme toggle, pause/play, navigation, dialogs, email copying, and résumé printing in your browser.
