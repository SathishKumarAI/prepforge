---
qid: ing_df3dc53e0e__aws__local
question: 'Explain: When NOT to Use Ensembles — Ensemble Methods'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 432
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:17-05:00'
sources: []
---

**When NOT to Use Ensembles – A Customer‑Obsessed Decision**

*Situation*: While revamping our recommendation engine for the **Prime Video** catalog, I was asked whether we should switch from a single XGBoost model to an ensemble of 5 tree models to squeeze a 2 % lift in click‑through rate (CTR).

*Task*: Evaluate the trade‑offs between marginal CTR gains and operational complexity, keeping the customer’s experience fast and reliable.

*Action*:  
1. **Dive Deep into Latency & Cost** – I profiled each model: single XGBoost latency = 12 ms; ensemble average = 60 ms (5×).  
2. Deployed a **Lambda‑based inference pipeline** vs. a **SageMaker endpoint** to benchmark real‑time costs. Ensemble incurred $0.10 per million predictions, versus $0.04 for the single model.  
3. Ran a **A/B test** on 1 M users: CTR improved by only 0.8 % (p = 0.12), not statistically significant at our target alpha of 0.01.  
4. Assessed **Scalability & Availability** – the ensemble required 5 parallel EC2 instances, doubling fail‑over complexity.

*Result*: We chose to keep the single model, saving $120k annually and reducing inference latency by 80 %. Customer wait times dropped from 60 ms to 12 ms, directly improving user satisfaction scores (NPS +3).  

**Key Takeaway**: Ensembles are valuable only when they deliver statistically significant, business‑impactful gains that justify the added cost, complexity, and latency. In this case, ownership demanded a data‑driven cut that kept our service lean and fast.

*Leadership Principles*: **Customer Obsession**, **Ownership**, **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
