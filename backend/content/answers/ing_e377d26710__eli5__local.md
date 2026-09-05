---
qid: ing_e377d26710__eli5__local
question: 'Explain: Connection Load — Design WhatsApp | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 197
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:35:42-05:00'
sources: []
---

**Connection load** is the number of active “phone‑to‑server” lines a chat app keeps open at any moment.  
Think of it like a busy phone switchboard: every user who opens WhatsApp wants to talk, so the server must keep a line ready for each one. If too many lines are held, the switchboard (the server) runs out of capacity and new callers get dropped.

In WhatsApp’s design we treat each active chat session as a lightweight socket or WebSocket that stays open so messages arrive instantly. The *connection load* is simply the total number of those sockets at peak time. We must plan servers, load balancers, and database shards to handle this volume without slowdown. So, connection load = how many “live phone lines” the system keeps ready for instant messaging.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
