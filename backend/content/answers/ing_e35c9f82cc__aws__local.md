---
qid: ing_e35c9f82cc__aws__local
question: 'Explain: When to Use Eventual Consistency — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 401
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:10-05:00'
sources: []
---

**Situation & Task**  
While designing a global e‑commerce catalog for my startup, I had to decide between *strong* and *eventual consistency* for product inventory updates across North America, Europe, and Asia. The goal was to keep the user experience fast while ensuring accurate stock counts during flash sales.

**Action (Technical & Design)**  
I mapped the workload: 70 % of traffic were read‑heavy “browse” requests; only 30 % were write‑heavy “checkout” events.  
- **Strong consistency** would force all replicas to sync on every write, causing ~200 ms latency spikes and a 15 % increase in RPS cost (due to synchronous DynamoDB Streams).  
- **Eventual consistency** allowed writes to be acknowledged immediately, with updates propagated asynchronously via **Amazon DynamoDB Global Tables + Streams → Lambda → S3 for audit**.  

I implemented *read‑through caching* with **DAX** and a *time‑to‑live* of 5 s for inventory counts. For critical “last‑minute” checks before checkout, I added a synchronous “pre‑flight” query to the primary replica.

**Result**  
Latency dropped from 350 ms to <70 ms for 95 % of reads; cost savings were ~22 k/month. During a high‑traffic sale, inventory drift never exceeded ±2 units per SKU (≤0.01 %).  

**Reflection & Learning**  
I owned the trade‑off by quantifying latency vs. accuracy, diving deep into traffic patterns, and iterating with A/B tests—demonstrating *Customer Obsession* and *Dive Deep*. The bar‑raiser will note that I balanced immediate user experience against data correctness while keeping costs in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
