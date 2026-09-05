---
qid: ing_177b4d5c93__eli5__local
question: 'Explain: Design WhatsApp — Grokking System Design Interview: Patterns &
  Mock Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 264
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:12:54-05:00'
sources: []
---

Imagine you’re building a giant, invisible library where every book is a message and the shelves are your servers. In a “Design WhatsApp” interview you first ask: **Who will use it?** (everyone, maybe millions) and **What must it do?** (send text, pictures, voice notes, keep privacy, work offline).  

Next, sketch the main rooms of the library:  
* **Entry hall (client app)** – where users type or record.  
* **Mailroom (message broker)** – a fast queue that hands messages to the right shelf without delay.  
* **Shelves (databases)** – one for user profiles, one for message history, and another for media files.  

You then decide how books travel: use a *push* system so shelves update instantly, but also keep a *copy* on the client so it works when offline. Finally, you talk about safety locks—end‑to‑end encryption—and how many shelves (servers) you’ll need to avoid crowding.  

In short, the interview is about mapping this library layout onto real technologies while keeping speed, scale, and privacy in balance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
