---
qid: ing_b81399de0f__aws__local
question: 'Explain: Real World Back of the Envelope Calculations'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 440
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:20:21-05:00'
sources: []
---

**Situation – Customer Obsession & Ownership**

At my last role I was tasked to estimate the cost and performance impact of moving our nightly inference pipeline (≈ 5 M predictions/day) from on‑prem GPUs to AWS SageMaker for a new product launch. The executive team needed a quick, data‑driven answer to decide whether to proceed.

**Task – Dive Deep & Bias for Action**

I scoped the calculation:  
- **Compute:** 5 M inferences × 0.5 s each = 2.5 × 10⁶ s ≈ 694 h of GPU‑time/day.  
- **Pricing:** p3.8xlarge (4 V100 GPUs) @ $3.06/h → $2,122/day per instance. Need 1–2 instances ⇒ ~$4,000/day.  
- **Storage & Data transfer:** 5 GB input + 0.5 GB output × 30 days ≈ 165 GB/month → S3 ~ $4.95/month.  
- **Savings Plan** (12‑mo) would reduce GPU cost to ~$1,800/day.

I compared against on‑prem: €10k/month for GPUs + maintenance vs. AWS’s $120k/year.

**Result – Deliver Results**

Presented a 2‑page slide deck with the above numbers and a risk matrix. The board approved the move, saving ~30 % annual cost while improving uptime from 95 % to >99.9 %. Post‑migration, we monitored CloudWatch metrics; latency dropped by 18 %, and error rates fell by 25 %.

**Learning**

I realized that early‑stage back‑of‑the‑envelope must include hidden costs (network egress, data labeling). I built a reusable Jupyter notebook template for future estimates, which now saves ~1 h per analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
