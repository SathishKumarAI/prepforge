---
qid: ing_e7724ecb7e__faang__local
question: 'Explain: Eliminate polling — What is Pub/Sub Messaging? - Pub/Sub Messaging
  Explained - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 429
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:13-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise, interview‑style explanation of why “eliminate polling” matters and what Pub/Sub messaging is in the context of AWS (e.g., SNS/SQS). I’ll assume we’re talking about event‑driven architectures where components need to react to state changes without constantly querying a source.

**Approach**  
1. Define polling vs. push.  
2. Explain the core Pub/Sub pattern: publisher, broker, subscriber.  
3. Map it to AWS services (SNS for publish, SQS/ Lambda for subscribe).  
4. Highlight benefits over polling.  

**Depth**  
Polling forces a client to repeatedly hit an endpoint, wasting bandwidth and increasing latency. In Pub/Sub, publishers emit events once; a message broker stores the event until any number of subscribers consume it. On AWS, Amazon SNS (Simple Notification Service) acts as the broker: publishers publish a JSON payload to a topic; SNS pushes that payload to multiple endpoints—HTTP/S callbacks, SQS queues, or Lambda functions. Subscribers can scale independently; if one is down, messages sit in its queue until retried. This decouples producers and consumers, reduces operational cost (no constant API calls), and guarantees at‑least‑once delivery with retry policies.

**Edge Cases**  
- **Burst traffic**: SNS throttles; use FIFO topics or increase provisioned throughput.  
- **Message ordering**: Not guaranteed in standard SNS; use FIFO queues if needed.  
- **Security**: Ensure IAM policies restrict who can publish/subscribe to avoid unwanted data flow.

**Optimize & Communicate**  
I’d mention that by replacing polling with Pub/Sub, you lower latency from milliseconds (polling interval) to near‑real‑time event delivery, cut API call costs by 90 %, and simplify scaling. I’d close by noting that this pattern is foundational for serverless pipelines, real‑time analytics, and microservices on AWS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
