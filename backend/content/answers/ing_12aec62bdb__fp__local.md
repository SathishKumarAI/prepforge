---
qid: ing_12aec62bdb__fp__local
question: How Airbnb Optimised Critical Rendering Path?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 453
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:45:24-05:00'
sources: []
---

Airbnb’s rendering puzzle is the same as any SPA that must show a “book‑now” button before the user can feel confident: **minimise the time between the first paint and the point where interactivity becomes possible**.  
The *critical rendering path* (CRP) is the ordered set of steps the browser takes to turn HTML, CSS, JavaScript, fonts, images, etc., into pixels on‑screen. The goal is to reduce the number of blocking resources and the size of each one.

1. **Decompose the page** – split the DOM into “above‑the‑fold” (ATF) and “below‑the‑fold” (BTF). Only ATF resources are fetched first; BTF assets are lazy‑loaded with `IntersectionObserver`.  
2. **Bundle strategically** – use a *critical CSS* in‑head block, then defer non‑critical stylesheets with `rel="preload"` and `as="style"`. JavaScript is split into “core” (needed for the ATF UI) and “deferred” (analytics, ads). Core scripts are loaded as `async` or `defer`; deferred ones are appended after the first paint.  
3. **Prioritise font loading** – use `font-display: swap` to avoid invisible text; pre‑fetch the most used glyphs.  
4. **Leverage HTTP/2 multiplexing** – bundle ATF assets into a single request so that the server can push them in parallel, reducing round‑trips.

The non‑obvious insight? **Treat interactivity as an *information bottleneck***: the user’s attention is a limited resource. By quantifying the entropy of the visible state (how many bits of information are required for the user to act) and ensuring that the CRP delivers those bits before any other data, Airbnb guarantees that the “critical path” is not just fast in milliseconds but *information‑efficient*. This shifts optimization from raw speed to *effective* responsiveness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
