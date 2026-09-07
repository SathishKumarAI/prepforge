---
qid: ing_d704c91cc0__faang__local
question: 'Explain: Netflix System Design Coding — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 464
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:59:14-05:00'
sources: []
---

**Clarify**

You’re asked to sketch a *Netflix‑style recommendation service* that can serve millions of users in real time.  
Key assumptions I’d confirm:  

1. **Data scale** – how many movies, users, and interactions per day?  
2. **Latency budget** – < 100 ms for a single request?  
3. **Freshness** – do we need instant updates or batched re‑training?  
4. **Cold start** – new users/movies and sparsity of ratings.

**Approach**

1. **Data ingestion & storage** – stream raw interactions to Kafka → batch into HDFS/Spark for feature engineering.  
2. **Modeling** – matrix factorization (ALS) or neural collaborative filtering; train offline, push embeddings to a fast key‑value store (Redis/ElastiCache).  
3. **Serving layer** – microservice per user request that pulls the user vector + candidate movie vectors → dot product → top‑N scores.  
4. **Candidate generation** – use locality‑sensitive hashing or popularity buckets to reduce search space before scoring.  
5. **A/B testing & monitoring** – canary releases, latency dashboards, and drift alerts.

**Depth**

- *Complexity*: Candidate gen O(log M) via LSH; scoring O(N·d).  
- *Trade‑offs*: Online training (low latency, high freshness) vs offline batch (stable accuracy).  
- Use **feature store** for consistency between training & serving.  

**Edge Cases**

- Sparse user profiles → fallback to global or genre popularity.  
- New movies with no embeddings → use metadata embeddings.  
- Distributed cache evictions causing stale vectors.

**Optimize & Communicate**

Explain that caching popular embeddings reduces compute, but we keep a small “hot” set in memory and a larger “cold” set on SSD. Discuss how to scale horizontally by sharding users across request routers. Conclude with a brief note on cost‑efficiency: use spot instances for batch jobs, autoscale serving pods based on traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
