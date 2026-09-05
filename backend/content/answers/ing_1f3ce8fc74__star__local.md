---
qid: ing_1f3ce8fc74__star__local
question: 'Explain: Use a Dead Letter Queue — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 346
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:46-05:00'
sources: []
---

**Situation:**  
In the last product launch I was responsible for the webhook delivery layer of our SaaS platform. We had over 12 k customers subscribing to real‑time events, and a spike in traffic during beta caused a 9% drop in successful deliveries—most failures were transient network hiccups that weren’t retried automatically.

**Task:**  
I needed to build a robust mechanism that would capture failed webhook attempts, retry them intelligently, and avoid blocking the main pipeline while ensuring no data loss or duplicate processing.

**Action:**  
I introduced a Dead Letter Queue (DLQ) using AWS SQS as a side‑channel. Each failed POST was wrapped in a JSON envelope containing payload, headers, attempt count, and a timestamp. The DLQ consumer ran on an ECS Fargate task that processed messages in batches of 10, applied exponential backoff with jitter, and updated the attempt counter. If attempts exceeded five, the message was moved to a “permanent‑fail” SQS queue for manual investigation. I also added CloudWatch metrics to track DLQ depth, retry latency, and failure reasons.

**Result:**  
After deployment, successful delivery rate climbed from 91% to 99.7%, with the DLQ holding only ~30 messages at peak. The system now logs every failure path, allowing us to surface bugs quickly. I learned that a simple DLQ pattern can turn brittle webhook logic into a self‑healing, observable service without adding complexity to the main flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
