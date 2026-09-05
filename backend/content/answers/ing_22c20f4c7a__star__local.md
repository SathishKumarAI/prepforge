---
qid: ing_22c20f4c7a__star__local
question: 'Explain: Tier 1 - cheap classifier on 100% of traffic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 380
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:38:38-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with scaling the fraud detection pipeline for a fintech app that processed ~2 M transactions daily. The existing rule‑engine ran 100 % of traffic but was too slow and cost‑intensive to keep up during peak hours.

**Task**  
I needed to cut processing latency by at least 40 % while keeping false‑positive rates below 0.5 %. The goal was to shift the bulk of traffic through a lightweight, fast model without sacrificing overall detection quality.

**Action**  
I built a tiered system: Tier 1 was a small, hand‑crafted logistic regression model (≈10 k parameters) trained on engineered features like transaction amount, time‑of‑day, and user history. It ran in memory on a single CPU core and scored every request instantly. Only if the probability fell into an “uncertain” band (0.45–0.55) would we forward the sample to Tier 2—a deeper XGBoost model running on GPU instances that handled the remaining ~15 % of traffic. I implemented this flow in our Java microservice, added a circuit‑breaker for tier‑2 back‑pressure, and used Prometheus alerts to monitor latency and error rates.

**Result**  
Latency dropped from 350 ms to 210 ms (a 40 % improvement). The overall fraud detection accuracy stayed within the target: false positives at 0.48 %, true positives at 97.2 %. Cost savings were ~30 % on GPU usage, and I learned how a simple threshold‑based gating strategy can effectively balance speed, cost, and quality in real‑time AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
