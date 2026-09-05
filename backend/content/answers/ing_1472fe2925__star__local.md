---
qid: ing_1472fe2925__star__local
question: 'Explain: The Confluent Developer Newsletter — How to Choose the Number
  of Topics/Partitions in a Kafka Cluster? | Confluent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 362
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:09:11-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with migrating our recommendation engine from a monolithic batch system to an event‑driven architecture on Kafka. Our data pipeline had to ingest millions of user actions per day and keep latency under 100 ms for real‑time scoring.

**Task**  
I needed to design the topic layout—deciding how many topics and partitions—to balance throughput, fault tolerance, and resource constraints while ensuring we could scale horizontally as traffic grew.

**Action**  
First, I profiled current write rates and consumer lag using Confluent Control Center. I calculated that each partition could comfortably handle ~200 k events/second on our broker hardware. To avoid hot spots, I split the user‑action stream into three logical topics: clicks, views, and purchases. For each, I started with 12 partitions (3×4) to align with our 4 broker nodes, giving us a maximum of 48 partitions total. I then applied Confluent’s “partition‑by” key strategy—hashing user ID—to evenly distribute load across partitions. I monitored CPU and disk I/O; when the click topic hit >70 % utilization on a node, I added two more partitions to that topic, keeping the consumer group size in sync.

**Result**  
The new configuration reduced average end‑to‑end latency from 250 ms to 78 ms. We handled a 3× traffic spike without any downtime and maintained <5 % consumer lag. I learned that starting with a conservative partition count based on hardware limits, then scaling in response to monitored metrics, yields both performance and operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
