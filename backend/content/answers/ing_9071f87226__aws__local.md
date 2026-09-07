---
qid: ing_9071f87226__aws__local
question: 'Explain: All good so far but we have — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 432
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:31-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time traffic prediction layer for a *Google‑Maps‑style* application that must serve millions of users with sub‑second latency while scaling to global traffic volumes.

**Action (Technical Design)**  
1. **Data Ingestion** – Use *Amazon Kinesis Data Streams* for live vehicle telemetry and *AWS IoT Core* for edge sensors, ensuring 99.999 % durability.  
2. **Processing Pipeline** – Route events through *AWS Lambda* + *Kinesis Data Analytics* to compute per‑segment velocity histograms (10‑second windows). Store aggregates in *Amazon DynamoDB* with TTL to keep the window current.  
3. **Model Training & Inference** – Train a Gradient Boosting model on historical traffic using *SageMaker*; deploy it as an endpoint behind *AWS AppRunner*, auto‑scaling based on CPU usage (≥90 % triggers new instances).  
4. **Serving Layer** – Expose predictions via a low‑latency REST API in *API Gateway*, cached at the edge with *CloudFront*. Use *AWS WAF* to protect against DoS.

**Result**  
- Achieved 95 % of predictions within 150 ms, meeting SLA for 99.9 % of requests.  
- Reduced infrastructure cost by 30 % through spot‑instance usage in SageMaker and auto‑scaling.  

**Reflection (Bar‑raiser Lens)**  
I owned the end‑to‑end flow, diving deep into latency bottlenecks; the data‑driven KPI (latency & cost) proved impact. After a spike test failure, I refactored the Lambda timeout logic—learning that “bias for action” must be balanced with rigorous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
