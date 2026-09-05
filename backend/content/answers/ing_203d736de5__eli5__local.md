---
qid: ing_203d736de5__eli5__local
question: 'Explain: Storage Requirements — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 257
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:27:14-05:00'
sources: []
---

Imagine a giant library that never closes, where every book is a notification waiting to be read by a user. In a **notification service** the “books” are tiny data packets: an ID, who should see it, what type (email, push, SMS), when it was sent, and whether the user has opened it.  
The storage requirement is like deciding how many shelves you need in that library. If you expect millions of notifications per day, each packet might be only a few hundred bytes, but multiplied by days and users the space grows quickly—think gigabytes for a week, terabytes for a year.

Key terms:  
- **Payload** – the actual content of the notification (text, image link).  
- **Metadata** – information about the payload (timestamp, recipient ID).  
- **Retention policy** – how long you keep old notifications before deleting them.  

So, estimate the daily volume, size per packet, and retention period; that product gives you the storage footprint. Keep it simple, scale horizontally, and use compression or archival for older data to stay efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
