---
qid: ing_a36455a3eb__faang__local
question: 👎 What are disadvantages of DynamoDB? — AWS-Services/1_Databases/AmazonDynamoDB/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 536
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:04:44-05:00'
sources: []
---

**Clarify**  
The question asks for *disadvantages* of Amazon DynamoDB, an AWS NoSQL key‑value/column store. I’ll assume the context is a candidate who’s already familiar with RDS and other NoSQL options, and that “disadvantages” refers to operational, cost, or feature trade‑offs relative to relational databases.

**Approach**  
1. List major categories (cost model, consistency, schema limits).  
2. For each, give concrete examples and why they matter in real workloads.  
3. Mention mitigations briefly to show depth but keep within word limit.

**Depth**

| Category | Disadvantage | Why it matters |
|----------|--------------|----------------|
| **Cost & Scaling** | *On‑demand vs Provisioned*: high read/write throughput can drive costs unexpectedly; reserved capacity requires accurate forecasting. | Unexpected traffic spikes → burst cost > $10k/month. |
| **Consistency** | Only eventual consistency for cross‑partition reads (unless using `StronglyConsistentRead`). | Latency‑sensitive apps may see stale data if not careful. |
| **Schema & Query Flexibility** | No joins, limited secondary indexes; requires denormalization and careful key design. | Complex analytics or ad‑hoc queries become cumbersome or require a separate OLAP layer. |
| **Transactions** | 25‑item limit per transaction; no multi‑table ACID guarantees beyond that. | Larger business logic can’t be wrapped in a single atomic op without redesign. |
| **Feature Parity** | No stored procedures, triggers, or full SQL support. | Migration from RDBMS often needs refactor of business logic. |

**Edge Cases**  
- *Hot partitions*: uneven key distribution leads to throttling.  
- *Large items (>400 KB)*: must be split into multiple items or use S3 + pointer.  
- *Backups & restores*: point‑in‑time recovery can take hours for very large tables.

**Optimize & Communicate**  
I’d highlight that DynamoDB shines with predictable, single‑partition workloads and low‑latency global access, but when you need complex queries, transactional guarantees across many items, or cost certainty under variable load, a relational DB or a hybrid approach (e.g., Aurora + DAX) may be preferable. This balanced view shows I understand both the strengths and realistic trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
