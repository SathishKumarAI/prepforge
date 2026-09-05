---
qid: ing_1fb64f7ea1__star__local
question: 'Explain: Reliability Through Retry — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 344
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:32:46-05:00'
sources: []
---

**Situation:**  
At my last role, we built a real‑time analytics pipeline for an ad tech platform that ingested click events via Kafka and processed them with Spark Structured Streaming. Production traffic spiked by 40% during the holiday season, and we started seeing event loss in downstream dashboards—critical metrics were off by as much as 5%.

**Task:**  
I needed to guarantee at‑least‑once delivery of every click event without sacrificing latency, while keeping the system cost‑effective.

**Action:**  
1. Implemented a “retry on failure” policy in our Kafka consumer: any record that failed deserialization or schema validation was sent to a dedicated DLQ (dead‑letter topic).  
2. Added idempotent write logic in Spark using event IDs and a Redis cache of processed IDs, so retries didn’t create duplicates.  
3. Configured exponential backoff with jitter for reprocessing the DLQ batch, and set a max retry count of 5 before flagging an alert to ops.  
4. Instrumented Prometheus metrics (retry counts, DLQ size) and visualized them in Grafana to monitor health in real time.

**Result:**  
Within two days the event loss dropped from 5% to <0.01%. Latency increased by only ~15 ms on average, staying well below our SLA of 200 ms. I learned that a simple retry strategy combined with idempotence and observability can turn a fragile pipeline into a resilient one without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
