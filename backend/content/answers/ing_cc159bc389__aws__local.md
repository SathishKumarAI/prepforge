---
qid: ing_cc159bc389__aws__local
question: 'Explain: Requirements — Flightbookingsearchmakemytrip'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 386
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:22-05:00'
sources: []
---

**Situation & Task**  
At MakeMyTrip I led a cross‑functional team to design an ML‑driven “Smart Search” that predicts the best flight options for users within 200 ms, improving booking conversion by 12% (target 15%).  

**Action – Requirements & Architecture**  
1. **Customer Obsession + Ownership** – Gathered user clickstream, intent signals and revenue data; defined success metrics: CTR, AUC‑ROC, latency < 250 ms.  
2. **Dive Deep** – Built a feature store (AWS Glue catalog + DynamoDB) to ingest ~10 M events/day.  
3. **Bias for Action & Invent & Simplify** – Deployed an XGBoost model on SageMaker Pipelines; served via Amazon API Gateway + Lambda with provisioned concurrency, ensuring 99.9% availability.  
4. **Scalability / Cost** – Auto‑scaling of Lambda (max 10 k invocations/sec) and spot instances for training reduced compute cost by 35%.  
5. **Monitoring & Feedback Loop** – CloudWatch metrics + SageMaker Model Monitor track drift; retraining triggered quarterly.

**Result**  
- Conversion uplift: 12% (+3% over baseline).  
- Latency: 180 ms average, < 1% of requests > 250 ms.  
- Cost savings: $45k/month on inference vs legacy system.  

**Bar‑raiser Takeaway**  
I demonstrated end‑to‑end ownership, deep technical dive into data pipelines and ML ops, quantified impact, and a continuous learning loop to iterate on model performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
