---
qid: ing_59f144ae0b__star__local
question: 'Explain: Consistency Across Nodes — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 305
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:27:31-05:00'
sources: []
---

**Situation:**  
At my last job I was building a recommendation engine that served personalized ads to millions of users each day. The model inference latency had to stay below 50 ms, but the training pipeline produced a new model version every hour.

**Task:**  
I needed to make sure all edge servers could serve the latest model while keeping read‑latency low and avoiding “stale” predictions that would hurt click‑through rates.

**Action:**  
I implemented a distributed cache layer using Redis Cluster with read‑replicas. Every time the training job finished, it pushed a new model artifact to an S3 bucket and published a version key via SNS. All edge nodes subscribed to the topic; on receipt they fetched the new artifact from S3, refreshed their local in‑memory cache, and bumped a version header that clients used for consistency checks. To handle network partitions I added a lease mechanism: if a node couldn’t reach the primary within 200 ms it fell back to its cached copy but flagged the request for later reconciliation.

**Result:**  
Model freshness dropped from an average of 5 minutes to under 30 seconds, and we saw a 12 % lift in CTR. I learned that combining a lightweight cache with a publish/subscribe versioning scheme gives strong consistency without sacrificing low latency in distributed ML inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
