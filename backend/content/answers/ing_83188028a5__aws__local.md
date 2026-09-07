---
qid: ing_83188028a5__aws__local
question: 'Explain: Caching Strategy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 576
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:21:12-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Behavioral (STAR):**  
> **S – Situation:** While leading a fraud‑detection ML pipeline at my previous company, latency on the inference endpoint rose from 120 ms to 350 ms during peak hours, hurting user experience.  
> **T – Task:** Reduce inference latency by ≥ 50 % without compromising model accuracy or violating data‑privacy constraints.  
> **A – Action:** I introduced a two‑tier caching strategy:  
> * **Local in‑memory LRU cache** (using Redis) for the top 5 % of high‑frequency feature vectors, refreshed every 10 s.  
> * **Edge CDN cache** (Amazon CloudFront + Lambda@Edge) to serve pre‑computed inference results for static user segments, with a TTL of 1 h. I added an automated fallback to the full model on Sagemaker when cache miss occurs.  
> *Implemented metrics via CloudWatch: hit rate, latency distribution, and cost per request.*  
> **R – Result:** Cache hit rate climbed to **92 %**, reducing average inference time from 350 ms to **140 ms** (≈ 60 % drop). Operational costs fell by **$1.2k/month** (Redis & CloudFront) while model accuracy stayed at 99.3 %.  
> **Learning:** A rigorous cache‑validation loop and continuous monitoring prevent “cache‑stale” drift; I now routinely audit TTLs against real traffic patterns.  

**Technical Design Highlights**

| Layer | AWS Service | Reasoning |
|-------|-------------|-----------|
| Feature Store | Amazon DynamoDB + DAX | Low‑latency reads for feature vectors, auto‑scales with throughput. |
| Cache Tier 1 | ElastiCache (Redis) | In‑memory, sub‑ms access; supports LRU eviction and clustering. |
| Cache Tier 2 | CloudFront + Lambda@Edge | Edge caching reduces egress latency; serverless scaling eliminates provisioning overhead. |
| Model Serving | SageMaker Endpoint (Multi‑Model) | Handles cache misses with GPU/CPU inference; versioned for A/B testing. |
| Observability | CloudWatch + X-Ray | Tracks hit/miss ratios, end‑to‑end latency, and error rates. |

**Bar‑raiser focus:** Ownership of the end‑to‑end pipeline, depth in cache consistency checks, quantified impact on latency & cost, and lessons learned from initial “stale cache” incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
