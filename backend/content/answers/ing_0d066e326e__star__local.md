---
qid: ing_0d066e326e__star__local
question: 'Explain: Amazon SNS resource — Amazon Simple Notification Service endpoints
  and quotas - AWS General Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 377
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:54:42-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a real‑time alert system for our fraud detection pipeline. The goal was to push instant notifications to dozens of mobile apps and web dashboards whenever suspicious activity hit a threshold.

**Task** – I needed to design an SNS architecture that could handle 10,000 messages per second, support multiple protocols (SMS, HTTP/HTTPS, email), and stay within AWS quotas while keeping costs predictable.

**Action** – First, I set up a topic hierarchy: a “fraud‑alerts” parent with child topics for each region. Using the AWS SDK, I programmatically created 50 endpoints (25 HTTPS, 15 SMS, 10 email) and subscribed them to the appropriate subtopics. To stay under the default 20 subscriptions per endpoint limit, I consolidated similar consumers into a single Lambda that fan‑out the payload. I also enabled topic policies to enforce strict IAM permissions, and configured SNS’s delivery retry strategy with exponential back‑off. Finally, I used CloudWatch Alarms to monitor “NumberOfMessagesPublished” against the Service Quota of 30,000 requests per second, and set up an auto‑scaling rule that added a new topic partition when traffic approached 80% of the limit.

**Result** – The system handled peak loads of 12,500 messages/s without any delivery failures, keeping latency below 200 ms. We reduced SNS costs by 18% through smarter endpoint grouping and avoided quota throttling entirely. This experience taught me how to architect SNS for scale while respecting AWS limits and maintaining cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
