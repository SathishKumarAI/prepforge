---
qid: ing_57ccfb30a9__aws__local
question: 'Explain: Let''s say there are these two roads — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 410
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:44:14-05:00'
sources: []
---

**Situation / Task**  
While leading a cross‑functional team that built the next‑generation navigation engine for a global mapping platform, I was asked to redesign the “real‑time traffic & routing” pipeline so it could serve millions of concurrent users with sub‑second latency and 99.9 % uptime.

**Action**  
*Customer Obsession / Ownership* – I first mapped user journeys (turn‑by‑turn, ETA accuracy) and set a target of **<200 ms** per request.  
*Dive Deep & Bias for Action* – I broke the system into three layers: data ingestion, ML inference, and edge delivery.  
1️⃣ **Data Ingestion:** Used *Amazon Kinesis Data Streams* to ingest vehicle telemetry (≈2 TB/day) with auto‑scaling shards.  
2️⃣ **ML Inference:** Deployed a SageMaker endpoint for a graph‑based shortest‑path model; leveraged *ElasticInference* to keep inference cost per request < $0.0005 while maintaining 99.7 % accuracy in ETA predictions.  
3️⃣ **Edge Delivery:** Leveraged *Amazon CloudFront + Lambda@Edge* to cache routing plans regionally, cutting round‑trip latency by 60 %.  

**Result**  
- Latency dropped from **350 ms** to **190 ms**, meeting the target.  
- Traffic prediction accuracy improved by **12 %**, reducing user complaints by 35 %.  
- Operational cost fell 22 % due to efficient scaling and spot‑instance usage.

**Learning** – I discovered that coupling real‑time telemetry with a lightweight graph model yields higher ROI than heavy batch‑processing pipelines. This approach is now the baseline for all future routing features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
