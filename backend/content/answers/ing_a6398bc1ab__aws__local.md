---
qid: ing_a6398bc1ab__aws__local
question: 'Explain: HTML/CSS — Top 8 Standards Every Developer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 421
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:42:51-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional launch of an internal recommendation engine that rendered product cards in real time for our mobile web app. The front‑end team had been using ad‑hoc CSS, causing rendering delays and inconsistent UX across browsers.

**Action (Dive Deep + Ownership)**  
1. **Audit & Refactor** – I mapped every selector to a *CSS cascade* diagram, identified 12 redundant rules, and replaced them with **BEM** blocks, cutting the stylesheet size from **350 KB to 180 KB**.  
2. **Responsive Standards** – Implemented **Flexbox** + **Grid** for layout instead of floats; added `min-width`/`max-width` breakpoints using the *mobile‑first* media query pattern.  
3. **Accessibility & SEO** – Added semantic tags (`<header>`, `<nav>`, `<section>`), ARIA roles, and ensured **WCAG 2.1 AA** compliance; ran Lighthouse to raise score from **78 → 94**.  
4. **Performance** – Leveraged **critical‑CSS extraction** via Webpack and served it inline; deferred non‑critical styles with `rel="preload"`. Result: First Contentful Paint dropped from **2.8 s to 1.3 s** on a 4G connection.

**Result (Deliver Results)**  
The refactor reduced page weight by **48 %**, improved Lighthouse performance score by **16 pp**, and cut bounce rate for the recommendation section from **32 % → 18 %** in two weeks—directly boosting conversion by **3.5 %**.

**Learning** – I documented a “CSS Hygiene” playbook that now serves as onboarding material, ensuring future teams avoid regressions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
