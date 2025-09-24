# DevOps Overview (static demo)

This is a small static demo page about DevOps. It is intentionally minimal and requires no build tools or package installation.

Files
- `index.html` — Main HTML page (loads `styles.css` and `script.js`).
- `styles.css` — All styles extracted into this file.
- `script.js` — Small interactive pipeline simulation (moved from inline `<script>`).

Dependencies
- None. The page is pure HTML/CSS/JS and works by opening `index.html` in a browser.

How to open

- Open directly from File Explorer or PowerShell:

```powershell
start 'C:\Users\Gowtham Kumar\Desktop\project_structure\index.html'
```

- Start a simple local server with Python (recommended if you later add fetch/XHR or want `http://`):

```powershell
py -3 -m http.server 8000
# or
python -m http.server 8000
# then open http://localhost:8000
```

- Or with Node (if you prefer):

```powershell
npm install -g http-server
http-server . -p 8000
# open http://localhost:8000
```

Notes & next steps
- I moved the interactive script into `script.js`. The page will behave exactly the same.
- If you want, I can also:
  - Add `README.txt` instead of `README.md` (if you prefer plain text).
  - Add a `LICENSE` file.
  - Add a light/dark theme toggle or accessibility improvements.

