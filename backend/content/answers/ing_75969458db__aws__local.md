---
qid: ing_75969458db__aws__local
question: 'Explain: Operational complexity — What is Database Sharding? - Shard DB
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 446
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:51:52-05:00'
sources: []
---

**Operational Complexity – What Is Database Sharding?**

*Leadership Principles:* **Ownership** (own the problem end‑to‑end) & **Dive Deep** (understand root causes).

**Situation:**  
In 2023 I led a migration of our global e‑commerce catalog from a single MySQL instance to an Amazon Aurora cluster. The monolith hit 200 M writes/day; latency spiked to 250 ms and the DB was throttling, jeopardizing uptime.

**Task:**  
Design a sharding strategy that would keep write throughput <50 ms, preserve ACID for catalog updates, and allow incremental roll‑out with minimal downtime.

**Action:**  
1. **Requirement analysis** – Shard key: `region_id` + `category_hash`.  
2. **Architecture** –  
   * **Aurora Serverless v2** per shard (auto‑scaling up to 10 k RCU).  
   * **AWS Global Accelerator** for low‑latency routing.  
   * **DynamoDB** as a lightweight metadata store for shard mapping.  
3. **Implementation** –  
   * Created 12 shards (6 regions × 2 category clusters).  
   * Used AWS Database Migration Service to sync live data with zero‑downtime cutover.  
4. **Monitoring & Automation** – CloudWatch dashboards + Lambda auto‑rebalancing when a shard exceeds 70 % RCU.

**Result:**  
- Write latency dropped from 250 ms to <45 ms (92 % improvement).  
- Monthly cost fell from $120k to $85k due to better resource utilization.  
- SLA uptime improved from 99.6 % to >99.99 %.  

*Bar‑raiser takeaway:* I owned the entire migration, dove deep into performance metrics, quantified impact with real numbers, and iterated on failure (initial shard over‑provisioning) to refine the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
