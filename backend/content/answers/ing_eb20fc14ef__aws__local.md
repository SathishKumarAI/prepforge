---
qid: ing_eb20fc14ef__aws__local
question: 'Explain: Cardinality Examples'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 503
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:50-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning a recommendation engine for an e‑commerce platform that had grown from 10 k to 2 M active users. The core model needed to ingest user‑item interaction data and output personalized rankings in real time.

**Action**  
1. **Data ingestion & cardinality definition** – I mapped *users* (high cardinality: millions) to *items* (moderate cardinality: ~500k). We also defined *user‑profile attributes* (low cardinality: 50 features) and *item metadata* (medium cardinality: 200 features).  
2. **Pipeline design** – Using **Amazon Kinesis Data Streams** for low‑latency ingestion, **Glue** to transform and deduplicate high‑cardinality user events, and **DynamoDB** with a composite key `(user_id, item_id)` to store interaction scores (ensuring eventual consistency).  
3. **Model training** – Leveraged **Amazon SageMaker** with an AutoML pipeline that automatically tuned embedding dimensions based on cardinality: 64 for users, 32 for items.  
4. **Serving** – Deployed the model as a SageMaker endpoint behind **API Gateway**, backed by **AWS Lambda** to handle request throttling and caching (using ElastiCache Redis) for hot items.

**Result**  
- Reduced recommendation latency from 1 s to <200 ms per request.  
- Increased click‑through rate by **18%** and revenue lift of **$3.2M/month**.  
- Cost savings: cut storage spend by 30% by pruning low‑impact cardinality features.

**Learning & Ownership**  
I *owned* the end‑to‑end pipeline, performed a post‑mortem on an earlier spike where latency surged (root cause: unbounded user_id cardinality leading to table hot spots). I implemented **partitioned writes** and introduced a **time‑based TTL** in DynamoDB, turning a failure into a scalable design.  

> *Leadership Principles:* **Customer Obsession** – delivering faster, more relevant recommendations; **Ownership** – end‑to‑end responsibility; **Dive Deep** – dissecting cardinality impact on performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
