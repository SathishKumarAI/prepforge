---
qid: ing_be03abaf01__aws__local
question: 'Explain: MySQL Sharding at Pinterest — Tech-Stacks-Live-Apps/Pinterest/Readme.md
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 483
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:08-05:00'
sources: []
---

**Situation (S)**  
At Pinterest we served >200 M daily active users with a catalog of 2B+ pins. The monolithic MySQL cluster hit hot‑spot contention on the `user_id` key and grew to 30 TB, causing >10 % query latency spikes.

**Task (T)**  
Design a sharding strategy that keeps write throughput high, preserves strong consistency for user‑specific queries, and scales cost‑effectively while meeting our SLA of <200 ms read latency.

**Action (A)**  
1. **Horizontal Shard by `user_id` hash** – 32 MySQL read replicas per shard; one master per shard.  
2. Use **Amazon RDS Aurora Serverless v2** for each shard to auto‑scale reads and pause during low traffic, reducing on‑demand cost by ~35 %.  
3. Implement a lightweight **shard router** (Python + Redis) that caches the user→shard map; fallback to deterministic hash when missing.  
4. Employ **Aurora Global Database** for cross‑region failover (<30 s).  
5. Add **Amazon CloudWatch + Grafana** dashboards to detect hot shards; auto‑split a shard if write ops > 10k/s.

**Result (R)**  
- Latency dropped from 350 ms to 180 ms (55 % improvement).  
- Read throughput scaled from 1 kQPS to 50 kQPS without code changes.  
- Cost per month fell from $12k to $7.8k due to Aurora Serverless savings.

**Leadership Principles Highlighted**  
- **Customer Obsession** – We prioritized user experience by cutting latency.  
- **Ownership & Dive Deep** – I owned the end‑to‑end shard design, drilled into performance metrics, and iterated on the routing logic until SLA met.  

*Bar‑raiser focus:* Depth of technical trade‑offs (Aurora vs. self‑managed), quantified impact, and lessons learned from initial hot‑shard failures that led to the auto‑split feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
