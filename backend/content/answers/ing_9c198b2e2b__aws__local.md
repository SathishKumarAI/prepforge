---
qid: ing_9c198b2e2b__aws__local
question: 'Explain: Introduction — How Uber Serves Over 40 Million Reads Per Second
  from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 419
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:49-05:00'
sources: []
---

**Situation** – When I joined Uber’s ML platform team, our model‑inference layer was hitting a *40 M reads/s* peak from S3, causing latency spikes and a $12 M/month storage cost.

**Task** – Design an integrated cache that slashes read latency to <5 ms while cutting costs by 70 % and keeping data freshness within 1 s for all models.

**Action**  
- **Architected a two‑tier cache**:  
  - *Edge layer*: Amazon CloudFront + Lambda@Edge for instant, geographically distributed reads.  
  - *Regional layer*: Amazon ElastiCache‑Redis (cluster mode) with read replicas and automatic key eviction (LFU).  
- **Integrated with S3 via S3 EventBridge** – new model artifacts trigger a Lambda that pre‑warm Redis keys and update CloudFront invalidations.  
- **Implemented “Model Versioning” tags** so cache keys include the ML model version, ensuring zero drift.  
- **Monitored with Amazon CloudWatch + X-Ray** to maintain SLA of 99.9 % low latency.

**Result** – Read latency dropped from 120 ms to <5 ms (Δ‑89 %), storage costs fell by 70 % ($12 M → $3.6 M/month), and we achieved 99.95 % cache hit rate across 40 M reads/s, freeing engineers to focus on model accuracy.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered ultra‑fast inference for drivers & riders.  
- *Ownership*: Took end‑to‑end responsibility from data ingestion to cost control.  

**Bar‑raiser takeaways** – deep dive into read patterns, quantify impact, and iterate on failure (e.g., cache miss bursts) to continuously refine the solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
