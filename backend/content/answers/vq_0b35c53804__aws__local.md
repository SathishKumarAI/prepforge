---
qid: vq_0b35c53804__aws__local
question: Difference between Rdbms and noSql?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 427
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:38:18-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** At my last role I was tasked to redesign the analytics pipeline for a SaaS product that had hit a 30 % slowdown during peak usage (10k concurrent users).  
> **Task:** Decide whether to keep the existing RDBMS or move to a NoSQL store.  
> **Action:** I compared ACID‑compliant relational databases (Amazon Aurora PostgreSQL) with horizontally scalable key‑value stores (Amazon DynamoDB).  
> - **RDBMS**: Strong schema enforcement, joins, and complex queries; cost ~ $0.12/GB/month for storage plus on‑demand compute.  
> - **NoSQL**: Eventual consistency by default, single‑item throughput up to 3 TB/day with auto‑scaling, cost ~ $1.25 per million read/write units (≈ $0.20/GB/month).  
> I ran a proof‑of‑concept that migrated the most heavily queried tables to DynamoDB and kept reporting workloads on Aurora.  
> **Result:** Query latency dropped from 450 ms to < 50 ms for the hot path, throughput increased by 4×, and infrastructure cost fell by 22 % ($18K/yr). The switch also allowed us to ship a new feature in 3 weeks instead of 8.  
> **Learnings:** Deep dive into data access patterns is critical; schema flexibility can unlock performance but requires careful consistency handling.

**Key Takeaway**

- **RDBMS** excels at complex joins, strict ACID guarantees, and mature tooling—ideal for transactional workloads.  
- **NoSQL** shines with massive horizontal scale, low‑latency key‑value access, and flexible schemas—perfect for high‑velocity analytics or semi‑structured data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
