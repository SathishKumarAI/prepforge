---
qid: ing_8424ad698c__aws__local
question: 'Explain: Model Cascading (Efficiency Tiers) — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 433
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:23:45-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation*: A fintech client ran nightly inference on 10 M transaction records using a single large transformer model in SageMaker, costing ~$12k/month and lagging SLA (15 min).  
*Task*: Reduce cost by 70% while keeping latency ≤5 s.  
*Action*: I introduced **Model Cascading**—a tiered inference pipeline:

| Tier | Model | Threshold | Compute |
|------|-------|-----------|---------|
| 1 | Tiny BERT (≈0.5M params) | Confidence ≥0.8 | Spot EC2 + Lambda |
| 2 | Medium RoBERTa (≈3M params) | Confidence 0.6‑0.8 | On‑Demand GPU |
| 3 | Full GPT‑4‑like (≈30M params) | <0.6 | SageMaker Real‑Time Endpoint |

I used **SageMaker Processing** to batch Tier 1/2 predictions on Spot, falling back to real‑time only for Tier 3. Added a Lambda orchestrator that routes requests and aggregates results.

*Result*: Cost dropped from $12k to $3.5k/month (71% savings). Latency improved to 4 s average; SLA hit 99.9%. Monitoring showed Tier 1 handled 85 % of traffic, keeping heavy models reserved for edge cases—aligning with **Invent & Simplify**.

*Learnings*: Early profiling revealed that naïve batch‑to‑batch routing caused memory spikes; moving to Lambda kept statelessness and auto‑scaling. The bar‑raiser would look for my ownership (end‑to‑end), deep dive into model confidence thresholds, quantified impact, and the iterative learning loop that turned a costly pipeline into an efficient playbook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
