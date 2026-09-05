---
qid: ing_5a57cf2113__star__local
question: 'Explain: Feed Service — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 401
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:23-05:00'
sources: []
---

**Situation**  
I was hired as a senior backend engineer at a fast‑growing photo app where the feed latency had climbed to 4 s during peak hours, and we were seeing a 12 % drop in daily active users. The existing “pull” architecture fetched posts sequentially from a monolithic DB, causing heavy read contention.

**Task**  
Design a scalable Feed Service that could deliver personalized timelines with <1 s latency for 200 M monthly users while keeping infrastructure cost under 30 % of the previous stack.

**Action**  
I broke the problem into three layers:  
1. **Graph storage** – migrated follow relationships to a distributed graph DB (JanusGraph) so we could pre‑compute fanout paths and store “latest posts” per user in a lightweight key‑value store (Redis).  
2. **Real‑time ingestion** – implemented an event stream with Kafka; each new post triggers a fanout job that writes to the user’s feed cache, capped at 1 k items.  
3. **Ranking & recommendation** – used a hybrid scoring model combining recency, interaction weight (likes/comments), and a simple collaborative filtering matrix factorization served via TensorFlow Serving. The service ran on Kubernetes with autoscaling based on CPU/memory thresholds.

**Result**  
Latency dropped to 650 ms average; the feed hit rate improved from 78 % to 95 %. We reduced read traffic by 60 %, cutting operational costs by 28 %. I learned that coupling graph traversal with a write‑through cache and lightweight ML inference can dramatically improve user experience while keeping infrastructure lean.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
