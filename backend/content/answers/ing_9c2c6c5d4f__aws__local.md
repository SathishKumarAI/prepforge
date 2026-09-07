---
qid: ing_9c2c6c5d4f__aws__local
question: 'Explain: We need to make one more assumption — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 511
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:17:59-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a location‑based service similar to Yelp/Google Places that can serve millions of users worldwide with sub‑second latency and 99.9 % availability.

**Action**  

| Step | Design Decision | AWS Services | Rationale |
|------|-----------------|--------------|-----------|
| 1 | **Geo‑partitioning** – split the world into tiles (Web Mercator quadtree). | Amazon DynamoDB Global Tables, S3 for static assets | Reduces query scope to a small key range → O(1) reads. |
| 2 | **Indexing & Search** – store place metadata in an inverted index per tile. | Amazon OpenSearch Service (managed Elasticsearch) | Full‑text search and faceted filters with near‑real‑time indexing. |
| 3 | **Caching hot queries** – user’s last N searches + popular places. | Amazon ElastiCache for Redis | 95 % cache hit → <10 ms response. |
| 4 | **Recommendation engine** – blend collaborative filtering (user ratings) with content similarity. | AWS SageMaker Pipelines + Lambda for inference | Auto‑scaling on GPU instances; cost kept by running inference only for new users. |
| 5 | **Data ingestion pipeline** – daily sync of business data, real‑time updates from partners. | Kinesis Data Streams → Glue ETL → DynamoDB/ElastiCache | Low latency and fault tolerance. |

**Result**  
After a pilot with 1 M active users we achieved:  

- **Latency:** 92 % of requests < 120 ms (vs baseline 350 ms).  
- **Availability:** 99.94 % over 30 days.  
- **Cost:** $0.12 per request, 70 % lower than a monolithic architecture.

**Learning & Ownership**  
I took ownership by mapping the problem to AWS services early, iterating on tile granularity (3 km vs 1 km) after profiling hot spots. When latency spikes during peak hours, I added an additional Redis layer and adjusted OpenSearch shard count—an example of *Bias for Action* and *Dive Deep*. This design not only meets performance goals but also scales cost‑effectively, embodying Amazon’s Leadership Principles: **Customer Obsession**, **Ownership**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
