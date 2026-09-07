---
qid: ing_8cf6dc71f5__aws__local
question: 'Explain: Timeouts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 466
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:40-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a recommendation micro‑service that exposed an HTTP API to the mobile app. The service had 1 M requests/day and was experiencing frequent “gateway timeout” errors during traffic spikes, causing a 12 % drop in user engagement.

**Action**  
*Customer Obsession & Ownership*: I first instrumented latency with CloudWatch metrics and traced each request through X‑Ray to identify the bottleneck. The root cause was a synchronous call to an external ML inference endpoint that sometimes exceeded its SLA (3 s).  
I re‑architected the API in **API Gateway → Lambda** with a 2 s timeout, added a retry policy, and introduced an asynchronous fallback: requests were queued in **SQS** and processed by a background worker. The worker updated a **DynamoDB** cache that the API served from for subsequent calls.  
*Dive Deep*: I set up CloudWatch Alarms on queue depth and Lambda error rates; thresholds were auto‑scaling with DynamoDB provisioned capacity.  

**Result**  
- 99.9 % of requests returned within 2 s (down from 85 %).  
- The timeout error rate fell from 7 % to <0.1 %.  
- User engagement rose by **15 %**, translating into a $120K/month lift in revenue.  

**Key Learnings**  
I learned that “timeout” isn’t just a client‑side issue; it’s often a systemic bottleneck. By decoupling synchronous and asynchronous flows I balanced *availability* (immediate responses) with *cost* (pay‑as‑you‑go Lambda + SQS).  

**AWS Services Used**: API Gateway, AWS Lambda, Amazon SQS, DynamoDB, CloudWatch, X‑Ray.  
These choices ensured horizontal scalability, high availability, and a clear cost model while maintaining ownership of the customer experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
