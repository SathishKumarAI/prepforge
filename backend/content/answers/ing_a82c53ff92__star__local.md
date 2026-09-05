---
qid: ing_a82c53ff92__star__local
question: 'Explain: Aim for shards of up to 200M documents, or with sizes between
  10GB and 50GB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 323
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:09:27-05:00'
sources: []
---

**Situation** – In a production recommendation system, we were ingesting user logs that grew to 3 TB per day. Our single index exploded past the ElasticSearch limit of 50 GB per shard, causing search latency spikes and node failures during heavy query loads.

**Task** – I had to re‑shard the data so each shard stayed between 10–50 GB (or capped at 200 M documents) while keeping write throughput high and maintaining real‑time freshness for top‑N recommendation queries.

**Action** – First, I profiled the daily ingestion rate and discovered a skew: about 20% of users generated 80% of events. Using that insight, I designed a custom partitioner that routed events by user ID hash into shards sized to hit our target range. I implemented this in Kafka Connect with a key‑based routing plugin, then updated the ElasticSearch pipeline to auto‑create new shards when size thresholds were breached. To avoid cold start latency, I also enabled shard preallocation and used bulk indexing with 512 KB batches.

**Result** – After deployment, shard sizes stayed within 12–48 GB, reducing query latency from 1.2 s to 0.4 s on average. Write throughput improved by 35%, and we eliminated node crashes during peak hours. I learned that careful data partitioning combined with dynamic sizing can keep large ML datasets performant without manual intervention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
