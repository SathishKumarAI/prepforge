---
qid: ing_59382b2808__star__local
question: 'Explain: Hard — Amazon Simple Notification Service endpoints and quotas
  - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 377
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:18-05:00'
sources: []
---

**Situation:**  
While leading a real‑time fraud detection pipeline for a fintech startup, we had to push alerts to multiple downstream services—webhooks, SMS gateways, and an internal dashboard—all via Amazon SNS. By the third month of deployment, our team hit the “Maximum number of endpoints per topic” limit (10,000) because each new feature added dozens of subscribers.

**Task:**  
I needed to redesign the notification architecture so we could scale beyond the quota without losing reliability or introducing latency spikes, while keeping costs under a $1k/month budget.

**Action:**  
First, I mapped all subscriber patterns and identified redundant endpoints (e.g., multiple microservices listening to the same topic). I consolidated them into “fan‑out” topics: one SNS topic per business domain, then used Lambda subscriptions to route messages internally. Next, I leveraged AWS AppConfig to toggle feature flags that temporarily disabled legacy endpoints during peak load windows. For external services with strict quotas, I introduced a short‑lived SQS queue as an intermediary—SNS pushes to the queue (within its 120,000 message limit) and a consumer Lambda batches messages for each external API, respecting their rate limits. Finally, I implemented CloudWatch metrics and alarms on “NumberOfMessagesPublished” per topic to catch any quota breaches early.

**Result:**  
The refactor cut the number of SNS topics from 12 to 4, bringing us well below the 10,000‑endpoint cap. Message latency dropped from an average of 350 ms to 120 ms, and we avoided a $3k overage in SNS usage. I learned that thoughtful topic hierarchy and intermediary queues can turn hard AWS limits into manageable design constraints, keeping both cost and performance in check.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
