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
- `privacy-policy.html` is the English/Arabic app privacy policy, dated 24 October 2026. It uses shared `styles.css` and scoped `privacy.css`, without JavaScript. Keep its filename and the homepage footer link unchanged.
- Review [PRIVACY-READINESS.md](PRIVACY-READINESS.md) before store submission. The older policy in the mobile-app repository is not automatically synchronized by this project.
- The main page uses five user-supplied Android screenshots as responsive WebP variants in `assets/screens/*-private*-{480,840}.webp`: home, reports, inventory search, shifts, and daily sales. Each was edited with the built-in image editing tool to strongly blur only the pharmacy-name header. Never copy the unredacted originals into this public folder. Values are captured screenshot data, not live data.
- Edit prompt used per screenshot: apply a strong privacy Gaussian blur to the entire pharmacy-name line in the top header; preserve the logo, sync timestamp, all other app content and full portrait composition. The source screenshots were supplied in chat on 2026-10-23. The shifts image uses the later replacement screenshot (10:06), with its full heading and the highest-cash tab selected.
- Unused App Store images and superseded PNG screenshots have been removed. The original attachments and generated edit outputs remain outside this repository.
- Brand logo and Cairo fonts are copied from the mobile app; the font license is included in `assets/fonts/OFL.txt`.
- Visual reference: https://carepulse.framer.website/ (light palette, soft green/blue gradients, centered headline, framed product showcase, restrained cards).
- No trackers, public signup, login, or contact form. Contact links open WhatsApp; they do not send automatically.
- Publication and domain configuration are separate from this local implementation.

## Shortage report section

The `#shortages` section explains coverage-based quantities, the best recorded discount from historical purchase invoices, per-supplier baskets, PDF/Excel sharing through the system share sheet, and tracking sent/overdue/received quantities. Sharing is user-initiated; the website does not send orders. The three `shortage-*-private-{480,840}.webp` screenshot pairs come from the user attachments (10:15–10:17). The built-in image editing tool applies narrow privacy blurs to the pharmacy header, a personal name in an overdue notice, and the draft creator username; supplier company names stay visible. Prompt: blur only the specified personal-name region, preserve all remaining screenshot content and full portrait framing.
## Scroll entrance motion

Upcoming section headings, feature cards and app screenshots fade in and rise 24px once when entering the viewport. Siblings stagger by up to 160ms. The effect uses native IntersectionObserver and CSS, with no dependencies. Initial visible content, reduced-motion preferences, unsupported browsers, JavaScript-disabled viewing, keyboard focus and printing keep content accessible. Timing and distance are in `.scroll-reveal` in `styles.css`; targets and stagger are in `initScrollReveal()` in `script.js`.

## Screenshot loading

The page serves eight screenshot sets as 480px/840px WebP variants (`quality=88`, Lanczos resizing) through `srcset` and `sizes`. At 840px the total screenshot payload is 551,954 bytes instead of 9,874,306 bytes; 480px variants total 279,880 bytes. Tiny inline WebP previews total 1,694 bytes before base64 encoding and paint immediately without another request. Each wrapper reserves the correct aspect ratio. Hero screenshots load eagerly, with high priority only on the main screenshot; later screenshots use native lazy loading and asynchronous decoding. JavaScript fades each full image over its preview after loading/decoding, separately from scroll motion; failures retain the preview and show a short error label. Without JavaScript the full images display normally, and reduced-motion preferences disable the fades.
