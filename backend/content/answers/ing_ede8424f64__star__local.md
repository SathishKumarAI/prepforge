---
qid: ing_ede8424f64__star__local
question: 'Explain: the speed at which the cab is — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 449
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:38-05:00'
sources: []
---

**Situation** – In early 2023 I was on the Uber surge‑pricing team where customers were reporting a 1‑second lag between request and driver assignment during peak hours. The delay hurt user satisfaction scores and we were losing up to 4 % of rides in those windows.

**Task** – My goal was to cut that latency by at least 30 % while keeping the model’s prediction accuracy above 95 %. I had to redesign the inference pipeline, tweak feature selection, and ensure it would scale to millions of requests per hour.

**Action** – I first profiled the existing Spark‑based batch pipeline and identified a bottleneck in the feature extraction stage. I rewrote the critical path in Rust and deployed it as a microservice behind Envoy. For the model I switched from a 200‑node Random Forest to an XGBoost tree with 50 trees, which gives similar accuracy but runs 4× faster on CPU. I added a GPU‑enabled inference node for peak periods and implemented a TTL cache in Redis so that identical requests served within 2 seconds hit the cache instead of recomputing. Finally, I containerised everything with Docker, orchestrated via Kubernetes, and set up Prometheus alerts to track latency.

**Result** – The new pipeline reduced average request‑to‑assignment time from 1.2 s to 0.8 s—a 33 % improvement—while keeping accuracy at 96.5 %. Post‑deployment, the surge‑pricing conversion rate rose by 2.3 %, and customer NPS improved by 4 points. I learned that micro‑optimising feature extraction and judicious model choice can deliver big latency gains without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
