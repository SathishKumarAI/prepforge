---
qid: ing_06ecbf0a7b__star__local
question: 'Explain: Amazon SNS — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 340
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:42:48-05:00'
sources: []
---

**Situation:**  
At a mid‑size fintech startup I was leading the migration of our legacy batch billing system to a microservice stack on AWS. The existing cron jobs were hitting 30 % SLA violations during peak usage, and we needed real‑time notifications for every invoice status change.

**Task:**  
Design an event‑driven pipeline that would decouple services, ensure reliable message delivery, and provide auditability while keeping latency under 200 ms for critical events.

**Action:**  
I introduced Amazon SNS as the central pub/sub hub. Each microservice published domain events (e.g., `InvoiceCreated`, `PaymentSucceeded`) to a topic with JSON schema validation via AWS EventBridge. Subscriptions were split: an SQS queue for the async payment processor, an HTTP/HTTPS endpoint for the UI dashboard, and an SNS mobile push for instant alerts. I enabled raw message delivery and added a dead‑letter queue to capture failed deliveries. For high throughput, I leveraged FIFO topics and deduplication IDs to prevent duplicate notifications during retries.

**Result:**  
The new architecture cut invoice processing time from 12 s to under 80 ms on average, reduced SLA violations to <2 %, and increased developer velocity by allowing services to evolve independently. I learned that choosing the right SNS subscription type (raw vs. structured) can dramatically simplify downstream consumers and that a well‑planned dead‑letter strategy is essential for production reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
