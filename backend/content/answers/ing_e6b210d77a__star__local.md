---
qid: ing_e6b210d77a__star__local
question: Interested in more? — How to Choose the Number of Topics/Partitions in a
  Kafka Cluster? | Confluent
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 380
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:09:20-05:00'
sources: []
---

**Situation**  
When I joined the data‑engineering team at a fintech startup, our real‑time fraud detection pipeline was hitting latency spikes during peak hours. The Kafka cluster we used for ingesting transaction events had 12 partitions on a single topic, and we noticed that the consumer group was unable to keep up when traffic surged from 1k to 5k messages per second.

**Task**  
I needed to redesign the topic partition strategy so that consumers could scale horizontally without increasing broker load, while keeping end‑to‑end latency under 200 ms during peak periods.

**Action**  
First, I ran a throughput benchmark with `kafka-run-class kafka.tools.JmxTool` to capture per‑partition lag and CPU usage. Using the metrics, I calculated an optimal number of partitions as roughly 1.5× the expected consumer count, factoring in broker RAM (32 GB) and disk throughput limits. I then created a new topic with 48 partitions, migrated data using `kafka-mirror-maker`, and updated the producer’s keying strategy to hash on the user ID so that related events stayed in order. Finally, I added a dynamic consumer rebalance listener to trigger scaling of worker pods when partition count exceeded the current pool.

**Result**  
After deployment, peak‑hour latency dropped from 350 ms to 140 ms, and consumer lag never exceeded 10 seconds. The cluster’s CPU usage stayed below 70%, and we avoided overprovisioning brokers. I learned that partition sizing is a balance between parallelism and broker resource limits, and that real‑time monitoring is essential for tuning production Kafka workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
