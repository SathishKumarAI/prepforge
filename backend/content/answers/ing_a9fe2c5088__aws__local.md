---
qid: ing_a9fe2c5088__aws__local
question: 'Explain: Avoid total service outage — What is Database Sharding? - Shard
  DB Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:38-05:00'
sources: []
---

**Situation & Task**  
At my last role we had a customer‑facing product that stored millions of user sessions. A single database failure caused a full outage and cost us ~\$200k in lost revenue per hour. I was tasked with designing a resilient architecture that would keep the service online even if one shard failed.

**Action (Dive Deep & Ownership)**  
I proposed **database sharding**: partitioning data by user ID hash into 8 shards, each on its own Aurora Serverless cluster. I used Amazon RDS Proxy to pool connections and added cross‑region read replicas for disaster recovery. Shard routing was handled by a lightweight Lambda that cached shard locations in DynamoDB (latency <2 ms). We implemented automated health checks; if a shard became unhealthy, traffic rerouted to its replica with minimal lag.

**Result (Deliver Results & Customer Obsession)**  
The new design reduced single‑point‑of‑failure risk from 100% to <0.01%. In a month of load testing we saw **99.999% availability**, while costs dropped by 12 % due to better scaling. User complaints fell by 70%, and revenue loss during outages decreased from \$200k/hour to under \$5k/hour.

**Bar‑raiser notes**  
- Demonstrated ownership by leading the end‑to‑end redesign.  
- Dive deep into sharding mechanics, Lambda routing logic, and cost trade‑offs.  
- Quantified impact with availability percentages and financial metrics.  
- Learned from initial failure‑over tests to fine‑tune health checks and retry policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
