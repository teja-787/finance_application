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
