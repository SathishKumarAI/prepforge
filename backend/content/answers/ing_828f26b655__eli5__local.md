---
qid: ing_828f26b655__eli5__local
question: 'Explain: Endpoint: GET /users/{user_id}/presence — Design WhatsApp | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 248
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:53-05:00'
sources: []
---

Think of the endpoint **GET /users/{user_id}/presence** as a phone book entry that tells you whether a particular person is “online” or “offline.”  
When you call this endpoint, you give the system a *user_id*—like writing down someone’s name in the phone book. The system looks up that name in its “Presence Ledger,” a quick‑lookup table that records each user’s current status (online, typing, last seen). It then returns a tiny message: `{ "status": "online", "last_seen": "2024‑09‑05T14:32Z" }`.  

Just as the phone book doesn’t keep you on hold while it searches, the system keeps the response fast by caching recent statuses and using an efficient key–value store. The design balances speed (a single read) with freshness (periodic updates from the chat app). In short, this endpoint is the “call‑me‑if‑you’re‑there” line for a user’s presence, built on a simple lookup table that stays up‑to‑date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
