---
qid: ing_c5599b84ef__aws__local
question: 'Explain: Week 3 - Non-linear data structures ​ — Best practice questions
  by the author of Blind 75 | Tech Interview Handbook'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 429
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:48:58-05:00'
sources: []
---

**Situation (S)**  
At a fast‑growth fintech I was tasked to build a recommendation engine that had to handle highly non‑linear user‑item interactions while staying under $2 M/yr of infra spend.

**Task (T)**  
Design an end‑to‑end ML pipeline that ingests streaming click data, trains on complex graph structures, and serves predictions with <100 ms latency.

**Action (A)**  

1. **Data ingestion & storage** – Kinesis Data Streams → Lambda → DynamoDB for hot key lookups; S3 + Glue catalog for raw logs.  
2. **Feature engineering** – Spark on EMR to build user‑item graphs, compute PageRank and community embeddings; results persisted in Neptune (graph DB).  
3. **Model training** – SageMaker Neo compiled PyTorch GNN model; used spot instances to cut GPU cost 40 %.  
4. **Serving** – SageMaker Endpoint behind API Gateway + Lambda@Edge for caching; autoscaling based on CloudWatch metrics ensures 99.9 % availability.  
5. **Monitoring & feedback loop** – Evidently alerts on AUC drift; retraining triggered automatically every 12 hrs.

**Result (R)**  
Model accuracy improved from 0.68 to 0.82 AUC, boosting conversion by 18 % and generating $1.4 M incremental revenue in Q3. Infra cost remained below budget, and latency hit <90 ms for 95 % of requests.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – Direct impact on conversion rates.  
- **Ownership & Dive Deep** – End‑to‑end design, cost optimization, continuous monitoring.  

*Bar‑raiser focus:* clear ownership, depth in technical trade‑offs (Neptune vs DynamoDB), quantified business outcome, and learning loop from model drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
