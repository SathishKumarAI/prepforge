---
qid: ing_d80580a235__star__local
question: 'Explain: Scalability Needs — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 341
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:41:06-05:00'
sources: []
---

**Situation**  
In my last role I led the redesign of a recommendation engine for an e‑commerce platform that served over 50 M daily users. Our real‑time model needed to ingest clickstream data, update user embeddings, and serve personalized product suggestions with sub‑200 ms latency.

**Task**  
I had to decide between a strongly consistent architecture (e.g., single‑region relational DB) or an eventually consistent one (distributed NoSQL) while keeping the system highly available and fault tolerant across global regions.

**Action**  
I first benchmarked read/write latencies on PostgreSQL vs. Cassandra under simulated traffic. Strong consistency guaranteed perfect ordering of user events but introduced 150 ms write stalls during regional outages. Eventual consistency offered 30 ms writes with a small staleness window (≤ 2 s). I implemented a hybrid approach: critical “purchase” events went through the strong‑consistency store to trigger immediate inventory updates, while all other analytics data flowed into Cassandra with conflict‑resolution via last‑write-wins. I also added a background reconciliation job that merged stale data back into PostgreSQL every 10 min.

**Result**  
The system achieved 99.9% uptime globally and reduced recommendation latency from 250 ms to 180 ms. User engagement metrics rose 12%, while inventory accuracy improved by 4%. I learned that the right consistency model depends on the data’s business impact; combining both can deliver scalability without sacrificing correctness where it matters most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
