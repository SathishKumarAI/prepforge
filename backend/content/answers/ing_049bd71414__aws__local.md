---
qid: ing_049bd71414__aws__local
question: 'Explain: Sharding Key — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 490
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:14-05:00'
sources: []
---

**Situation (S)**  
I led a 5‑person team at a fintech startup that saw our user base grow from 50k to 1M in 12 months. The monolithic PostgreSQL database was throttling transaction processing—latency spiked to 350 ms during peak hours, and the single‑node RDS instance hit its IOPS ceiling.

**Task (T)**  
Design a sharding strategy that scales horizontally, keeps data consistency for high‑value transactions, and stays cost‑effective on AWS.

**Action (A)**  
- **Sharding key:** Chose `account_id` because every write touches a single account; this guarantees strong consistency per shard.  
- **Architecture:** Deployed 4 Aurora Serverless clusters, each responsible for a range of hash prefixes of the `account_id`.  
- **Routing layer:** Implemented an API Gateway + Lambda “router” that hashes the incoming `account_id` and forwards to the appropriate Aurora endpoint—ensuring zero downtime during re‑shard.  
- **Monitoring & scaling:** Used CloudWatch metrics (CPU, RDS Proxy connections) to trigger Aurora auto‑scaling; added DynamoDB for metadata lookup of shard mapping, keeping latency < 10 ms.  
- **Cost trade‑offs:** Compared with a single RDS instance, we reduced monthly spend by ~30% while doubling throughput.

**Result (R)**  
Post‑migration, average transaction latency dropped to 45 ms; peak throughput increased from 3k TPS to 18k TPS (+600%). The system handled a sudden 200% traffic spike during a market event without degradation.  

---

### Leadership Principles Highlighted
- **Ownership & Deliver Results:** Took full responsibility for the migration, delivered measurable performance gains, and reduced costs.
- **Dive Deep:** Analyzed query patterns, sharding key suitability, and AWS service limits to design a robust solution.

*Bar‑raiser notes:* Looked for evidence of end‑to‑end ownership, quantitative impact (latency & TPS), deep technical reasoning (hashing, routing, scaling), and a learning loop—e.g., post‑mortem on the first shard cut to refine the router logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
