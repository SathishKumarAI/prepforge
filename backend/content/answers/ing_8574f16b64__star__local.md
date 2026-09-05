---
qid: ing_8574f16b64__star__local
question: 'Explain: 5.5 Get User Feed — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 340
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:57-05:00'
sources: []
---

**Situation:**  
In my last role at a social‑media startup, we were launching a new photo‑sharing feature similar to Instagram. The engineering team needed a real‑time “user feed” that showed the latest posts from people each user followed, sorted by relevance and recency.

**Task:**  
I was tasked with designing a scalable feed service that could deliver 5–10 k posts per request, support millions of users, and allow for rapid ranking updates while keeping latency under 200 ms.

**Action:**  
First, I modeled the data: each user had a “following” set stored in Redis; every new post triggered an event pushed to Kafka. I built a microservice that consumed those events, materialized a per‑user queue in Cassandra (time‑series columns), and used a Bloom filter to prune stale items. For ranking, I implemented a weighted score combining recency (timestamp decay) and engagement (likes/comments), stored as a composite key in the queue. To keep latency low, I pre‑fetch top 200 posts into an LRU cache per user and served them via a GraphQL endpoint that batched requests.

**Result:**  
The feed could handle 50 k concurrent users with <180 ms average latency. User engagement on new photos increased by 27% in the first month, and we reduced server costs by 15% through efficient caching. I learned that balancing real‑time ingestion with pre‑computed ranking is key to a responsive social feed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
