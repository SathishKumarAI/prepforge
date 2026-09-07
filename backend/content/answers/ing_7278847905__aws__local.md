---
qid: ing_7278847905__aws__local
question: 'Explain: Stage 2: Technical Architecture Deep Dive (90 min, 2 Senior Engineers)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 450
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:44:16-05:00'
sources: []
---

**Situation / Task**  
In my last role at a fintech startup we were moving from a monolithic inference pipeline to a **Stage‑2 AI architecture** that could serve millions of real‑time predictions with sub‑100 ms latency. The interview panel asked me to walk through the design and justify every AWS service choice.

**Action (Design)**  
1. **Data ingestion** – *Amazon Kinesis Data Streams* for streaming raw logs, *Glue* for schema cataloging, and *S3* as a durable landing zone.  
2. **Feature store** – *DynamoDB Global Tables* with TTL for low‑latency lookups; batch updates via *Glue* jobs on a daily schedule.  
3. **Model serving** – *Amazon SageMaker Endpoints* behind an *Application Load Balancer* (ALB) to auto‑scale per request, using *Multi‑model endpoints* to keep costs down.  
4. **Observability** – *CloudWatch Metrics/Alarms*, *X-Ray* for tracing inference latency, and *Athena* on S3 logs for post‑hoc analysis.  
5. **Security & Governance** – *IAM roles*, *KMS* encryption at rest, and *AWS Config* rules to enforce tagging.

**Result (Metrics)**  
- Latency dropped from 350 ms to **78 ms** (90% reduction).  
- Cost per inference fell by **45 %** due to multi‑model deployment.  
- Throughput scaled from 5k TPS to **200k TPS** without any SLA breaches.

**Reflection**  
I took full ownership of the migration, performed a deep dive into DynamoDB’s consistency trade‑offs, and learned that batching feature updates in Glue can save 30 % in read capacity units. The bar‑raiser would note my clear data‑driven impact, architectural depth, and proactive failure mitigation (e.g., fallback to S3‑based batch inference during endpoint outages).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
