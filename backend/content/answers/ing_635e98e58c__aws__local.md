---
qid: ing_635e98e58c__aws__local
question: 'Explain: NoSQL Data Models — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 456
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:09:45-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Leadership Principles:* **Customer Obsession**, **Ownership**

---

### Situation  
While redesigning the recommendation engine for a social‑network app, I needed to store “user–friend” relationships and “post likes” in a way that scales to billions of users while keeping latency under 50 ms.

### Task  
Design a NoSQL data model that supports fast friend‑list queries, efficient like counts, and easy sharding for millions of concurrent writes.

### Action  

1. **Choose DynamoDB** – fully managed, low‑latency, auto‑scaling.  
2. **Table 1: `Friends`** – *Partition Key:* `UserID`, *Sort Key:* `FriendID`.  
   - One item per directed edge; allows O(1) retrieval of a user’s friends and supports graph traversals via secondary indexes (`FriendOf`).  
3. **Table 2: `Likes`** – *Partition Key:* `PostID`, *Sort Key:* `UserID`.  
   - Enables quick count aggregation with `Scan` + `Count` or DynamoDB Streams to update a materialized `LikeCount` in a cache (ElastiCache Redis).  
4. **Write‑through caching** – use AWS Lambda + API Gateway to route writes through a Kinesis stream, batch updates into DynamoDB, and push real‑time metrics to CloudWatch.  

### Result  
- *Scalability:* Handled 1 B users with < 30 ms read latency during peak hours.  
- *Cost:* Reduced storage cost by 35% vs. relational schema (no join tables).  
- *Reliability:* Achieved 99.999% availability using DynamoDB’s multi‑AZ replication and automatic backups.

### Learnings  
The first iteration under‑estimated write amplification; adding a dedicated “likes” stream eliminated 20 % of duplicate writes. I now always prototype with a small data set, simulate traffic patterns, and iterate on the partitioning strategy before production rollout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
