---
qid: ing_2b00a42e21__aws__local
question: 'Explain: Priority Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:02:28-05:00'
sources: []
---

**Scenario**  
At my previous firm we built a real‑time recommendation engine that processed millions of user events per day. The team needed a *priority queue* so high‑impact actions (e.g., purchase intent) could be handled immediately while lower‑value events were batched.

**Task**  
Design a scalable, fault‑tolerant priority messaging system using AWS services, ensuring low latency for “hot” messages and cost efficiency for the bulk stream.

**Action**  

| Layer | Design & Services | Why |
|-------|------------------|-----|
| **Ingest** | Two SQS FIFO queues: `high_priority` (max 300 msgs/s) and `normal`. | Guarantees order, no duplication. |
| **Orchestration** | Step Functions trigger Lambda based on queue depth. High‑priority Lambda writes to DynamoDB Streams → Kinesis Data Firehose → Redshift for analytics; normal events go to a batch Lambda that aggregates into S3 nightly. | Keeps compute tightly coupled to load, avoids over‑provisioning. |
| **Processing** | Lambda@Edge + EventBridge rules route messages by `score` field into the appropriate queue. | Enables *bias for action*—immediate routing without manual intervention. |
| **Monitoring** | CloudWatch Alarms on DLQ counts; automated SNS alerts to Ops. | Ensures ownership & rapid issue resolution. |

**Result**  
- Latency for high‑priority events dropped from 2 s to <200 ms (90th percentile).  
- Cost decreased by 35% because we avoided over‑provisioning EC2 workers.  
- SLA of 99.9% achieved across all queues.

**Reflection**  
I learned that *dive deep* into SQS limits and Lambda concurrency often uncovers hidden bottlenecks; a single misconfigured batch size can inflate costs by 20%. I documented these findings in our post‑mortem wiki, so future teams could skip the trial‑and‑error phase.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
