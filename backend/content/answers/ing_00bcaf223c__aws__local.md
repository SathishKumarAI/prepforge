---
qid: ing_00bcaf223c__aws__local
question: 'Explain: Database Types — How to Decide Which Type of Database to Use'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:26:10-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation (S)** – In Q2 2025 I led a cross‑functional team to launch an on‑demand recommendation engine for our marketplace. The core requirement was low latency (<10 ms) reads and high write throughput (>50k ops/s) with eventual consistency.

> **Task (T)** – Choose the right database technology that balances performance, cost, and future scalability while keeping the user experience seamless.

> **Action (A)**  
> 1. *Dive Deep*: I benchmarked relational (Amazon RDS Aurora PostgreSQL), document (Amazon DynamoDB), and graph (Neptune) engines against our workload profile.  
> 2. *Design Decision*: Opted for **DynamoDB** with a Global Secondary Index for user‑specific filters, coupled with **AWS Lambda** to materialize denormalized recommendation vectors into an S3 data lake for offline ML training.  
> 3. *Scalability & Availability*: Leveraged DynamoDB’s on‑demand capacity and auto‑scaling; enabled cross‑region read replicas for latency in APAC.  
> 4. *Cost Control*: Applied partition key sharding to avoid hot partitions, resulting in a 30 % reduction in provisioned throughput costs.

> **Result (R)** – The new stack delivered <8 ms average latency, handled 70k ops/s during peak traffic, and cut database spend by $120k annually. User satisfaction scores rose from 4.1 to 4.6/5, directly impacting conversion rates (+12%).

**Learning & Bar‑raiser signals**

- Demonstrated ownership by leading end‑to‑end design and cross‑team alignment.  
- Showed depth: concrete benchmarks, trade‑off analysis (latency vs cost).  
- Quantified impact with real metrics (latency, ops/s, cost savings).  
- Reflected on a failed attempt with an RDS cluster that hit 300 ms latency; pivoted to NoSQL after root‑cause analysis.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
