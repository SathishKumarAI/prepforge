---
qid: ing_240f7baf73__aws__local
question: 'Explain: Yeah. What what are the sort of — Building Software Systems At
  Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 378
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:23-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at Amazon, I was tasked with launching an end‑to‑end recommendation engine for the Prime Video catalog—up to **1 M daily users** and **10 TB of clickstream data**. The goal: increase time‑spent per session by 15% within six months.

**Action & Design**  
I adopted a “data‑first” approach (Customer Obsession, Dive Deep).  
* **Data ingestion:** Kinesis Data Streams → Lambda → S3 (raw) and Athena for ad‑hoc queries.  
* **Feature store:** SageMaker Feature Store (real‑time + batch).  
* **Model training:** Distributed training on SageMaker with Spot Instances (cost ↓ ≈ 30%).  
* **Serving:** SageMaker Endpoint behind API Gateway, autoscaled via Lambda edge to keep latency < 100 ms.  
* **Observability:** CloudWatch metrics + SageMaker Model Monitor for drift; automated retraining triggers every 48 h.

**Result**  
Within five months:  
* Session duration ↑ 18% (exceeding target).  
* Cost per recommendation ↓ 25% by shifting to Spot Instances and batching.  
* Latency maintained at 92 ms average, meeting SLA for 99.9% of traffic.

**Learning & Ownership**  
I iterated the architecture after a mid‑project “data drift” incident—adding a feature‑store health check that prevented a 12 h outage, turning failure into an automated safety net. This experience reinforced **Ownership** and the importance of building systems that learn from their own missteps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
