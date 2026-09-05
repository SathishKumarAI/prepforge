---
qid: ing_9ca6be519a__eli5__local
question: 'Explain: Daily Reservations and TPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 214
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:46-05:00'
sources: []
---

Think of Airbnb like a huge, worldwide hotel chain that can book rooms every minute.  
**Daily Reservations** are the “booking” requests that people send to reserve a place for a specific date—just as you would call a front‑desk to hold a room. In the system each reservation is an object with a user id, listing id, check‑in/out dates and a status (pending, confirmed, cancelled).

**TPS (Transactions Per Second)** measures how many of those booking calls the whole platform can handle at once—like how many front‑desks are open in all hotels together. If the system receives 5 000 TPS during peak holiday season, it must process 5 000 reservation requests every second without dropping or delaying any.

So, daily reservations are the individual “room holds,” and TPS is the overall speed of the network that keeps all those holds moving smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
