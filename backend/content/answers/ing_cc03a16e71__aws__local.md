---
qid: ing_cc03a16e71__aws__local
question: 'Explain: Google Maps System Design Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 420
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:02:06-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML team at my previous company, we were asked to prototype a *location‑based recommendation engine*—essentially a simplified Google Maps design—for an e‑commerce platform that needed real‑time POI (point‑of‑interest) suggestions. The goal was to deliver 95 % recall of relevant stores within 100 ms for 10M daily active users.

**Action**  
1. **Ownership & Customer Obsession:** I scoped the problem by mapping user journeys and quantified pain points: a 3 s latency hit dropped conversion by 2.4 %.  
2. **Dive Deep into Architecture:**  
   - *Data ingestion:* Kinesis Data Streams → Lambda for real‑time enrichment, stored in DynamoDB (global tables) for low‑latency reads.  
   - *Model serving:* SageMaker endpoints behind an Application Load Balancer with auto‑scaling; we used a pre‑trained embeddings model (≈ 200 MB) and batch‑process updates nightly via Glue.  
   - *Geospatial index:* Amazon Location Service’s GeoJSON tiles + ElasticSearch for nearest‑neighbor queries, ensuring sub‑50 ms lookups.  
3. **Bias for Action & Deliver Results:** Deployed a canary rollout; latency dropped from 3 s to 0.08 s and conversion up 1.8 %. Cost was $12K/month vs the $30K baseline.

**Result**  
Achieved 95 % recall, reduced latency by 96 %, and increased revenue by **$4.5M annually**. The bar‑raiser will note my end‑to‑end ownership, data‑driven metrics, deep architectural choices, and rapid learning loop (iterating on model size after first deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
