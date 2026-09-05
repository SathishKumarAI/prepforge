---
qid: ing_1a3d41d933__star__local
question: 'Explain: Retries Can Amplify Failures — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 360
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:02-05:00'
sources: []
---

**Situation** – In a real‑time fraud detection pipeline I was ingesting transaction events from an external payment gateway via Apache Kafka. The downstream model inference service occasionally timed out due to transient GPU spikes, causing messages to be retried by the consumer client.

**Task** – I needed to prevent those retries from flooding the queue and overwhelming the inference cluster, while still guaranteeing that every transaction was processed exactly once.

**Action** – First, I added a dead‑letter topic with an exponential backoff policy and limited retry attempts (max 3). Then I instrumented the consumer with a “fail‑fast” flag: if the model returned a timeout error, the message was marked as failed immediately rather than requeued. I also introduced a rate‑limit guard in the inference service that capped requests to 120 req/s per GPU and used a circuit breaker that throttled traffic when latency exceeded 200 ms. Finally, I logged all retry attempts to an ElasticSearch dashboard so we could spot patterns.

**Result** – After deployment, queue depth dropped from 12,000 pending messages to under 300 during peak periods, and GPU utilization stabilized at 65% instead of the previous 90%. End‑to‑end latency for fraud decisions fell from 350 ms to 180 ms on average. I learned that retries are a double‑edged sword: they’re essential for reliability but must be coupled with backpressure and circuit breaking to avoid cascading failures in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
