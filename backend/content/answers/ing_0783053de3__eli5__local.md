---
qid: ing_0783053de3__eli5__local
question: 'Explain: High Level Design — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 279
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:47:29-05:00'
sources: []
---

Imagine a school where every teacher wants to send a quick message to students—some are urgent announcements, others are reminders for homework. The “Notification Service” is the school’s central mailroom that decides **who** gets what message and **how** it arrives (email, text, app push).  

At a high level you split the job into three parts:

1. **Producer layer** – teachers (or any app) hand off messages to the mailroom.  
2. **Broker/Queue** – a reliable mailbox that holds each letter until someone picks it up. Think of it as a digital post‑office with separate lanes for urgent, normal, and scheduled mail.  
3. **Consumer layer** – delivery workers (email server, SMS gateway, push notification service) pull letters from the queue and send them to the right student’s device.

You also add a **routing table** (like a contact list) that tells the system which channel each student prefers, and a **retry policy** so if a letter gets lost it’s sent again.  

With this simple “mailroom” map you can scale: add more lanes for more traffic, use multiple workers to speed delivery, or swap out one channel without touching the others.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
