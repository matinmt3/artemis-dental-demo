# Local validation — 2026-10-15

- Environment: Windows, Node.js 26.4.0; original installed React 19.3.0 and Vite 8.3.4 dependencies were temporarily linked into this clean copy.
- The lockfile was refreshed offline after pinning these existing versions.
- `npm run build`: passed.
- A real Chrome check confirmed two editable payment rows sum 1,250,000 + 750,000 to 2,000,000, unavailable save is disabled, the page returns HTTP 200, no page JavaScript errors occur and no horizontal overflow appears at 390px. The README preview uses an empty form.
- This prototype has no server/database integration tests. Save/search/edit persistence is intentionally not claimed.
- Dependency links and generated build output are excluded from the prepared source repository. A fresh dependency download and a hosted GitHub Actions run were not part of this local check.
