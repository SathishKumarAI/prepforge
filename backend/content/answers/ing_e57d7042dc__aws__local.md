---
qid: ing_e57d7042dc__aws__local
question: 'Explain: Data Partitioning — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 469
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:55-05:00'
sources: []
---

**Situation (S)**  
I was leading the redesign of a recommendation engine for a global e‑commerce platform that processed ~50 M requests/day. The ML pipeline ingested raw clickstream logs, applied feature engineering, and served predictions via a low‑latency API. Our existing design hit 3 s latency during peak hours because every request triggered a full cache miss and recomputed features.

**Task (T)**  
Reduce average inference latency to <300 ms while keeping the system cost‑effective and fully fault tolerant.

**Action (A)**  
1. **Data partitioning & caching strategy** – Partition feature data by user segment (e.g., high‑value vs. regular) and store each shard in a *Redis* cluster configured with read replicas.  
2. **Cache invalidation policy** – Use an LRU eviction combined with a TTL of 12 h; push updates via Kafka to trigger background refresh jobs, ensuring stale data never exceeds 5 min.  
3. **Service stack** – API Gateway → Lambda (stateless inference) → Redis for cache lookup → SageMaker Endpoint for fallback computation.  
4. **Scalability & cost** – Auto‑scaling based on request rate; reserved instances for Redis reduce cost by 30 %. Multi‑AZ deployment guarantees <0.1 % outage probability.

**Result (R)**  
Latency dropped from 3 s to **250 ms** (84 % improvement). Cache hit ratio rose to 92 %, cutting SageMaker inference calls by 70 %, saving ~$15k/month. The system survived a sudden traffic spike of 200 % without degradation, meeting SLA.

**Leadership Principles**  
- *Customer Obsession*: Delivered faster recommendations that increased conversion by 2.5 %.  
- *Ownership & Dive Deep*: Built end‑to‑end monitoring to surface cache misses and iterated on eviction policy until performance met targets.  

**Bar‑raiser takeaways** – Demonstrated clear ownership, quantified impact, deep technical understanding of caching trade‑offs, and lessons learned from the initial latency spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
