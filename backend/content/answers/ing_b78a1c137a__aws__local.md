---
qid: ing_b78a1c137a__aws__local
question: 'Explain: Step 2: The Provider Records an Event — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 544
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:18:51-05:00'
sources: []
---

**Step 2: The Provider Records an Event – Webhooks (System Design)**  

> *Situation:* Our SaaS platform receives real‑time event data from third‑party providers (e.g., payment gateways). Each provider exposes a webhook endpoint that must be acknowledged within 5 s to avoid retries. We needed a scalable, fault‑tolerant ingestion pipeline that could handle millions of events per day while guaranteeing at‑least‑once delivery.

> *Task:* Design the event‑recording layer so that it can (1) accept high‑volume webhook calls, (2) persist events reliably, and (3) trigger downstream ML training jobs with minimal latency.

> *Action:*  
> 1. **API Gateway + Lambda** – Exposed a single HTTPS endpoint; API Gateway throttles to 10 k RPS per provider, while Lambda scales automatically.  
> 2. **DynamoDB Streams + Kinesis Data Firehose** – Lambda writes the event payload to DynamoDB (partition key = `provider_id#timestamp`). A stream triggers another Lambda that pushes events to a Kinesis Firehose delivery stream.  
> 3. **S3 & Athena** – Firehose delivers to an S3 bucket (`s3://ml-events/`) in Parquet; Athena catalogues the data for quick ad‑hoc queries.  
> 4. **SNS + SQS** – Upon successful write, Lambda publishes a message to SNS; subscribers (ML training workers) pull from SQS queues per provider.  
> 5. **Monitoring & Retries** – CloudWatch alarms on DLQs trigger alerts; Lambda retries idempotently using the event ID.

> *Result:* The architecture handled 2 M events/day with <1 % failure rate, reducing processing latency from 3 s to 0.7 s and cutting cost by 35 % vs. a monolithic EC2 solution.  

**Leadership Principles:**  
- **Ownership & Bias for Action** – I built the end‑to‑end pipeline within two sprints without external approvals.  
- **Dive Deep** – Continuous profiling identified DynamoDB write latency as the bottleneck; switching to Kinesis Firehose eliminated it.  

**Bar‑raiser notes:** Look for quantified impact, architectural trade‑offs (e.g., Lambda vs. EC2), and evidence of learning from a retry failure that initially caused duplicate events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
