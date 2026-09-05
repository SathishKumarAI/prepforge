---
qid: ing_b58adb94b1__star__local
question: 'Explain: Develop with agility — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 327
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:34-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a recommendation engine for an e‑commerce platform that had to scale from 10k to 1M active users overnight during the holiday season. The existing batch‑processing pipeline couldn’t deliver fresh recommendations fast enough, and our analytics team needed real‑time insights into user interactions.

**Task** – I had to design a system that could ingest clickstream events, trigger model inference on demand, update user profiles instantly, and push personalized product suggestions back to the storefront with sub‑second latency—all while keeping operational costs under budget.

**Action** – I chose an event‑driven architecture using Apache Kafka for the message bus, AWS Lambda for stateless inference functions, and Redis Streams as a lightweight state store. Each click generated a “user_action” event; a Lambda function consumed it, called our TensorFlow model hosted on SageMaker, and wrote the updated recommendation to Redis. A downstream microservice listened to Redis updates and pushed them via WebSocket to the UI. I also implemented back‑pressure handling by configuring Kafka consumer groups and used CloudWatch metrics to auto‑scale Lambda concurrency based on event rates.

**Result** – The new pipeline reduced recommendation latency from 5 minutes to under 200 ms, increased click‑through rate by 18%, and cut batch‑processing costs by 35%. I learned that coupling event streams with serverless inference allows ML workloads to remain agile, resilient, and cost‑effective.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
