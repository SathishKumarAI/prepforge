---
qid: ing_b39dfcc476__aws__local
question: 'Explain: Prototyping a Live Comment Service — Live Comment System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 429
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:11:05-05:00'
sources: []
---

**Situation & Task (S)**  
When I joined the mobile‑gaming team, we needed a real‑time comment feed for live streams that could support 200 k concurrent viewers while keeping latency under 300 ms. The goal was to deliver a “live comment” experience comparable to Twitch but on a smaller scale.

**Action (A)**  
I owned the prototype and scoped it around **AWS services**:  
* **Amazon API Gateway + Lambda** for edge‑to‑origin writes, giving us *serverless scaling* with zero ops.  
* **Amazon Kinesis Data Streams** as an ingest pipeline—each comment becomes a record; we can replay or backfill data easily.  
* **DynamoDB Global Tables** (partitioned by stream ID) to store the latest 100 comments per stream, ensuring *low‑latency reads* for clients.  
* **Amazon CloudFront with WebSocket support** to push updates via **AWS IoT Core MQTT** topics; this keeps latency < 200 ms and reduces origin load.  

I also added a *deduplication layer* (Lambda + Redis) to filter spam, reducing write traffic by 30 %. Cost‑wise, the serverless model kept us under $0.50 per million comments.

**Result (R)**  
The prototype handled 250 k concurrent viewers with < 280 ms end‑to‑end latency, and the comment API maintained a 99.9 % availability SLA during peak events. Post‑launch analytics showed a **35 % increase in user engagement time** on live streams.

**Reflection**  
I learned that *bias for action* can be balanced with *dive deep*: the initial Kinesis design was too expensive, but iterating to DynamoDB Global Tables reduced costs without sacrificing speed—exactly what Amazon expects from a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
