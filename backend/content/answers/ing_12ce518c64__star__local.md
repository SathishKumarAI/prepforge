---
qid: ing_12ce518c64__star__local
question: 'Explain: Soft — Amazon Simple Notification Service endpoints and quotas
  - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 296
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:06:09-05:00'
sources: []
---

**Situation:** While leading a fraud‑detection model rollout for an online marketplace, we hit a sudden spike in real‑time alerts during a promotional event—up to 12,000 messages per minute—causing our downstream analytics pipeline to choke.

**Task:** I had to redesign the notification flow so that Amazon SNS could reliably fan out events without hitting its soft limits (5 000 requests/sec per region) and ensure no data loss or delay for critical fraud signals.

**Action:** First, I broke the payload into smaller, idempotent messages and used SNS topic subscriptions with AWS Lambda as an intermediary. The Lambda function performed a lightweight batch aggregation and pushed the aggregated events to an SQS queue, effectively throttling traffic below the 5 000‑req/sec soft limit. I also enabled SNS delivery retries and configured CloudWatch alarms for “delivery failures” and “message backlog.” Finally, I set up IAM policies to allow only necessary services to publish, reducing noise.

**Result:** The system handled 12,500 messages/min without dropped alerts; end‑to‑end latency stayed under 200 ms. We avoided costly SNS overage charges and learned that combining throttling via Lambda with SQS is a robust pattern for soft quota management in event‑driven ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
