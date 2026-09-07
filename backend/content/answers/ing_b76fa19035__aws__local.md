---
qid: ing_b76fa19035__aws__local
question: What is Database Sharding? — What is Database Sharding? - Shard DB Explained
  - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 436
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:30-05:00'
sources: []
---

**Question:** *What is database sharding?*

**Answer (Amazon‑style)**  

> **Situation / Task** – At my previous role I led the migration of a 12 TB user‑profile store that was hitting 1,200 QPS and 4 s latency. The growth forecasted a 10× increase in traffic within two years.  
>   
> **Action** – I introduced *horizontal sharding* (data partitioning by user ID hash) to split the monolith into ten independent PostgreSQL clusters on RDS Aurora Serverless v2. Each shard handled ~120 GB and ~120 QPS, enabling automatic scaling with minimal admin overhead.  
>   
> **Result** – Post‑shard latency dropped from 4 s to 150 ms (95th percentile), throughput rose to 12,000 QPS, and cost fell by 30% due to better resource utilization. We also eliminated single‑point failures: each shard ran in a multi‑AZ deployment, giving us >99.99 % availability.  
>   
> **Leadership Principles** – *Ownership* (I took end‑to‑end responsibility for the migration), *Dive Deep* (analyzed query patterns and sharding key distribution to avoid hotspots).  
>   
> **AWS Services & Trade‑offs** – Used RDS Aurora Serverless v2 (auto‑scaling, pay‑per‑second) and Elastic Load Balancing to route shard traffic. The trade‑off was increased complexity in application logic (routing queries to the correct shard), but we mitigated this with a lightweight service mesh that cached shard mappings.  

**Bar‑raiser note:** I demonstrated ownership by driving a complex technical change, deep dive into data patterns, quantified impact via latency and cost metrics, and learned from early shard‑hotspot failures by adjusting the hash function.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
