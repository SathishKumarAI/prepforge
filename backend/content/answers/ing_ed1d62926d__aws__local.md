---
qid: ing_ed1d62926d__aws__local
question: 'Explain: Messaging Flow — Designing a Chat Application'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 454
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:33-05:00'
sources: []
---

**Situation & Task**  
I led the redesign of a real‑time chat service for a SaaS platform that served 120 k daily active users. The goal was to reduce latency by 40 % while keeping costs below $20 k/month.

**Action**  
- **Architecture**: Chose *Amazon API Gateway* + *AWS Lambda* (Node.js) as the front‑end, *Amazon SNS* for pub/sub messaging, and *DynamoDB Streams* to trigger *Kinesis Data Firehose* that writes to *S3* for audit logs.  
- **Message Flow**: A user sends a message → API Gateway forwards to Lambda → Lambda publishes to an SNS topic (“chat‑room”). Subscribers (mobile/web clients) receive the push via *Amazon Pinpoint*; if offline, the message is stored in DynamoDB and delivered on reconnection.  
- **Scalability & Availability**: SNS guarantees at‑least‑once delivery with 99.9 % SLA; Lambda scales to 10k concurrent invocations automatically; DynamoDB auto‑scales with a provisioned capacity of 5 WCU, rising to 20 WCU during peak hours.  
- **Cost Control**: Leveraged *Lambda@Edge* for edge caching, reducing API Gateway calls by 25 % (≈$3k/month saved).  

**Result**  
Latency dropped from 350 ms to 210 ms (40 % improvement). Monthly spend fell to $18 k. User engagement grew 12 % as measured by average session length.  

**Reflection**  
I owned the end‑to‑end flow, dove deep into AWS pricing models, and iterated on a trade‑off between SNS durability vs. Lambda cold starts. The bar‑raiser will note my data‑driven impact, ownership of failure handling (retry logic), and continuous learning from early SLA breaches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
