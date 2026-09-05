---
qid: ing_51a9f320b9__star__local
question: 'Explain: Competing Consumers — Top 6 Cloud Messaging Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:11:39-05:00'
sources: []
---

**Situation** – At my last role I was building a real‑time fraud detection pipeline for an e‑commerce platform that processed ~10 k orders per second. The analytics team needed to run multiple independent models (rule‑based, gradient boosting, and deep learning) on each transaction without bottlenecks.

**Task** – I had to design a messaging layer that would allow all three model workers to consume every message while keeping latency under 200 ms and ensuring no order was missed or processed twice.

**Action** – I chose Amazon SQS FIFO queues with the *Competing Consumers* pattern. Each worker subscribed to the same queue but ran in its own ECS task group, scaling horizontally based on CloudWatch metrics (batch size, visibility timeout). To avoid duplicate processing I set a 30‑second visibility timeout and used idempotent message handling; each model wrote results to DynamoDB with a composite key of order_id+model_type. For reliability I enabled dead‑letter queues and implemented exponential backoff retries for transient failures.

**Result** – The system processed all orders in real time, reducing overall fraud detection latency from 400 ms to 180 ms. We achieved >99.9% message throughput with zero duplicate detections, and the architecture scaled to 50 k orders per second during peak sales events. I learned how careful queue configuration and idempotent design can turn a simple publish/subscribe model into a robust, low‑latency pipeline for concurrent consumers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
