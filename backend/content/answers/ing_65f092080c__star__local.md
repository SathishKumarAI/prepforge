---
qid: ing_65f092080c__star__local
question: 'Explain: Filtering — What is Pub/Sub Messaging? - Pub/Sub Messaging Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 312
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:51:48-05:00'
sources: []
---

**Situation:**  
At my previous company we had a real‑time analytics platform that ingested sensor data from hundreds of IoT devices. The dashboard needed to show live temperature trends for each building, but the raw stream also contained humidity and pressure readings that were irrelevant to most users.

**Task:**  
I was tasked with reducing the network load on our front‑end clients while ensuring they only received the events they cared about—temperature updates—for their assigned buildings.

**Action:**  
I implemented AWS SNS topics with message filtering. First, I created a single “SensorData” topic and subscribed both the analytics Lambda and an SQS queue for the UI service. Using JSON filter policies, I defined rules that let only messages where `type = "temperature"` and `buildingId` matched the subscriber’s ID pass through. The Lambda aggregated data into DynamoDB, while the UI queue pushed filtered events to API Gateway WebSocket connections. This setup eliminated 70% of unnecessary traffic and allowed us to scale the front‑end with a single WebSocket endpoint.

**Result:**  
The dashboard latency dropped from 2.5 s to under 800 ms, and our bandwidth cost decreased by roughly $3k per month. I learned that fine‑grained filter policies in SNS can dramatically improve both performance and cost when dealing with heterogeneous data streams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
