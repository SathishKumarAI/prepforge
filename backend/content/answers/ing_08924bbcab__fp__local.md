---
qid: ing_08924bbcab__fp__local
question: 'Explain: First Contentful Paint (FCP) — Top 9 Website Performance Metrics
  You Cannot Ignore'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 450
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:55-05:00'
sources: []
---

### First Contentful Paint (FCP) – The “First Word” of a Page

**Fundamental problem:**  
A web page is a *sequential decision process*: the browser receives bytes over a network, parses them, executes scripts, and finally renders visual output. For users, the critical question is: *when can they first see something that tells them the page is loading?* FCP answers this by measuring the instant when **any** non‑empty pixel appears on screen.

**Why it must work this way:**  
- **User perception ≈ visual feedback latency**. Cognitive studies show that a delay beyond ~300 ms feels sluggish; FCP captures exactly when the user’s gaze is first satisfied.
- **Network + CPU = bottleneck**. FCP is bounded by the slowest of (1) data arrival, (2) parsing, and (3) layout‑paint. Optimizing any of these directly lowers FCP.
- **Metric independence**: Unlike “Time to Interactive”, FCP doesn’t require scripts to finish; it focuses on *content*, not *functionality*. This isolates the cost of rendering from JavaScript execution.

**Deeper principle – Information bottleneck:**  
FCP is essentially the time needed for the browser to reduce the *entropy* of the network stream into a visible pixel. Every byte sent carries information; until enough information has been decoded to produce the first non‑empty visual element, entropy remains high and the user perceives nothing.

**Non‑obvious insight:**  
Optimizing FCP often requires **inlining critical CSS** or **pre‑fetching fonts**, not just minifying JavaScript. The *first* paint is dominated by the *critical rendering path*, which can be shortened by ensuring that the very first bytes of the response contain all styles needed for the above‑the‑fold content. In other words, FCP rewards *information placement*—not just speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
