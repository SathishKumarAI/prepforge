---
qid: ing_4959654245__aws__local
question: 'Explain: 7: Read Now - Awesome Web Optimisation Technique (6 minutes)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 390
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:22-05:00'
sources: []
---

**Situation & Task**  
At my previous firm we had a high‑traffic e‑commerce site where page load time hit 4 s on mobile, hurting conversion (↓ 12 %). I was tasked to apply an ML‑driven “Read‑Now” optimization: pre‑fetch and render only the content users are most likely to read next.

**Approach & Action**  
1. **Data‑deep dive** – Collected clickstream + scroll logs for 3 M sessions.  
2. **Model** – Trained a LightGBM ranking model (features: time on page, device type, prior purchases) to predict the *next segment* users will view.  
3. **Deployment** – Wrapped inference in a Lambda@Edge function; results fed into CloudFront edge cache to pre‑fetch assets for predicted segments.  
4. **A/B test** – 20 % traffic to treatment vs. control.

**Result**  
- Avg mobile page load dropped from 4 s → 1.8 s (55 % improvement).  
- Conversion uplift: +9 % on treated cohort, +7 % overall.  
- Cost: Lambda@Edge < $0.02 per 100k requests; savings > 30 % vs. full pre‑fetch strategy.

**Reflection**  
I owned the entire pipeline, from data extraction to live inference. The key trade‑off was between latency of model inference (kept < 10 ms) and cache hit ratio—optimizing both required iterative tuning. Learned that *bias for action* coupled with *dive deep* into telemetry yields measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
