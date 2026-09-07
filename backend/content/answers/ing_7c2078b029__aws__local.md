---
qid: ing_7c2078b029__aws__local
question: 'Explain: Database Buffer Pool — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 555
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:02-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign a legacy e‑commerce platform’s product catalog service. The existing RDS MySQL instance hit 4 kps read traffic, but latency spiked to 300 ms during flash sales because the buffer pool (MySQL InnoDB cache) could not keep frequently accessed rows in memory. I needed to reduce average latency below 50 ms and support a 10× traffic burst while keeping costs < 30 % of the current spend.

**Action & Design**  
1. **Identify Hot Data** – Using CloudWatch metrics and `SHOW ENGINE INNODB STATUS`, I found that ~80 % of reads hit a narrow set of product rows (top 5k SKUs).  
2. **Deploy Elasticache Redis** as an in‑memory cache layer, using *write-through* strategy for catalog updates.  
3. **Cache Invalidation Strategy** – Leverage DynamoDB Streams to push TTL‑based invalidations; fallback to `EXPIRE` on keys after 1 h.  
4. **Service Architecture** – API Gateway → Lambda (Python) → Redis → RDS as backup.  
5. **Auto‑Scaling & Resilience** – Use a Multi-AZ Redis cluster with read replicas, and enable *Redis Cluster* sharding to keep each node < 12 GB RAM.  

**Result**  
- Average read latency dropped from 300 ms to **45 ms** (90 % improvement).  
- CPU utilization on RDS fell by **70 %**, freeing the instance for future growth.  
- Cost decreased from $4,200/month to **$2,800/month** (~33 % savings).  
- During a 10× traffic spike, request success rate stayed at 99.9 %, meeting SLAs.

**Reflection & Learnings**  
I owned the end‑to‑end flow and *dive deep* into MySQL internals to surface the bottleneck. The trade‑off was a slight increase in read complexity, but the data‑driven benefit outweighed it. I documented the failure mode (cache miss) and built automated alerts to trigger re‑population scripts—an example of bias for action that keeps the system self‑healing.

---

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering sub‑50 ms latency improves user experience during high‑traffic events.  
- **Ownership & Dive Deep** – Took full responsibility, dissected database internals, and engineered a scalable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
