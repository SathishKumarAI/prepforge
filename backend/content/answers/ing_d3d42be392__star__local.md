---
qid: ing_d3d42be392__star__local
question: 'Explain: High availability — Recommendation engine & system use cases with
  graph databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 361
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:33:18-05:00'
sources: []
---

**Situation** – In my previous role at a retail SaaS company, we launched a personalized product‑recommendation feature that ran on Neo4j. The live traffic spike during holiday sales pushed the system to over 3,000 concurrent users per minute and any downtime meant lost revenue of roughly $12k/day.

**Task** – I was tasked with designing a high‑availability architecture for the recommendation engine so it could sustain peak loads, recover from node failures within seconds, and still deliver sub‑second query latency.

**Action** – First, I set up a 3‑node cluster with causal clustering, enabling automatic replication of the property graph across all replicas. To avoid single points of failure, I deployed an HAProxy load balancer that performed health checks every 500 ms and routed traffic to healthy nodes. For query performance, I pre‑computed top‑N “frequently bought together” subgraphs using a batch job on Spark and stored them in a read‑optimized materialized view; the live engine queried only these views during peak hours. Finally, I implemented automated failover scripts that promoted a standby node if heartbeats failed, and scheduled weekly chaos tests to validate recovery times.

**Result** – The system maintained 99.98 % uptime over a three‑month period, with average recommendation latency dropping from 250 ms to 80 ms under load. Revenue loss during peak seasons fell below $200/month, a 95 % reduction. I learned that coupling graph replication with pre‑computed materialized views and rigorous chaos testing is key for mission‑critical recommendation services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
