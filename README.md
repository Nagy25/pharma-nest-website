# Pharma Nest landing page

Standalone Arabic RTL marketing page, built with HTML, CSS, and JavaScript. No build, dependencies, API, or credentials required.

## Preview

From this directory, run:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Open http://127.0.0.1:8080. You can also open `index.html` directly.

## Edit / publish

- Copy: `index.html`; styling and responsive layouts: `styles.css`.
- WhatsApp number, trial message, and store links: `SITE_CONFIG` in `script.js`.
- Upload the contents of this directory to any static host. No backend needed.
- `privacy-policy.html` is copied from the existing project's policy; review both copies together if the policy changes.
- The page uses five user-supplied Android screenshots in `assets/screens/*-private*.png`: home, reports, inventory search, shifts, and daily sales. Each was edited with the built-in image editing tool to strongly blur only the pharmacy-name header. Never copy the unredacted originals into this public folder. Values are captured screenshot data, not live data.
- Edit prompt used per screenshot: apply a strong privacy Gaussian blur to the entire pharmacy-name line in the top header; preserve the logo, sync timestamp, all other app content and full portrait composition. The source screenshots were supplied in chat on 2026-10-23. The shifts image uses the later replacement screenshot (10:06), with its full heading and the highest-cash tab selected.
- Old App Store source images are not referenced by the page.
- Brand logo and Cairo fonts are copied from the mobile app; the font license is included in `assets/fonts/OFL.txt`.
- Visual reference: https://carepulse.framer.website/ (light palette, soft green/blue gradients, centered headline, framed product showcase, restrained cards).
- No trackers, public signup, login, or contact form. Contact links open WhatsApp; they do not send automatically.
- Publication and domain configuration are separate from this local implementation.

## Shortage report section

The `#shortages` section explains coverage-based quantities, the best recorded discount from historical purchase invoices, per-supplier baskets, PDF/Excel sharing through the system share sheet, and tracking sent/overdue/received quantities. Sharing is user-initiated; the website does not send orders. The three `shortage-*-private.png` screens come from the user attachments (10:15–10:17). The built-in image editing tool applies narrow privacy blurs to the pharmacy header, a personal name in an overdue notice, and the draft creator username; supplier company names stay visible. Prompt: blur only the specified personal-name region, preserve all remaining screenshot content and full portrait framing.
## Scroll entrance motion

Upcoming section headings, feature cards and app screenshots fade in and rise 24px once when entering the viewport. Siblings stagger by up to 160ms. The effect uses native IntersectionObserver and CSS, with no dependencies. Initial visible content, reduced-motion preferences, unsupported browsers, JavaScript-disabled viewing, keyboard focus and printing keep content accessible. Timing and distance are in `.scroll-reveal` in `styles.css`; targets and stagger are in `initScrollReveal()` in `script.js`.
