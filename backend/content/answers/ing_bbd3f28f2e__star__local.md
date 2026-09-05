---
qid: ing_bbd3f28f2e__star__local
question: 'Explain: Isolation Forests — Detecting and preventing abuse on LinkedIn
  using isolation forests'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 313
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:47:02-05:00'
sources: []
---

**Situation** – In early 2024 I was part of LinkedIn’s fraud‑prevention squad tasked with slashing the monthly abuse rate by 20%. We were seeing a spike in automated sign‑ups that bypassed our usual rule‑based filters, especially on mobile devices.

**Task** – My goal was to design an unsupervised anomaly detector that could flag suspicious accounts in real time without hurting user experience or adding latency over 50 ms.

**Action** – I chose Isolation Forest because it scales linearly with data size and doesn’t need labeled examples. First, I extracted a feature set: session duration, click‑stream entropy, device fingerprint variance, and sign‑up frequency per IP block. Using Spark’s MLlib, I trained an isolation forest on 10 million historical sessions (200 trees, subsample = 256). After tuning the contamination parameter to 0.003, I deployed it as a microservice behind our API gateway. The model scored each new registration in <30 µs and routed only the top‑5 % anomalies to manual review.

**Result** – Within three weeks of deployment we reduced abuse sign‑ups by 32%, exceeding the target, and cut false positives from 15% to 4%. I learned that careful feature engineering combined with a lightweight unsupervised model can deliver production‑grade fraud detection at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
