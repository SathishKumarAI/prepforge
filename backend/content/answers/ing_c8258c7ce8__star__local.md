---
qid: ing_c8258c7ce8__star__local
question: 'Explain: Requirements Gathering — Design Notification Service | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 316
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:54-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new mobile app that let users book fitness classes. Within three weeks of launch our customer support team was flooded with complaints that push notifications were delayed or missing, especially during peak booking times.

**Task:**  
I had to gather requirements and design a notification service that could reliably deliver real‑time alerts (booking confirmations, class reminders, cancellations) at scale while keeping costs low and respecting user preferences.

**Action:**  
First, I interviewed product managers, devs, and the support team to map out all notification flows, latency targets (< 2 s for booking confirms), and opt‑in rules. Then I drafted a high‑level architecture: a publish/subscribe model using Kafka for event ingestion, an auto‑scaling Lambda layer that formats messages per channel (FCM/APNs), and a Redis cache to de‑duplicate events. I defined SLA metrics, built a monitoring dashboard with Grafana, and set up A/B testing on notification templates. Finally, I presented the design to stakeholders, incorporating feedback on GDPR consent checks before publishing.

**Result:**  
The new service reduced missed notifications from 12% to < 1%, cut infrastructure cost by 30%, and improved user satisfaction scores by 15 points in the next survey. I learned that clear stakeholder alignment and real‑time observability are key to building a resilient notification system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
