---
qid: ing_0fbef460a4__aws__local
question: 'Explain: So the next use case and quickly — Database Design Tips | Choosing
  the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 402
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:01:05-05:00'
sources: []
---

**Situation & Task**  
While leading the ML pipeline for a recommendation engine (1 M users/day), I was asked to redesign the data layer so that feature store updates, model inference, and audit logs could coexist without bottlenecking.

**Action – Design Choices**  
* **Feature Store → Amazon DynamoDB**: Low‑latency reads (<5 ms) for 10 k concurrent inference requests; provisioned throughput set to 50 k RCU/WCU with auto‑scaling.  
* **Model Artifacts & Logs → Amazon S3 + Glue**: Cost‑effective object storage, schema registry, and ETL jobs that run nightly (≈ 200 GB).  
* **Transactional Metadata → Amazon Aurora Serverless v2**: ACID guarantees for user interactions; burstable capacity keeps cost < $0.10/hr during off‑peak.  

I added a caching layer (ElastiCache Redis) to buffer the hottest 1 % of features, cutting inference latency by 35 %. All services were orchestrated with Step Functions to enforce *ownership* and auditability.

**Result**  
*Latency dropped from 120 ms → 78 ms (≈ 35 % improvement)*  
*Cost reduced by 28 % while scaling to 2× traffic.*  

**Leadership Principles Highlighted**  
* **Customer Obsession** – Faster recommendations improve CTR by 12%.  
* **Dive Deep & Ownership** – I mapped every read/write path, identified hotspots, and iterated until metrics met targets.  

Bar‑raisers listen for quantified impact, depth of design trade‑offs, and evidence that the candidate *owns* the problem end‑to‑end.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
