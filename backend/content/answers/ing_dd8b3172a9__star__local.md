---
qid: ing_dd8b3172a9__star__local
question: 'Explain: No Replication — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 405
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:51:15-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup we were migrating our legacy transactional system to PostgreSQL while keeping the same 15‑million record ledger that powers daily risk reports. The old system replicated data across two nodes for high availability, but our new deployment had strict cost constraints and the vendor didn’t support multi‑region replication out of the box.

**Task:** I needed to design a “no replication” strategy that would still meet SLA requirements: 99.9% uptime, sub‑second query latency, and zero data loss during failover.

**Action:**  
1. **Logical Partitioning:** I split the table into sharded partitions based on customer ID ranges, each stored on separate physical disks to avoid a single point of failure.  
2. **Write‑Ahead Logging (WAL) Shipping:** Configured asynchronous WAL shipping to a standby node that only applied logs after they were fully committed, keeping it up‑to‑date without consuming write bandwidth.  
3. **Read Replicas via Streaming:** Set up lightweight read replicas that streamed the WAL and served analytics queries, freeing the primary for writes.  
4. **Failover Automation:** Implemented a custom health‑check script using pg_isready; on failure it promoted the standby to primary in under 30 seconds, with minimal downtime.

**Result:** The system maintained 99.95% availability during a two‑week test period, with average read latency dropping from 120 ms to 45 ms. We saved $12k/month on infrastructure while ensuring no data loss. I learned that “no replication” doesn’t mean “no redundancy”; careful WAL shipping and logical sharding can provide resilience without the cost of full synchronous replication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
