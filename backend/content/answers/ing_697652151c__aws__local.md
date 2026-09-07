---
qid: ing_697652151c__aws__local
question: Ready to build? — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 417
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:25-05:00'
sources: []
---

**Situation (S)** – At my last gig I led a team that built a real‑time ride‑matching engine for a regional rideshare app. The system had to scale from 10k to 200k concurrent users while keeping latency under 150 ms and delivering high match accuracy.

**Task (T)** – My goal was to replace the legacy rule‑based matcher with an ML model that could learn rider/driver preferences, traffic patterns, and surge pricing dynamics—without breaking existing uptime guarantees.

**Action (A)**  
1. **Ownership & Bias for Action**: I scoped a minimal viable pipeline using SageMaker Pipelines, Lambda, and DynamoDB Streams to ingest trip logs in real time.  
2. **Dive Deep & Invent & Simplify**: We built an incremental training loop that retrains the model every 5 minutes with new data (≈ 50 GB/day). The feature store lives on Amazon Neptune for graph‑based location features, while inference happens via SageMaker RealTime endpoint behind a Global Accelerator.  
3. **Customer Obsession**: Conducted A/B tests against the legacy system; metrics showed a 12% drop in average wait time and a 7% increase in driver earnings.

**Result (R)** – The new ML matcher handled 200k concurrent requests with 99.9 % availability, cut latency from 250 ms to 110 ms, and increased revenue by $1.4M/month. Post‑deployment, I set up CloudWatch dashboards for continuous monitoring and instituted a “post‑mortem” cadence that surfaced one failure mode: model drift during holidays—leading to a new feature flag system.

**Bar‑raiser check** – I owned the end‑to‑end solution, dove deep into data & latency trade‑offs, quantified impact with real revenue numbers, and learned from the holiday drift incident to improve resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
