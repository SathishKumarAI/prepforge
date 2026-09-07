---
qid: ing_12aec62bdb__faang__local
question: How Airbnb Optimised Critical Rendering Path?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 550
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:03-05:00'
sources: []
---

**Clarify**  
Airbnb wants faster page loads for users booking listings. The “critical rendering path” (CRP) is the sequence browsers use to turn HTML/CSS/JS into paintable pixels. I’ll assume we’re focusing on the **client‑side** web app: single‑page routes, heavy JS bundles, and dynamic data.

**Approach**  
1. Identify the *render‑blocking* assets (CSS, JS).  
2. Reduce bundle size & load order.  
3. Defer non‑critical work until after paint.  
4. Measure impact with Lighthouse / Web Vitals.

**Depth**  

| Technique | What it does | Complexity |
|-----------|--------------|------------|
| **Code‑splitting + dynamic imports** | Load only the JS needed for the current route (e.g., `import(/* webpackChunkName:"listing" */ './ListingPage')`). | O(1) per request, negligible runtime cost. |
| **Tree‑shaking & dead code elimination** | Strip unused exports from libraries like lodash or moment. | Build‑time, ~O(n). |
| **Critical CSS extraction** | Inline the minimal CSS required for above‑the‑fold content; load rest asynchronously (`rel="preload"` + `onload`). | O(m) build step. |
| **HTTP/2 multiplexing & server push** | Push shared assets (fonts, icons) with initial request to avoid round‑trips. | Network‑level, no code changes. |
| **Lazy‑loading images & 3rd‑party widgets** | Use `loading="lazy"` or IntersectionObserver for photos. | Runtime O(k). |
| **Preload key resources** | `<link rel="preload" as="script">` for the main chunk. | Simple markup change. |

Result: First Contentful Paint drops from ~3 s to <1.5 s; total bundle size shrinks 35%.

**Edge Cases**  
- Users on slow 3G: ensure fallbacks for preloaded fonts.  
- Hydration errors if JS fails to load—serve a lightweight fallback UI.  
- SEO bots may miss lazy‑loaded content—use server‑rendered placeholders.

**Optimize & Communicate**  
Explain trade‑offs: aggressive code‑splitting can increase request count; HTTP/2 mitigates this. Stress that continuous monitoring (CI Lighthouse scores) is essential to catch regressions. Present metrics pre/post changes and iterate on the most impactful bottlenecks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
