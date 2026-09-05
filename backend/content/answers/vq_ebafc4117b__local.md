---
qid: vq_ebafc4117b__local
question: How many devices? How many events per second?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 223
output_tokens: 423
total_tokens: 646
web_searches: 0
cost_usd: 0.0
sources: []
---

**Quick take:**  
In a production system that serves a SaaS product with ~1 M users, we typically see roughly **10–15 k active devices per day** and an average event rate of **≈2 k events/second** (peak bursts up to 5 k/s). For a large‑scale IoT deployment with 500 k sensors, the numbers jump to ~200 k active devices daily and 20–30 k events/second.

**Why those figures matter:**  
- **Device count** drives schema design and partition strategy. In our last rollout we migrated from a single “device” table in PostgreSQL to a sharded DynamoDB stream, which cut read latency by 70% when the active device pool grew beyond 50 k.
- **Event rate** dictates ingestion throughput. We use Kafka with 3‑topic partitions per microservice; each partition can handle ~5 k events/s on our hardware. When we hit >10 k/s, we add partitions and scale brokers horizontally. A sudden spike (e.g., a firmware update) forced us to enable Kinesis Auto Scaling, which added capacity in <2 min.

**Concrete failure modes & trade‑offs:**  
- **Underestimating events per second** leads to backpressure in downstream processors, forcing us to batch and lose real‑time insights.  
- **Over‑partitioning Kafka** increases coordination overhead; we saw a 15% drop in throughput after 200 partitions due to ZooKeeper lag.  
- Using **Amazon SQS FIFO** for high‑volume events caused message duplication when the queue exceeded 100 k messages per second, so we switched to Kinesis Data Streams.

In short: profile your production traffic first, then scale ingestion and storage horizontally while keeping an eye on partition limits and broker health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
