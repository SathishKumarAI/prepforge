---
qid: ing_fd9bc6c381__aws__local
question: 'Explain: Paging — Paging vs Segmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 466
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:51:38-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*  
> 
> **Situation (S):** In a recent migration of our recommendation engine to a serverless architecture on AWS, the team hit a bottleneck when we tried to cache large user profiles. We needed an efficient memory‑management scheme for the in‑memory datastore that could handle millions of concurrent users with sub‑100 ms latency.

> **Task (T):** Choose between *paging* and *segmentation* as the strategy for virtualizing the profile data, and design a scalable, cost‑effective implementation on AWS.

> **Action (A):**  
> 1. **Dive Deep into requirements:** Profiles average 2 MB; we needed to keep 10 % of hot profiles in RAM while paging out the rest.  
> 2. **Design choice:** Adopt *paging* with a fixed 4 KB page size, backed by Amazon DynamoDB for persistence and Amazon ElastiCache (Redis) as the cache layer. Each page is stored as a separate key in Redis to enable fine‑grained eviction (LRU).  
> 3. **Scalability & Availability:** Use Auto Scaling on ElastiCache clusters; set up cross‑region replication for disaster recovery. DynamoDB’s provisioned capacity ensures no cold start latency.  
> 4. **Cost trade‑offs:** Paging reduces RAM usage by ~70 % compared to segmenting entire profiles, cutting EC2 costs by ~$12k/month.  

> **Result (R):** After deployment, cache hit rate rose from 55 % to 92 %, reducing recommendation latency from 240 ms to 78 ms (a 67 % improvement). Monthly operational cost dropped 25 %.  
> 
> **Bar‑raiser notes:** Demonstrated *ownership* by driving the end‑to‑end solution, *dive deep* through metrics and trade‑offs, quantified impact, and learned from a prior segmentation experiment that over‑fragmented data caused excessive network hops.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
