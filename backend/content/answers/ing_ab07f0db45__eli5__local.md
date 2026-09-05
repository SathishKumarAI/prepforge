---
qid: ing_ab07f0db45__eli5__local
question: 'Explain: Database/Storage — Design Notification Service | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 310
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:14-05:00'
sources: []
---

Think of a notification system as a **mailroom** for an office building that sends letters (messages) to workers (users).  

1. **Database / Storage – the Post Office Box**  
   The database is where every letter’s details are kept: who it’s for, what type of message, when it was sent, and whether the worker has read it. It must be fast enough that a worker can check their box in milliseconds, even if thousands of letters arrive each second.

2. **Designing the Mailroom**  
   - *Inbox table*: stores one row per letter (user + content + status).  
   - *Index by user*: lets the system pull all letters for a given worker instantly.  
   - *Batch writes*: when many workers get the same alert, the mailroom writes one “batch” entry and then copies it to each inbox, saving space.

3. **Delivery (Notification Service)**  
   The service reads new rows from the database, pushes them via push notifications or email, and marks them as delivered. If a worker is offline, the letter stays in the box until they log back in.

In short, the database is the reliable post office that stores every message, while the notification service is the mailroom that reads, delivers, and updates status—just like a well‑run office building keeps its employees informed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
