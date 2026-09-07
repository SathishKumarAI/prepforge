---
qid: ing_7e410a25ce__aws__local
question: 'Explain: How to Choose — SQL vs NoSQL | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 435
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:10:47-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

**Situation / Task**  
I led a data‑engineering team tasked with building an analytics platform for a fintech client that needed real‑time fraud detection and historical reporting. The core question was whether to use SQL (RDS) or NoSQL (DynamoDB).

**Action**  
1. **Requirements dive:**  
   * OLTP: 10 k writes/sec, ACID compliance.  
   * OLAP: complex joins, ad‑hoc queries on 50 TB of time‑series data.  
2. **Design trade‑offs:**  
   * **SQL (Aurora PostgreSQL):** strong consistency, mature tooling for analytics, but scaling read replicas costs ~30 % per replica and write throughput caps at ~1 k ops/sec without sharding.  
   * **NoSQL (DynamoDB + Redshift):** horizontal scalability (10 k+ writes/sec), automatic partitioning, but joins are costly; analytic workload offloaded to Redshift for 5× cheaper per TB than Aurora.  
3. **Hybrid architecture:**  
   * Stream write‑through from DynamoDB Streams → Lambda → Aurora for transactional consistency.  
   * Periodic ETL (Glue) into Redshift for BI queries.  
4. **Cost & availability:** Leveraged on‑demand + reserved instances, auto‑scaling, and Multi‑AZ deployments to keep 99.999% uptime.

**Result**  
- Achieved 10 k writes/sec with <200 ms latency.  
- Analytics query times dropped from 15 min to 30 sec (5× faster).  
- Total cost fell by 25 % YoY while maintaining full ACID guarantees for critical ops.  

*Learning:* A hybrid model leverages each store’s strengths; blind allegiance to one paradigm limits scalability and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
