---
qid: ing_7a7aaabd74__aws__local
question: 'Explain: Event-Driven Microservices — Event-Driven Architecture (EDA):
  A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 485
total_tokens: 723
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:26-05:00'
sources: []
---

**Situation & Task**

When launching a recommendation engine for our e‑commerce platform, I noticed the monolithic batch pipeline stalled during peak traffic, causing 12 % SLA drift. I owned the redesign and led a cross‑functional squad to shift from a cron‑based batch model to an **Event‑Driven Architecture (EDA)** built on microservices.

**Action**

1. **Requirements & Design**  
   * Each domain (catalog, inventory, user activity) exposed events via Amazon EventBridge.  
   * Microservices subscribed to relevant event buses, processed payloads in AWS Lambda, and persisted results to DynamoDB for low‑latency reads.  
   * We added an SQS dead‑letter queue per service for replayability and automated retries.

2. **AWS Services & Trade‑offs**  
   * **EventBridge** (high throughput, schema registry) → decouples producers/consumers.  
   * **Lambda** (pay‑as‑you‑go, auto‑scaling) → eliminates server maintenance; cost ≈ $0.20 per 1M invocations vs. $3/month EC2 baseline.  
   * **DynamoDB Global Tables** for multi‑region reads → 99.999% availability.  
   * We accepted a slight increase in latency (≈ 200 ms) to gain 10× elasticity and simplify rollback.

3. **Result**  

| KPI | Before EDA | After EDA |
|-----|------------|-----------|
| SLA drift | 12 % | < 0.5 % |
| Peak concurrency handled | 1,000 requests (EC2 limits) | 25,000 concurrent events |
| Cost per month | $4,800 (VMs + batch jobs) | $2,300 (Lambda + EventBridge) |

**Reflection**

I *own* the system’s reliability, diving deep into CloudWatch metrics to identify bottlenecks. The bar‑raiser will note my data‑driven impact and willingness to trade a small latency for massive scalability—an embodiment of **Customer Obsession**, **Ownership**, and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
