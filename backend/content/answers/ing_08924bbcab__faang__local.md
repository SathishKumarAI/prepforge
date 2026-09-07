---
qid: ing_08924bbcab__faang__local
question: 'Explain: First Contentful Paint (FCP) — Top 9 Website Performance Metrics
  You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 517
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:04:20-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *First Contentful Paint* (FCP) and why it’s one of the nine critical web‑performance metrics that can’t be ignored. Assume they want a concise, technical overview with context for optimization.

---

### 1️⃣ Clarify
- **What is FCP?**  
  The moment the browser renders any page content (text, image, or canvas). It signals to users that loading has begun.
- **Why nine metrics?**  
  Modern web performance uses a “core Web Vitals” set plus additional user‑experience indicators. FCP sits at the top because it’s the first perceptible cue.

### 2️⃣ Approach
1. Define FCP and its place in the rendering pipeline.  
2. Contrast with similar metrics (TTFB, LCP).  
3. Discuss measurement tools (Chrome DevTools, Lighthouse).  
4. Outline optimization tactics (resource prioritization, critical‑path CSS/JS).  

### 3️⃣ Depth
- **Technical detail:** FCP is measured from navigation start to the first pixel drawn on the screen. It’s affected by DNS lookup, TCP handshake, TLS negotiation, server response time, and the browser’s parsing/rendering of HTML/CSS/JS.
- **Impact:** A low FCP improves perceived speed; a high FCP often correlates with poor TTFB or heavy critical‑path resources.
- **Tools:** Chrome DevTools → Performance tab; Lighthouse → “First Contentful Paint” score.  
- **Optimization:** Inline critical CSS, defer non‑critical JS, use HTTP/2 multiplexing, reduce server latency.

### 4️⃣ Edge Cases
- **Single‑page apps (SPAs):** FCP can be delayed until the framework hydrates; lazy‑load initial view.  
- **Ad‑heavy sites:** Ads block rendering—use ad blockers or async loading.  
- **Mobile vs desktop:** Network conditions differ; test on both.

### 5️⃣ Optimize & Communicate
- **Improvement loop:** Measure → identify bottlenecks (e.g., large CSS bundles) → refactor → re‑measure.  
- **Narration tip:** Start with “FCP is the first user‑visible cue…” to frame its importance, then drill into causes and fixes.

**Word count: ~190**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
