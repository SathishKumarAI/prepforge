---
qid: ing_e07e70df99__aws__local
question: 'Explain: Problem — Pattern: Transactional outbox'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 366
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:47:05-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech startup that needed real‑time fraud alerts. Their monolith sent emails through a “transactional outbox” table, but the process stalled under high load (≈ 10k tx/s) and caused 2‑minute delays in alerting.

**Action**  
*Owned* the solution: I scoped a microservice using **AWS EventBridge + Lambda** to read the outbox, publish events, and trigger downstream notification services.  
I added an **SQS FIFO queue** for idempotent processing, guaranteeing order and exactly‑once semantics.  
To *dive deep*, I instrumented CloudWatch metrics (latency, DLQ depth) and tuned the Lambda concurrency to 200, which kept the 95th percentile latency below **120 ms**.  
I replaced the relational outbox with a **DynamoDB stream** for instant change data capture, cutting read amplification by 70 %.  

**Result**  
- Latency dropped from 2 min to < 120 ms (99th percentile).  
- Throughput increased to 15k tx/s without error bursts.  
- Operational cost fell 35% by eliminating the old batch job and leveraging serverless pricing.

**Reflection**  
I learned that *Ownership* means iterating until you hit a measurable KPI, while *Bias for Action* drives rapid prototyping. The bar‑raiser will note my clear metrics, architectural trade‑offs (EventBridge vs SNS), and the fact I documented failure modes (DLQ handling) to improve resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
