---
qid: ing_295d6f7b73__aws__local
question: 'Explain: Stock Market Trading — Event-Driven Architecture (EDA): A Complete
  Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 457
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:18-05:00'
sources: []
---

**Situation & Task (Ownership)**  
I was hired by a fintech startup that wanted to replace its monolithic order‑matching engine with an event‑driven architecture so it could support 10 × the daily trade volume and reduce latency from 200 ms to <30 ms.  

**Action (Dive Deep + Bias for Action)**  
1. **Event bus** – Amazon EventBridge as a single source of truth, ingesting price feeds, order placements, cancellations, and risk‑checks.  
2. **Processing layer** – Lambda functions chained with Step Functions for stateful orchestration; each microservice (pricing, matching, compliance) scales to 10 k concurrent events.  
3. **Data store** – DynamoDB Global Tables for low‑latency order book persistence; Streams trigger downstream analytics.  
4. **Real‑time insights** – Kinesis Data Analytics + QuickSight dashboards provide 5‑second latency market heat maps.  
5. **Fault tolerance** – Dead‑letter queues on SQS, automatic retries, and Lambda provisioned concurrency guarantee <1 ms cold start.  

I also introduced a *circuit‑breaker* pattern: if the matching service lagged >100 ms, new orders were temporarily routed to a “slow‑path” queue, keeping latency guarantees for the rest of the system.

**Result (Deliver Results)**  
- 90 % reduction in average trade latency (from 200 ms to 20 ms).  
- 12 × throughput increase with zero downtime during migration.  
- Operational cost dropped 18 % by leveraging serverless pay‑as‑you‑go model.

**Learnings**  
The biggest failure was underestimating Kinesis shard limits; adding shards after a spike caused throttling. I now always provision 1.5× the expected throughput and monitor CloudWatch proactively.  

*Leadership Principles highlighted:* **Ownership, Dive Deep, Bias for Action, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
