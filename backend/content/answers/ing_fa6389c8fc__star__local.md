---
qid: ing_fa6389c8fc__star__local
question: 'Explain: Consumer Groups and Shared Subscriptions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 342
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:30-05:00'
sources: []
---

**Situation** – At my previous company we built a real‑time fraud detection system that ingested millions of transaction events per day from our payment gateway. The stream processing layer used Apache Kafka and the downstream analytics engine was Spark Structured Streaming.

**Task** – We had to scale the ingestion pipeline so that new data scientists could spin up experiments without blocking each other, while ensuring that every consumer still received a complete copy of the raw event feed for offline replay.

**Action** – I set up two parallel subscription patterns. First, a **consumer group** named `fraud-detectors` where each team member ran an instance of the Spark job; Kafka automatically load‑balanced the partitions so that each transaction was processed by only one detector, reducing duplicate work. Second, I created a **shared subscription** (Kafka topic with replication factor 3 and read‑only consumers) called `raw-transactions`. This allowed every new experiment to subscribe independently, receiving a full copy of all events for training models without interfering with the production detectors.

I also implemented back‑pressure handling in Spark and tuned Kafka’s retention policy to 7 days, so that analysts could replay any period.  

**Result** – The system handled a 4× increase in throughput while keeping latency under 200 ms. Each data scientist could run their own experiment with zero interference, and we reduced duplicate processing costs by 30%. I learned how consumer groups and shared subscriptions complement each other for scaling real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
