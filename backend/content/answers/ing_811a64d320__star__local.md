---
qid: ing_811a64d320__star__local
question: 'Explain: Delivery Failures — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 388
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:51:34-05:00'
sources: []
---

**Situation:**  
In my last role I was leading the redesign of a real‑time analytics pipeline for a global e‑commerce platform that used Google Cloud Pub/Sub to stream order events from our front‑end to downstream microservices. Two weeks before launch, we discovered sporadic delivery failures: 12 % of messages were either duplicated or lost during high traffic spikes, causing stale inventory data and delayed fraud alerts.

**Task:**  
I had to reduce the failure rate below 1 %, guarantee at least once ordering, and keep latency under 200 ms even when throughput hit 50k msgs/s.

**Action:**  
First, I added message deduplication keys (order_id + timestamp) and enabled Pub/Sub’s “exactly‑once” delivery with Cloud Functions as the subscriber. Next, I switched to a topic‑partitioning strategy: split the main topic into three shards based on order region, then used a load balancer to route messages so each shard stayed under 10k msgs/s. For persistence, I backed up every message to Cloud Storage using the “dead‑letter” queue with exponential backoff retries. Finally, I instrumented Stackdriver Monitoring and set alerts for delivery latency >150 ms.

**Result:**  
After deployment, the failure rate dropped from 12 % to <0.3 %, and average end‑to‑end latency improved to 120 ms. The system now scales linearly with traffic, and I learned that proactive sharding plus built‑in deduplication is key for resilient Pub/Sub designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
