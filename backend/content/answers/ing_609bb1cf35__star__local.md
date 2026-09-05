---
qid: ing_609bb1cf35__star__local
question: 'Explain: OLTP database - DynamoDB — Tech-Stacks-Live-Apps/Grab/OrderProcessing
  at main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 379
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:41:29-05:00'
sources: []
---

**Situation**  
At Grab I was tasked with redesigning the Order Processing service that handled millions of ride‑and‑food orders per day. The legacy MySQL cluster could not keep up with peak traffic, causing >2 s latency spikes during rush hours.

**Task**  
I had to replace the relational store with a high‑throughput OLTP database that would support real‑time order creation, status updates, and concurrent inventory checks while keeping cost under 20% of the previous budget.

**Action**  
I chose Amazon DynamoDB for its single‑digit millisecond latency and automatic scaling. I modeled orders as a single partition key (order_id) with GSI on user_id to fetch all a customer’s active orders. Using AWS SDK v3, I implemented optimistic locking via conditional writes (`expected` attribute) to prevent lost updates when multiple microservices updated the same order concurrently. To keep write amplification low, I batch‑loaded 1 k orders during off‑peak using `BatchWriteItem`. For read‑heavy “top‑10 popular dishes” reports, I leveraged DynamoDB Streams to trigger a Lambda that aggregates counts into Amazon Redshift for analytics.

**Result**  
Order creation latency dropped from 2.3 s to <30 ms, and the system handled 15× traffic during peak hours without throttling. Operational costs fell by 18%, and we reduced database maintenance windows from weekly to zero because DynamoDB is fully managed. This experience taught me how to balance schema design, consistency models, and cost when moving OLTP workloads to NoSQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
