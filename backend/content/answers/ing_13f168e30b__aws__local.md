---
qid: ing_13f168e30b__aws__local
question: 'Explain: SQL Databases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 398
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:10:06-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation engine for a video‑on‑demand platform, I had to decide whether to store user profiles in a NoSQL or an SQL database. The goal was to support 10 M concurrent users with <200 ms query latency and ensure ACID compliance for billing data.

**Action**  
I **owned** the decision by running a benchmark (5 k read/write ops/sec) on Amazon Aurora PostgreSQL versus DynamoDB. I designed a schema that normalised user‑profile attributes into `users`, `preferences`, and `watch_history` tables, adding composite indexes on `(user_id, timestamp)` for fast range scans. I used **Amazon RDS** with Multi-AZ for high availability, read replicas for scaling reads, and **Aurora Serverless v2** to auto‑scale during traffic spikes. To keep costs low, I enabled the *performance insights* feature to identify hot spots and added caching via Amazon ElastiCache (Redis) for the most frequent queries.

**Result**  
The solution handled 12 k ops/sec with <180 ms latency, 99.999% uptime, and reduced infrastructure cost by **18 %** compared to a DynamoDB‑only approach. The ACID guarantees prevented billing discrepancies that had caused a $2 M loss in a previous pilot.

---

### Leadership Principles

- **Customer Obsession:** Ensured reliable, low‑latency service for millions of users.
- **Ownership:** Took full responsibility for architecture, benchmarking, and cost optimisation.
- **Dive Deep & Deliver Results:** Analyzed performance metrics, iterated on indexing strategy, and quantified impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
