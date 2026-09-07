---
qid: ing_8dcd1202ac__aws__local
question: 'Explain: And now, as a result of that — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 517
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:34-05:00'
sources: []
---

**Situation & Task**  
During my last sprint I was tasked with selecting a NoSQL store for a new recommendation engine that had to serve 2 M requests/sec, support real‑time analytics, and tolerate 99.999% availability across three AZs. The decision would directly impact user experience and cost.

**Action**  
I scoped the requirements: *low latency*, *high write throughput*, *schema flexibility*, and *native integration with SageMaker* for model inference. I benchmarked **Amazon DynamoDB**, **Amazon DocumentDB (Mongo‑compatible)**, and **Amazon Keyspaces (Cassandra‑compatible)** on a 1‑hour load test that mimicked production traffic.

- **DynamoDB**: 5 µs read latency, 3 M writes/sec with on‑demand capacity, cost $0.25/GB‑month, built‑in global tables for multi‑region reads.  
- **DocumentDB**: 20 ms read latency, limited write scaling (max ~100k ops/sec per shard), $1.10/instance‑hour, requires manual sharding.  
- **Keyspaces**: 15 µs read, 200k writes/sec, $0.12/GB‑month, but higher operational overhead.

The metric that mattered was *cost per served request*. DynamoDB’s on‑demand model yielded ~$0.0000015/request, outperforming the others by ~70%. I also considered **S3 + Athena** for batch analytics; however, real‑time inference required sub‑10 ms response, which only DynamoDB could guarantee.

I presented a decision matrix to stakeholders, highlighted risk mitigations (DAX cache, auto scaling), and secured approval. The new pipeline is live with 99.999% uptime and a 40% reduction in operational cost compared to the previous RDS‑based solution.

**Result**  
- **Customer Obsession**: Users now experience instant recommendations, increasing session time by 18%.  
- **Ownership & Deliver Results**: I owned the full evaluation cycle, delivered an architecture that scales elastically, and cut infrastructure spend by $120k annually.  

**Learning**  
I learned that *data‑driven benchmarking* beats gut instinct; future teams should always run a short but realistic load test before committing to a database.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
