---
qid: ing_dcdf1e23cf__aws__local
question: 'Explain: Dynamic Pricing Engine — Grokking The Machine Learning Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 404
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:38:30-05:00'
sources: []
---

**Situation:**  
I led a cross‑functional team at an e‑commerce startup that needed a dynamic pricing engine to maximize revenue while keeping customers happy. The existing rule‑based system was brittle and drove a 12 % margin erosion during flash sales.

**Task:**  
Build a machine‑learning driven engine that could adjust prices in real time, respect inventory constraints, and maintain SLA of <200 ms response per request.

**Action:**  
- **Ownership & Customer Obsession:** I mapped the customer journey to identify pain points—price volatility caused cart abandonment.  
- **Dive Deep & Bias for Action:** Collected 4 M price‑interaction logs (clicks, purchases, churn). Trained a gradient‑boosted tree model (XGBoost) on AWS SageMaker, featuring lagged demand, competitor prices, and seasonality.  
- **Technical Design:**  
  - *Feature Store* in Amazon DynamoDB with TTL for freshness.  
  - *Inference Service* via SageMaker Hosting + Lambda edge for sub‑200 ms latency.  
  - *Rule Engine* (AWS Step Functions) to enforce inventory caps and legal price floors.  
- **Scalability & Cost:** Auto‑scaling endpoints reduced spend by 35 % during low traffic, while maintaining 99.9 % availability.

**Result:**  
Within three months post‑deployment, revenue grew 18 %, gross margin improved from 28 % to 32 %, and cart abandonment fell 4 %. The model’s A/B test showed a statistically significant lift (p<0.01). I documented lessons—early monitoring of feature drift prevented a potential 5 % margin dip—and shared the playbook across two additional product lines, scaling impact company‑wide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
