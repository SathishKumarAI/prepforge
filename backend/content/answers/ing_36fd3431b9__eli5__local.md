---
qid: ing_36fd3431b9__eli5__local
question: 'Explain: Push Notification Service — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 255
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:02:53-05:00'
sources: []
---

Imagine you’re the post‑man of a bustling city where every house (user) can receive urgent letters (messages). The “push notification” is that letter telling a person their mailbox has new mail, even if they’re out walking.  

**Key parts of the system**

1. **Message queue** – like a sorting office that holds all letters before delivery.  
2. **Dispatcher** – the post‑man who checks which houses are open (device online) and hands them the letter.  
3. **Device registry** – a map that records every house’s address and whether it’s currently reachable.  

When WhatsApp sends a new chat, the message is placed in the queue. The dispatcher pulls letters from the queue, looks up each recipient’s device status from the registry, and if the phone is online, pushes the notification through the carrier (Apple Push Notification Service or Firebase Cloud Messaging). If offline, it waits until the phone comes back up, then delivers.  

This keeps the city running fast, never overloads any single post‑man, and ensures every user gets timely alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
