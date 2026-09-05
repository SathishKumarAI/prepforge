---
qid: ing_2f15c1c8b8__star__local
question: 'Explain: Twitter system design | twitter Software architecture | twitter
  interview questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 354
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:02:36-05:00'
sources: []
---

**Situation:**  
When I joined a startup that was pivoting from a simple photo‑sharing app to a real‑time microblogging platform, we had to build an architecture that could handle millions of tweets per day while keeping latency under 200 ms.

**Task:**  
I was tasked with designing the core system: how to ingest tweets, store them, surface timelines, and support search, all on a cost‑effective cloud stack.

**Action:**  
I broke it into three layers. First, I used Kafka for ingestion and replayability; each tweet became a message with a partition key based on user ID so that writes stayed hot. Second, for storage I chose a sharded Cassandra cluster, modeling the schema as `user_tweets(user_id, timestamp) → tweet_id` and a separate `tweet_content(tweet_id)` table to avoid hot spots. Third, for timeline generation I built an event‑driven microservice in Go that updated per‑user “home” feeds in Redis Streams, using Bloom filters to skip users who had already seen a post. For search I added an Elasticsearch index on hashtags and user mentions. I also introduced a circuit‑breaker pattern with Hystrix to prevent cascading failures during traffic spikes.

**Result:**  
Within three months the platform handled 5 M tweets/day with 95th‑percentile latency <150 ms, and our retention rate rose from 58% to 72%. I learned that decoupling ingestion, storage, and read pipelines allows each layer to scale independently, and that careful partitioning is key to avoiding write hotspots in distributed stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
