---
qid: ing_b694a08750__aws__local
question: 'Explain: Make Processing Safe to Repeat — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 475
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:16:48-05:00'
sources: []
---

**Situation / Task**  
In my last role I built a webhook ingestion layer for a SaaS product that needed to be *idempotent* so that duplicate or retried callbacks wouldn’t corrupt downstream analytics. The requirement was 99.9 % success with <200 ms latency while handling up to 10k requests per second.

**Action**  
I designed a **serverless, event‑driven pipeline**:  

| Component | AWS Service | Reasoning |
|-----------|-------------|----------|
| API entry point | Amazon API Gateway (REST) | Low‑latency, throttling, built‑in request validation |
| Idempotence store | DynamoDB (partition key = webhook_id, sort key = event_type) | O(1) read/write, strong consistency |
| Queueing & retry | SQS FIFO + DLQ | Guarantees order and at‑least‑once delivery |
| Processing | AWS Lambda + Step Functions | Parallel workers, state machine for complex workflows |
| Monitoring | CloudWatch metrics + X-Ray traces | 5 % error rate alert, end‑to‑end latency SLA |

Key steps:  
1. **Validate** the payload in API Gateway and immediately *upsert* a record with status “RECEIVED”.  
2. If the same webhook_id arrives again, Lambda checks DynamoDB; if status ≠ “PROCESSED”, it skips processing.  
3. Successful runs write “PROCESSED” and publish a SNS event to downstream services.

**Result**  
- **99.92 % success** on first try, 0.08 % retries due to transient network glitches.  
- Latency stayed <180 ms for 95 % of requests.  
- Cost was <$50/month for the entire stack.  

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end flow, *dove deep* into DynamoDB consistency models, quantified impact with real SLA metrics, and learned that coupling idempotence to a fast key/value store dramatically reduces duplicate processing risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
