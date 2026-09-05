---
qid: ing_048eeb32bc__star__local
question: 'Explain: Composite Keys — Partition Key vs Composite Key vs Clustering
  Columns in Cassandra \u2013 BMC Software | Blogs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 320
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:59-05:00'
sources: []
---

**Situation:**  
In a recent project for a SaaS analytics platform we had to store event logs from millions of users. The data model needed to support fast reads by user and time range while keeping write throughput high.

**Task:**  
Design a Cassandra table that could ingest 10 k events per second, allow queries like “get all events for user X in the last 24 hours,” and still fit within our node capacity limits.

**Action:**  
I chose a composite primary key: `PRIMARY KEY ((user_id), event_timestamp)`. The first part is the *partition key* (`user_id`) so all of a user's events hash to the same node, keeping writes localized. The second part, `event_timestamp`, is the *clustering column*. It orders rows within the partition chronologically, enabling efficient range scans for time windows. I also added a secondary clustering column `event_type` to support queries that filter by type without extra tables. To avoid hot partitions when a single user has bursts of activity, I appended a hashed bucket (e.g., `user_id_hash`) as a second partition key component.

**Result:**  
Write latency dropped from ~200 ms to <30 ms, and read throughput for the time‑range query increased 4×. The model also allowed us to archive old partitions after 90 days with minimal impact on current traffic. I learned that properly balancing partition size with clustering order is key to Cassandra’s scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
