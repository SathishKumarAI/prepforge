---
qid: ing_8e06d97df4__star__local
question: 'Explain: Step 1: Register an Endpoint — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:17:00-05:00'
sources: []
---

**Situation** – While leading the integration of a third‑party fraud detection service into our payment platform, we needed real‑time alerts whenever a transaction flagged as suspicious. The service required us to expose an HTTPS endpoint that could receive POST requests (webhooks) and process them within seconds.

**Task** – My goal was to design and deploy a highly available webhook listener that could handle up to 5 k events per minute, guarantee at‑least‑once delivery, and persist payloads for auditability without blocking the main payment flow.

**Action** – I first created an API Gateway endpoint in AWS (REST API) with a custom domain, enabled TLS1.2, and attached an IAM role that only allowed POST to this resource. Using Lambda Authorizer we validated the HMAC signature from the service to prevent spoofing. The Lambda function wrote the payload into DynamoDB (partition key = `event_id`) and pushed a message to an SQS queue for downstream processing. A separate worker Lambda batch‑processed messages, updated our fraud score table in Aurora PostgreSQL, and sent internal alerts via SNS if risk exceeded thresholds. I also added CloudWatch metrics and alarms on failed deliveries, and used API Gateway’s throttling to protect against spikes.

**Result** – The webhook integration achieved 99.9 % success rate over a two‑month test period, processed 4.8 k events/min with <200 ms latency, and reduced fraud losses by 12 %. I learned how to combine serverless components for secure, scalable event ingestion while maintaining audit trails and graceful error handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
