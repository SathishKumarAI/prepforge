---
qid: ing_5b9564fad5__aws__local
question: 'Explain: It will also store all the — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 421
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:18-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of Google Maps’ **real‑time traffic and route recommendation engine** at a previous role. The product team needed a scalable layer that could store *every* road segment, speed record, and incident event—≈ 10⁹ data points—while feeding an ML model that outputs personalized routes in under 200 ms.

**Action (Design)**  
1. **Data ingestion:** Use Kinesis Data Streams to buffer high‑velocity telemetry, then batch into S3 with partitioning by region.  
2. **Storage & indexing:** Persist raw records in DynamoDB Global Tables for low‑latency reads; maintain a materialized graph in Neptune for shortest‑path queries.  
3. **ML pipeline:** Train a Graph Neural Network on SageMaker nightly, cache embeddings in Elasticache Redis per node.  
4. **Serving layer:** API Gateway + Lambda (with provisioned concurrency) routes user queries to the nearest edge location; if latency > 150 ms, fallback to cached static routes.

**Result**  
- Reduced average route‑compute time from 350 ms to **180 ms** (+48 %).  
- Storage cost cut by 30 % using S3 lifecycle policies.  
- System handled a 4× traffic spike during peak hours with <1 % error rate, proving high availability.

**Reflection (Bar‑raiser notes)**  
I took full ownership of the end‑to‑end flow, dove deep into latency bottlenecks, quantified every trade‑off, and learned that edge caching was the single biggest win—something I iterated on after an initial failure to hit SLA targets.  

*Leadership Principles: Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
