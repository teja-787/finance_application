# PocketPal

PocketPal is a polished, privacy-first personal finance Progressive Web App built with vanilla HTML, CSS, and JavaScript. It runs entirely in the browser: no account, server, build process, or tracking required.

## Features

- Income and expense tracking with editing, deletion, search, category/month/type filters, and period views
- Premium mobile-first dashboard: balance, budget, safe daily spending, savings, and recent activity
- Savings goals with progress tracking, streaks, and achievement badges
- Chart.js insights: category breakdown, income vs expenses, and seven-day spending trend
- Dark mode, currency selection (INR/USD/EUR/GBP), daily/monthly budget settings, and notification preference
- CSV transaction exports and JSON backup imports
- LocalStorage persistence and a service worker for offline caching after first visit
- Installable PWA manifest with a custom vector app icon

## Screenshots

Open `index.html` in a browser to view the responsive dashboard, activity, insights, goals, and profile screens. The UI is intentionally designed to adapt from phone to desktop without separate builds.

## Run locally

No installation is necessary. Double-click `index.html`, or serve this folder with any static file server for the complete PWA experience. Chart.js and Inter load from their CDN; the app itself remains fully usable with locally stored data.

> Service workers require `https` or `localhost`, so offline installability is available when hosted (including GitHub Pages), rather than from a `file://` URL.

## Deploy to GitHub Pages

1. Push these files to a GitHub repository.
2. In **Settings → Pages**, select **Deploy from a branch**.
3. Choose your deployment branch and the repository root, then save.
4. Open the generated GitHub Pages URL and use your browser’s install option to add PocketPal to your device.

## Folder structure

```text
PocketPal/
├── index.html
├── style.css
├── script.js
├── manifest.json
├── service-worker.js
└── assets/
    └── icons/
        └── icon.svg
```

## Data and privacy

All financial data is stored only in your browser’s LocalStorage. Export a CSV of transactions from Profile, or import a JSON backup created from LocalStorage-compatible PocketPal data. Clearing browser site data will erase local records.

## License

MIT License. Use, adapt, and ship it freely.
