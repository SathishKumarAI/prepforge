---
qid: ing_8ad286ad44__star__local
question: 'Explain: Personalization at Spotify using Cassandra & HDFS'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 399
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:10:03-05:00'
sources: []
---

**Situation:**  
At my previous role on the Music Recommendation team, we had a quarterly goal to increase user engagement by 12 % for our premium tier. The existing recommendation engine was using a single relational database that couldn’t scale with the growing catalog of tracks and user profiles; latency spikes were hurting real‑time personalization.

**Task:**  
I needed to redesign the data layer so we could store millions of user listening histories and track metadata in a distributed, low‑latency fashion while still enabling batch analytics for model training. The target was to reduce API response time to under 80 ms for personalized playlists and support nightly retraining jobs that processed 3 TB of raw logs.

**Action:**  
I chose Apache Cassandra as the primary store for per‑user state because its wide‑column design offers efficient point reads (O(1)) and linear scalability. Each user’s “recently listened” window was materialized as a row with time‑ordered columns, enabling quick retrieval of top‑n tracks. For batch analytics I leveraged Hadoop Distributed File System (HDFS) to archive raw event logs; Spark jobs read from HDFS to compute popularity scores and train collaborative filtering models. I implemented a dual‑write pipeline using Kafka, ensuring that every listening event was written concurrently to Cassandra for real‑time use and to HDFS for offline processing. We also added TTLs in Cassandra to automatically purge stale data.

**Result:**  
Within two months of deployment, API latency dropped from 250 ms to 65 ms, boosting session length by 9 % and overall engagement by 14 %. The nightly training pipeline completed 30 % faster, allowing us to roll out new model iterations weekly. I learned how to balance consistency, availability, and performance by combining a NoSQL store for speed with HDFS for scalable analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
