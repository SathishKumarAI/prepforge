---
qid: ing_6701842dd1__aws__local
question: 'Explain: Scalability — Cassandra Vs MongoDB Comparison | MongoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 643
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:17:58-05:00'
sources: []
---

**Situation / Task**

At my previous company I led the migration of a real‑time recommendation engine from a legacy Oracle stack to a NoSQL solution that could handle 3 M requests per second with <5 ms latency. The team had to decide between **Cassandra** (wide‑column) and **MongoDB** (document).  

**Action**

1. **Dive Deep into Requirements**  
   * *Write‑heavy analytics* – each user event creates a row.  
   * *Time‑series reads* – aggregate last 24 h per user.  
   * *High write availability* – 99.999% uptime across three AZs.

2. **Prototype & Benchmark**  
   * Spin up **Amazon Keyspaces (Cassandra)** and **Amazon DocumentDB / MongoDB Atlas** on EC2 instances.  
   * Load 10 M events using `cassandra-driver` vs `pymongo`.  
   * Measure write latency, read amplification, and cluster size.

3. **Design Decision**  
   * **Cassandra**: linear scalability, tunable consistency (`QUORUM`), native support for time‑series via partition key = user_id + date.  
   * **MongoDB**: richer query language, secondary indexes, but write path slower (compaction overhead).  

4. **Implementation & Cost Analysis**  
   * Deploy Cassandra on **Amazon Keyspaces** – pay per read/write request; ~\$0.25 M/month for 3 M rps.  
   * Deploy MongoDB Atlas – ~$0.35 M/month, higher IOPS cost but easier schema evolution.

5. **Result**

| Metric | Cassandra (Keyspaces) | MongoDB Atlas |
|--------|-----------------------|---------------|
| Avg write latency | 2 ms (95th pct.) | 8 ms (95th pct.) |
| Read amplification for last‑24h query | 1× | 3× |
| Cost per 10 M writes | \$4.5k | \$7.8k |
| Uptime SLA | 99.999% (built‑in) | 99.99% (manual sharding) |

**Result** – I championed Cassandra, reducing write latency by **60 %** and cutting costs by **35 %**, while maintaining the required 5 ms response time.

**Leadership Principles Reflected**

* **Customer Obsession** – We chose the system that delivered the fastest experience for our end users.  
* **Ownership & Dive Deep** – I owned the end‑to‑end benchmark, analyzed trade‑offs, and drove a data‑driven decision.  

**Bar‑raiser Takeaway**

A candidate should demonstrate:  
* Quantified impact (latency, cost).  
* Deep technical dive (benchmark design, consistency tuning).  
* Learning loop – we iterated on the prototype after initial failures in write scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
