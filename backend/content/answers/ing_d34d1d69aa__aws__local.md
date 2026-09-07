---
qid: ing_d34d1d69aa__aws__local
question: 'Explain: Playlist Database — Design Spotify | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 459
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:21-05:00'
sources: []
---

**Situation / Task**  
I was asked to architect a playlist service for a music‑streaming platform that could serve millions of users with sub‑second latency and 99.9 % availability.

**Action (Design)**  
*Data model*: A normalized schema in **Amazon Aurora PostgreSQL** – `users`, `playlists`, `playlist_items` (track, order).  
*Caching*: Frequently accessed playlists live in **ElastiCache Redis** (partitioned by user ID) to hit <10 ms.  
*Ingestion pipeline*: New or updated tracks stream into an **Amazon Kinesis Data Stream**, processed by a **Lambda** function that writes to Aurora and invalidates the cache.  
*Search*: Tag‑based playlist discovery uses **OpenSearch** (domain per region).  
*Scalability*: Auto‑scaling Aurora read replicas handle 80 % of traffic; Kinesis shards scale with ingestion rate.  
*Cost*: Spot instances for Lambda concurrency, reserved RDS instances reduce baseline spend by 30 %.  
*Reliability*: Multi‑AZ deployment, cross‑region read replicas, and a fallback “stale cache” strategy guarantee 99.9 % uptime.

**Result (Impact)**  
After launch, average playlist load time dropped from **350 ms to 18 ms**, reducing churn by 12 %. The system handled a peak of **5 M concurrent users** without degradation and saved $120K/month in database costs through Aurora scaling.

**Leadership Principles**  
- **Customer Obsession**: Built low‑latency experience, directly improving user retention.  
- **Ownership / Deliver Results**: Took full ownership of the end‑to‑end pipeline, iterated on metrics until SLA met.

*Bar‑raiser cues*: Demonstrated deep dive into trade‑offs (Aurora vs DynamoDB), quantified impact, and learned from a failed early prototype that lacked caching, leading to redesign.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
