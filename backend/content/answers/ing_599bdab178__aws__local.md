---
qid: ing_599bdab178__aws__local
question: 'Explain: MQL (Mongo Query Language)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 408
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:48:31-05:00'
sources: []
---

**Situation / Task**  
While architecting a recommendation engine for an e‑commerce platform, I had to migrate a legacy relational DB to **MongoDB** and expose its data through a serverless API. The team needed a quick way to write complex queries on the document store—hence Mongo Query Language (MQL).

**Action**  
I introduced MQL as a JSON‑based DSL that mirrors SQL semantics but operates on nested documents. I built an abstraction layer in TypeScript, mapping high‑level business intents (“find products with price < $20 and rating ≥ 4”) to `find`, `aggregate`, and `lookup` pipelines.  
I used **Amazon DocumentDB** (compatible with MongoDB) behind **AWS Lambda** for compute, **API Gateway** for throttling, and **CloudWatch** for observability. To keep costs low, I leveraged **Provisioned Concurrency** only during peak hours and **Auto Scaling** for storage.

**Result**  
Within 6 weeks the migration was complete; query latency dropped from 250 ms (SQL) to 45 ms on average, and read throughput increased by 3×. The new API handled a 400% traffic spike without provisioning extra instances, saving ~30% on compute spend.

**Reflection**  
I practiced **Customer Obsession** by prioritizing end‑user experience through low latency. I exercised **Ownership** by owning the full migration lifecycle and **Dive Deep** into MQL’s aggregation framework to avoid pitfalls like unindexed field scans. The biggest failure was an initial mis‑estimate of index cardinality; after profiling with `explain()`, we added compound indexes that cut query time by 70%. This iterative learning loop is what I bring to every AWS challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
