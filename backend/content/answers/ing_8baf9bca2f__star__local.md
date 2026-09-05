---
qid: ing_8baf9bca2f__star__local
question: 'Explain: Step 5: Message Creation and Formatting — Design Notification
  Service | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 352
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:21-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were rolling out a new fraud‑alert feature that needed instant push notifications for every suspicious transaction. The existing email system was too slow and the in‑app alerts weren’t flexible enough for multi‑channel delivery.

**Task** – I had to design the “Message Creation & Formatting” layer of our notification service so it could generate personalized, channel‑specific payloads (email, SMS, push) at scale while keeping latency under 200 ms per user.

**Action** – I started by defining a unified message schema in Protobuf that included placeholders for dynamic data. Then I built a templating engine using Jinja2 to merge the schema with user context and business rules. To keep formatting fast, I pre‑compiled templates into bytecode and cached them in Redis. For personalization, I integrated a lightweight rule engine (Drools) that applied segmentation logic before rendering. Finally, I exposed a REST endpoint that accepted a message type, payload, and recipient list; the service would serialize to the appropriate format and push it to the corresponding channel queue (Kafka for email/SMS, Firebase Cloud Messaging for mobile).

**Result** – The new system cut notification latency from 1.2 s to 140 ms, increased delivery success rates by 18 %, and allowed us to add a third channel (WhatsApp) in just two weeks. I learned that decoupling message logic from formatting, caching compiled templates, and using a rule engine can dramatically boost both speed and flexibility in a notification pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
