---
qid: ing_ac21029996__aws__local
question: 'Explain: Data hotspots — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 496
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:26-05:00'
sources: []
---

**Question:** *Explain: Data hotspots – What is Database Sharding?*  

---

### Situation  
I led a migration of an e‑commerce catalog service that had 15 M read requests/day. A single Aurora PostgreSQL instance was hitting hot spots on the `product_id` column, causing >200 ms latency for 30 % of traffic.

### Task  
Design a sharding strategy that removes the hotspot while keeping cost under $5k/month and ensuring zero downtime.

### Action  
1. **Sharding by hash** – split data across 4 Aurora Serverless clusters (`shard_0`–`shard_3`).  
2. **Routing layer** – Lambda@Edge + API Gateway to compute `hash(product_id)%4` and forward queries.  
3. **Cross‑cluster reads** – use Aurora Global Database for read replicas in the US/EU regions, keeping read latency <30 ms.  
4. **Backup & monitoring** – CloudWatch metrics per shard; automated failover with RDS Proxy.

### Result  
- Latency dropped from 200 ms to 35 ms (‑82 %); throughput increased by 4×.  
- Cost stayed at $4,300/month (≈20 % less than scaling a single instance).  
- Zero incidents during cutover; post‑migration A/B test showed no degradation in conversion.

---

**Leadership Principles Anchored**

| Principle | How it Shows |
|-----------|--------------|
| **Customer Obsession** | Reduced page load time → higher conversion. |
| **Ownership** | Took end‑to‑end responsibility for architecture, migration, and monitoring. |
| **Dive Deep** | Analyzed query patterns, shard cardinality, and cross‑region latency data. |
| **Bias for Action** | Deployed the solution in 3 days with automated rollback. |

---

### What a bar‑raiser looks for  
- **Ownership:** I owned both design and operational aspects.  
- **Dive Deep:** Showed detailed shard metrics & cost models.  
- **Quantified Impact:** Provided clear latency & cost numbers.  
- **Learning from Failure:** Post‑mortem on previous hotspot issues led to the hash‑based routing decision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
