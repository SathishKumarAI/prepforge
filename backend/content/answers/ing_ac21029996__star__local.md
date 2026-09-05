---
qid: ing_ac21029996__star__local
question: 'Explain: Data hotspots — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 339
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:52-05:00'
sources: []
---

**Situation:**  
When I joined my previous company, our user‑growth sprint hit a wall: the monolithic PostgreSQL instance was throttling under 5 million active users, and read latency spiked to 350 ms during peak hours.

**Task:**  
I was tasked with redesigning the data layer so that query response stayed below 80 ms while still supporting real‑time analytics across all regions.

**Action:**  
I introduced horizontal sharding: first, I identified a natural partition key—`user_id`. Using AWS RDS Proxy and Aurora Serverless v2, I created three shards, each hosted on a separate DB cluster in distinct AZs. I wrote a lightweight routing layer in Go that hashed `user_id` to the correct shard, leveraging consistent hashing to minimize re‑distribution when adding nodes. For cross‑shard analytics, I set up Amazon Redshift Spectrum to query S3 snapshots of each shard, avoiding costly joins on live data. Finally, I automated backup and failover with Aurora’s built‑in multi‑region replication.

**Result:**  
After deployment, read latency dropped from 350 ms to 60 ms during peak load, and the system handled a 4× increase in traffic without any downtime. The sharding framework also cut our monthly RDS costs by 22 % by enabling smaller, cheaper instances per shard. I learned that careful key selection and automated routing are critical; otherwise, you end up with uneven shards and “hot spots” again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
