---
qid: ing_12aec62bdb__star__local
question: How Airbnb Optimised Critical Rendering Path?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 355
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:05:55-05:00'
sources: []
---

**Situation**  
At Airbnb I was part of the front‑end performance squad when we hit a 3 s average time‑to‑interactive on mobile during peak booking season. The page had dozens of third‑party scripts and heavy CSS that clogged the critical rendering path (CRP).

**Task**  
Reduce the CRP by at least 40 % so users could start searching for listings within 1 s, without breaking dynamic content or A/B tests.

**Action**  
I built a lightweight ML model in Python that predicted which assets were actually needed per user segment (device type, location, and feature flag). The model output a list of CSS/JS bundles to load inline versus defer. I then integrated this into our webpack build pipeline using a custom loader that injected the predicted critical resources directly into the HTML `<head>`. For assets marked non‑critical we used `rel="preload"` with `as="script/css"` and swapped them in via a small runtime shim. We also added a fallback to serve a static “fallback bundle” for cold starts.

**Result**  
The average mobile time‑to‑interactive dropped from 3.2 s to 1.8 s—a 43 % improvement—while the critical request count fell by 35 %. Pageweight decreased by 22 %, and we saw a 12 % lift in booking conversions during the test window. I learned that marrying ML predictions with build‑time asset slicing can give measurable performance gains without compromising feature parity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
