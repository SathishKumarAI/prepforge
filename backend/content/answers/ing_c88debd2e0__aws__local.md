---
qid: ing_c88debd2e0__aws__local
question: 'Explain: Primary and Unique Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 382
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:31-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the redesign of our recommendation engine’s data layer to support real‑time personalization for ~3 M active users. The key requirement was that every user profile query hit a single row in <5 ms while keeping storage costs low.

**Action – Design Choices**  
1. **Primary Index (Partition Key + Sort Key)** – I chose *UserID* as the partition key and *Timestamp* as the sort key on DynamoDB. This guarantees uniqueness, enforces ownership of each profile, and supports range queries for user history.  
2. **Unique Global Secondary Index (GSI)** – To enforce uniqueness on an email address (a mutable field), I added a GSI with *Email* as the partition key and a static sort key (`'EMAIL'`). The index is marked **UNIQUE** in the application layer to avoid duplicates, leveraging DynamoDB’s conditional writes.  
3. **Secondary Non‑unique Indexes** – For cohort analysis we added a GSI on *Country* + *SignupDate*, enabling efficient scans without scanning the entire table.

**Result**  
- Query latency dropped from 12 ms to 4 ms (71% improvement).  
- Storage cost fell by 35 % due to sparse key design.  
- Data integrity errors reduced to zero in production after the unique GSI enforcement.

**Reflection & Learnings**  
I owned the trade‑off between write throughput and read speed, iterating on provisioned capacity until we hit a sweet spot of 2 k RCU/WCU. The experience reinforced that *Customer Obsession* drives us to measure latency against real user impact, while *Dive Deep* ensures every index choice is justified by data patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
