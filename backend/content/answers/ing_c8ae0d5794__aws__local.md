---
qid: ing_c8ae0d5794__aws__local
question: 'Explain: on the either side we arrive at — Google Docs System design |
  Part 1| Operational transformation | differentail synchronisation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 483
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:55:39-05:00'
sources: []
---

**Situation (S)**  
At my last role I was tasked with redesigning the real‑time collaboration engine for a document editor that served 10 M active users daily. The existing naïve “pull‑latest” approach caused high latency and data loss during network partitions.

**Task (T)**  
I had to build an *Operational Transformation* (OT) system that guarantees eventual consistency while keeping the user experience fluid, all within our cloud budget.

**Action (A)**  
1. **Requirements & Scope** – 99.9 % success rate for concurrent edits, <200 ms round‑trip latency on 95th percentile, cost ≤ $2k/month.  
2. **Design** –  
   * **Client‑side**: each edit is wrapped in a lightweight operation (insert/delete) and stamped with a monotonically increasing sequence number.  
   * **Server‑side**: a stateless Lambda orchestrator receives operations, stores them in an Amazon DynamoDB “op‑log” table (partitioned by document ID), and triggers a Step Function that applies the OT algorithm (transform incoming ops against concurrent ones).  
   * **Conflict resolution**: use *Operational Transformation* to reorder operations; fall back to CRDTs for rare edge cases.  
3. **Scalability & Availability** – DynamoDB auto‑scales with on‑demand capacity; Lambda/Step Functions provide high availability and linear scaling under bursty traffic.  
4. **Cost control** – EventBridge schedules a nightly cleanup job that truncates the op‑log after 30 days, keeping storage below $500/month.

**Result (R)**  
- Latency dropped from 450 ms to <180 ms (95th percentile).  
- Edit loss rate fell from 0.8 % to <0.01 %.  
- Monthly cost stayed under the $2k target while supporting a 40 % traffic spike during product launches.

**Reflection** – I learned that *Ownership* means iterating on both client and server until metrics meet user expectations, and *Dive Deep* is essential when diagnosing rare merge conflicts. This design now serves our next‑gen collaborative platform with minimal operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
