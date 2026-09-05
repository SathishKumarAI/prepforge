---
qid: ing_87563131c6__eli5__local
question: 'Explain: 5.5 Security — Design Notification Service | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 267
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:10:42-05:00'
sources: []
---

**Imagine a town’s emergency radio system.**  
When something dangerous happens—say, a fire or an earthquake—the town hall (the *event source*) broadcasts a warning to every house that needs it. Each house has its own radio (a *user device*). The town hall doesn’t send the same message to everyone; instead, it first checks which houses have a smoke detector or a seismic sensor and only calls those that need the alert.

In a notification service, the **event source** is any part of your app that “fires” an alarm (e.g., a new password attempt). The **service** routes the message to the right users by looking up who should be warned—just like the town hall checks which radios have detectors. It then pushes the alert through secure channels (email, SMS, push) and keeps a log so you can prove that every required party was notified.

*Security* means the service verifies each request (only trusted parts of your system can send alerts), encrypts the message in transit, and authenticates users before delivering the notification. This simple town‑radio picture captures how an event triggers a targeted, secure alert to the right people.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
