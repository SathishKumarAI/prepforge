---
qid: ing_ff12a22913__star__local
question: 'Explain: Service quotas — Amazon Simple Notification Service endpoints
  and quotas - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:51-05:00'
sources: []
---

**Situation:** While migrating our customer‑onboarding workflow to a serverless architecture, we hit an unexpected bottleneck: the number of Amazon SNS topics and subscriptions exceeded the default quota, causing message delivery delays during peak sign‑up periods.

**Task:** I had to ensure reliable, real‑time notifications for new users without exceeding AWS limits, all while staying within budget and maintaining compliance with data‑privacy regulations.

**Action:** First, I reviewed the AWS General Reference on SNS quotas—topic creation capped at 100 per account, subscriptions at 10,000 per topic, and publish rate limited to 30 K messages/second. Using CloudWatch metrics, I identified that our peak traffic required about 15 K publishes in a minute, which was safe but left little headroom for growth. I refactored the architecture: consolidated redundant topics, leveraged SNS message filtering to reduce unnecessary subscriptions, and enabled Amazon Simple Queue Service (SQS) dead‑letter queues for retry logic. I also requested a quota increase through AWS Support for topic creation, providing proof of need and projected growth.

**Result:** Post‑refactor, we reduced the number of active topics from 120 to 80, keeping us below the default limit while still supporting all notification flows. Publish latency dropped from ~350 ms to <90 ms during peak hours, and our monitoring now shows a 30% lower error rate. I learned that proactive quota management combined with architectural optimization can prevent scalability issues before they impact users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
