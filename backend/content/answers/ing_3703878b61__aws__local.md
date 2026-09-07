---
qid: ing_3703878b61__aws__local
question: What Is a Database Index? — Indexing | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 390
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:29:00-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“A database index is a data structure that lets the engine locate rows without scanning every record.”*  
> **Leadership Principles:** Customer Obsession & Dive Deep

### Situation
In a prior role, we built a recommendation service that queried a 10 TB PostgreSQL table of user interactions. Each request hit ~200 k rows, causing latency to climb from 50 ms to >1 s during peak traffic.

### Task
Reduce query latency to <80 ms for 99th‑percentile traffic while keeping cost under $3K/month.

### Action
- **Dive Deep** into the query plan: identified `user_id` and `interaction_timestamp` as the most frequent predicates.  
- Created a **B‑Tree composite index** (`CREATE INDEX ON interactions(user_id, interaction_timestamp DESC)`), which is the native PostgreSQL structure for range queries.  
- Leveraged **Amazon RDS** for managed scaling; added read replicas to offload reporting workloads.  
- Implemented **Query Caching** with ElastiCache Redis for hot keys (top 5k users).  

### Result
Latency dropped from ~1 s to **65 ms** at the 99th percentile, a **70% improvement**. Cost increased by only **12%**, staying well below budget.

---

**Bar‑raiser notes:**  
- Demonstrated *ownership* by diagnosing and fixing a production bottleneck.  
- Showed *depth* with concrete index design and AWS service choices.  
- Quantified impact (latency, cost).  
- Learned from failure: initial indexing on a single column was insufficient; the composite index solved range‑scanning issues.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
