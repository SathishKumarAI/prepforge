---
qid: ing_7cc673f63d__aws__local
question: 'Explain: F3: Adapter cache thrash under traffic spike'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:07:16-05:00'
sources: []
---

**Situation / Task**  
I was responsible for the recommendation engine that feeds our e‑commerce site’s “Customers who bought this also bought” carousel. During a flash sale we saw a 12× traffic spike; the adapter cache (Redis) began thrashing, dropping hits from 95 % to 58 %. This hurt conversion by ~3 %, costing ~$18k in lost revenue.

**Action**  
1. **Own & Dive Deep** – I pulled CloudWatch metrics, identified that the cache eviction policy was LRU with a 50 MB limit; the spike pushed the working set beyond capacity.  
2. **Bias for Action / Invent & Simplify** – I re‑architected the caching layer:  
   * Switched to **Amazon ElastiCache Redis** in *cluster mode* (sharding) to horizontally scale writes/reads.  
   * Implemented a **tiered cache**—hot items stay in Redis, less‑popular keys fall back to **DynamoDB Accelerator (DAX)** for low‑latency reads.  
   * Added an **auto‑scaling policy** based on `cache_hit_rate` CloudWatch alarms; scaling out 2 shards when hit rate < 70 %.  
3. **Deliver Results** – Deployed in Blue/Green, rolled back within 30 min if any SLA breach.

**Result**  
- Cache hit rate rebounded to 92 % under a 15× traffic spike.  
- Conversion lift of 4 %, translating to ~$24k additional revenue during the sale.  
- Cost increased by only 12 % (from $0.75k to $0.84k/month).  

**Learnings** – Continuous monitoring and automated scaling are essential; over‑provisioning is wasteful, under‑provisioning kills business. I documented the failure and recovery process in a post‑mortem shared with all infra teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
