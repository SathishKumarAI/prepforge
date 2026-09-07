---
qid: ing_5dbe40651f__aws__local
question: 'Explain: Index Table — Top 6 Data Management Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 413
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:57:46-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A client’s recommendation engine was hitting time‑outs during peak traffic.  
*Task:* I had to re‑design the data layer so queries could scale without sacrificing accuracy.  
*Action:* I applied the **Top 6 Data Management Patterns for Index Tables**:

1. **Single‑Table Design** – Store all related entities in one DynamoDB table, using composite keys to avoid cross‑table joins.  
2. **Global Secondary Index (GSI) per Query Pattern** – One GSI for “user → item” and another for “item → user”, each with a sparse index to keep write costs low.  
3. **Projection Expressions** – Return only needed attributes, reducing I/O.  
4. **Time‑to‑Live (TTL)** – Auto‑expire stale recommendation data, keeping the table lean.  
5. **BatchWriteItem & BatchGetItem** – Reduce round‑trips and cost during bulk updates.  
6. **Conditional Writes** – Ensure idempotency when multiple services update the same item.

*Result:* Query latency dropped from 1 s to <50 ms (95th percentile), throughput scaled to 10× traffic with a 30% cost reduction, and we eliminated the “cold start” bottleneck that had plagued our earlier relational design.  

**Dive Deep & Deliver Results**

I monitored CloudWatch metrics, adjusted GSI read capacity, and iterated until CPU utilization stayed below 70 %. I documented the trade‑offs (e.g., higher write cost vs. lower read cost) so the team could future‑proof the architecture.

*Learning:* A well‑structured index strategy turns a fragile system into a resilient, cost‑effective service—exactly what Amazon expects from its engineers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
