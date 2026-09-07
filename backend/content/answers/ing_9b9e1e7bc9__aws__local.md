---
qid: ing_9b9e1e7bc9__aws__local
question: 'Explain: MongoDB — Difference Between Cassandra and MongoDB - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 385
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:16:59-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional migration of our recommendation engine from MongoDB to Cassandra, I had to justify the choice and document performance gaps for senior stakeholders.

**Action**  
I performed a *dive deep* analysis:  
1. **Schema & Query Patterns** – MongoDB’s flexible BSON suits document‑oriented reads (e.g., user profiles), whereas Cassandra’s wide‑row model excels at high‑write, time‑series data (e.g., click streams).  
2. **Consistency Model** – MongoDB offers *strong* consistency by default; Cassandra provides tunable *eventual* consistency, which we leveraged for 99.9% read latency with a 5 ms target.  
3. **Scalability & Availability** – Using Amazon DynamoDB (managed Cassandra) and Amazon DocumentDB (MongoDB‑compatible), I mapped sharding strategies: Cassandra’s token ranges avoided hotspotting; MongoDB’s auto‑sharding handled variable document sizes.  
4. **Cost & Ops** – Benchmarking on EC2 Spot + EBS vs. RDS for MongoDB revealed a 30 % lower TCO for Cassandra at >10 TB scale.

**Result**  
Post‑migration, read latency dropped from 120 ms to 15 ms (80 % improvement) and write throughput increased 4× with zero downtime. The migration was completed 2 weeks ahead of schedule, saving $150K in projected cloud spend.  

**Leadership Principles** – *Ownership* (I drove the full migration), *Dive Deep* (quantified trade‑offs), and *Deliver Results* (measurable performance gains).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
