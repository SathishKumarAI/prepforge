---
qid: ing_f227097211__aws__local
question: 'Explain: Consumer — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 643
total_tokens: 873
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:35-05:00'
sources: []
---

**Situation (S)**  
At my previous role I built a real‑time recommendation engine that ingested clickstream data from millions of users daily. The ML pipeline needed a robust consumer layer to pull messages from an SQS queue and trigger inference jobs in SageMaker, all while guaranteeing 99.9 % throughput.

**Task (T)**  
Design the consumer architecture so it scales with traffic spikes, stays cost‑efficient, and provides observability for debugging failures.

**Action (A)**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| **Queue** | Amazon SQS FIFO + Dead‑Letter Queue | Guarantees ordering and at‑least‑once delivery; DLQ isolates corrupt messages. |
| **Consumer** | AWS Lambda (concurrency = auto) + API Gateway for health checks | Serverless scales to thousands of invocations, no over‑provisioning; API Gateway gives 99.95 % uptime. |
| **State & Metrics** | Amazon DynamoDB (partition key = message ID) + CloudWatch Logs/Metric Streams | Persist retry counts; enable throttling logic and real‑time dashboards. |
| **Inference Trigger** | SageMaker Endpoint via InvokeEndpoint API | Low‑latency, pay per request; can be autoscaled with SageMaker Neo. |
| **Alerting** | SNS + Lambda | Sends Slack/email on DLQ depth > 10 or latency > 2 s. |

*Scalability*: Lambda concurrency scales to 1,000+ requests/sec without manual intervention.  
*Availability*: SQS and DynamoDB are multi‑AZ; Lambda auto‑scales across AZs.  
*Cost*: ~\$0.20 per million invocations + \$0.001/GB‑s for Lambda; SQS free tier covers 1M messages/month.  

**Result (R)**  
Within three months, we reduced message processing latency from 5 s to < 500 ms, increased throughput by 4× during flash sales, and cut infra cost by 30 % through serverless auto‑scaling.

---

### Leadership Principles Highlighted
- **Customer Obsession**: Delivered instant recommendations that boosted click‑through rate by 12 %.  
- **Ownership & Dive Deep**: Built end‑to‑end observability; iterated on DLQ handling after a failure analysis.  

### Bar‑raiser Checklist
- Demonstrated ownership of the full consumer lifecycle.  
- Showed deep technical dive (SQS, Lambda concurrency, DynamoDB schema).  
- Quantified impact with real metrics.  
- Reflected learning: after a 2019 incident, added exponential back‑off and DLQ monitoring to prevent data loss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
