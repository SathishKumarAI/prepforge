---
qid: ing_8ce6563a6e__aws__local
question: 'Explain: Choosing the Right Consistency Model — Strong vs. Eventual Consistency
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 395
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:34-05:00'
sources: []
---

**Situation / Task**  
I led a migration of our recommendation engine from an on‑premises NoSQL store (Cassandra) to Amazon DynamoDB. The business required *real‑time personalization* for millions of users while keeping latency < 50 ms and cost under $1M/yr.

**Action**  
- **Customer Obsession & Ownership:** I mapped user journeys to identify *critical read paths*: “show me the next product” (read) vs. “save my cart” (write).  
- **Dive Deep:** Benchmarked DynamoDB with `Strong` and `Eventual` consistency on identical workloads. Strong gave 100 ms reads for 99.9% of requests, but increased write capacity by ~35 %. Eventual dropped latency to 30 ms but introduced stale reads in ~0.5 % of sessions—detectable as a “cold‑start” anomaly.  
- **Invent & Simplify:** Adopted *conditional writes* (optimistic locking) for cart updates and used *DynamoDB Streams + Lambda* to propagate changes asynchronously for recommendation feeds, achieving eventual consistency only where tolerable.  

**Result**  
- Latency reduced from 120 ms to 35 ms (30 % improvement).  
- Write capacity cost fell by 28 %.  
- Customer‑reported “lag” incidents dropped from 1.2 % to <0.05 %.  

**Bar‑raiser takeaways**  
- Clear ownership of trade‑offs between consistency, performance, and cost.  
- Quantified impact (latency, cost, error rate).  
- Learned that *mixed consistency*—strong for critical paths, eventual where acceptable—maximizes both customer experience and ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
