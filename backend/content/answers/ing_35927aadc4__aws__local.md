---
qid: ing_35927aadc4__aws__local
question: 'Explain: Arrays & Hashing (9 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 642
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:45-05:00'
sources: []
---

**Situation (S)**  
I was leading the backend team at a fintech startup that needed to expose an API for real‑time fraud detection. The core of the engine required quick lookups, range queries, and sliding‑window analytics—exactly the problems Neetcode 150’s “Arrays & Hashing” set tackles. Our existing stack (PostgreSQL + Redis) couldn’t keep up with the 1 M requests/day spike during peak trading hours.

**Task (T)**  
Redesign the data ingestion pipeline to handle:
- O(1) membership checks for blacklisted accounts  
- O(log n) range queries for transaction amounts  
- Constant‑time sliding‑window aggregates for velocity monitoring  

All while keeping latency < 10 ms and cost under $5k/month.

**Action (A)**  
I broke the problem into three micro‑services, each built on a single AWS service that maps cleanly to the data‑structure patterns:

| Problem | Design Pattern | AWS Service | Why it fits |
|---------|----------------|-------------|-------------|
| Blacklist lookup | **Hash Table** | DynamoDB (partition key = account_id) with LSI for status | O(1) read, auto‑scaling |
| Range query | **Sorted Array + Binary Search** | Amazon Neptune graph with a range index on transaction_amount | Efficient O(log n) traversal |
| Sliding window | **Deque / Circular Buffer** | Kinesis Data Streams → Lambda (in‑memory deque) → S3 for persistence | Low‑latency in‑flight aggregation, durable store |

I added an AWS Step Functions orchestrator to route each request through the appropriate service, ensuring *seamless* failure handling. For cost, I used DynamoDB on-demand and reserved Kinesis capacity after profiling 95th percentile traffic.

**Result (R)**  
- Latency dropped from 120 ms to **8 ms** average.  
- Throughput increased from 200 req/s to **1.2 M req/s** during peak.  
- Monthly cost fell from $12k to **$4.3k**.  
- The system handled a sudden 50% traffic surge without any downtime.

**Learnings**  
Ownership: I owned the full pipeline, not just the algorithmic part.  
Dive Deep: Profiling revealed that the Redis cache hit‑rate was only 65 %; moving to DynamoDB resolved contention.  
Bar‑raiser cue: Quantified impact (latency, cost) and a concrete failure mode (cache evictions) were highlighted.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering sub‑10 ms latency for fraud alerts protects customers’ funds.  
- **Ownership** – I steered the end‑to‑end redesign, from data structures to AWS deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
