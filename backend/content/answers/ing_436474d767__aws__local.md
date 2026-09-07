---
qid: ing_436474d767__aws__local
question: 'Explain: So whether it''s an ASUS, Dell, Lenovo — AWS re:Invent 2021 -
  Which NoSQL database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 474
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:23-05:00'
sources: []
---

**Situation / Task**  
While leading a global retail team, we needed a fast, highly‑available catalog service that could ingest millions of product updates daily and serve real‑time search queries to ~10 M concurrent users worldwide.

**Action**  
I evaluated DynamoDB, Amazon DocumentDB (MongoDB‑compatible), and Amazon Keyspaces (Cassandra‑compatible).  
* **DynamoDB**: 1 ms single‑digit latency, built‑in auto‑scaling, pay‑per‑request.  
* **DocumentDB**: MongoDB API support but still a managed RDS service—higher IOPS cost and limited horizontal scaling for write‑heavy workloads.  
* **Keyspaces**: Linear scalability for writes, but query patterns required secondary indexes that added complexity.

After a dive deep into our access patterns (≈70 % read‑only queries, 30 % writes, with a hot key “productID”), I chose **DynamoDB**. We leveraged:

| Feature | Reason |
|---------|--------|
| Provisioned/On‑demand capacity | Handles burst traffic during sales |
| Global Tables | Multi‑region replication for low latency |
| DynamoDB Streams + Lambda | Real‑time analytics pipeline |

We migrated in 4 sprints, reduced read latency from 25 ms to <3 ms (30 % drop in page load time), and cut infrastructure cost by 18 % YoY.  

**Result**  
The catalog served 12 M unique daily visits with 99.999% availability during a flash‑sale event, while staying under the $1.2 M annual budget.

**Learnings**  
*Ownership*: I owned the migration risk and built fallback scripts.  
*Dive Deep*: We profiled query patterns to justify DynamoDB’s strengths.  
*Bias for Action*: Cut decision time from 3 weeks (vendor review) to 3 days (internal proof‑of‑concept).  

**Bar‑raiser takeaways** – The candidate showed ownership, quantified impact, and a clear trade‑off analysis—exactly what we look for at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
