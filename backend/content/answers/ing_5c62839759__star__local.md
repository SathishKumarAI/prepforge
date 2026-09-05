---
qid: ing_5c62839759__star__local
question: 'Explain: Personalization at Spotify using Cassandra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:32:10-05:00'
sources: []
---

**Situation** – At Spotify we were launching a new “Discover Weekly” playlist that had to generate thousands of personalized song recommendations per user every week. The existing relational store couldn’t keep up with the read‑heavy workload and the latency spikes during peak listening times.

**Task** – I was tasked with designing a scalable, low‑latency data layer to serve real‑time recommendation vectors while still allowing us to update user profiles in near real time without impacting the recommendation engine.

**Action** – I chose Apache Cassandra for its tunable consistency and linear scalability. First, I modeled each user’s feature vector (genre affinity, listening history, session context) as a wide row keyed by `user_id`, with columns for each feature embedding stored as binary blobs. Using Cassandra’s eventual consistency, I set QUORUM reads to keep latency under 5 ms while writing updates at ONE to avoid write stalls. I also implemented token‑aware load balancing in our recommendation microservice so that each request hit the node holding the relevant user row. To guard against hot partitions, I introduced a consistent hashing layer that spread high‑activity users across the cluster and used TTLs on stale feature columns.

**Result** – The new architecture handled 10× more read requests with <2 ms latency during peak hours, boosting recommendation throughput from 1.5M to 15M weekly recommendations delivered. User engagement metrics improved by 12% in A/B tests, and the team now deploys feature updates without any downtime. I learned that careful data modeling and understanding Cassandra’s consistency model are key to building high‑performance personalization pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
