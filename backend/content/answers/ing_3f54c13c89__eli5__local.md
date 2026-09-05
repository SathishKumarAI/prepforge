---
qid: ing_3f54c13c89__eli5__local
question: 'Explain: Heartbeat — Real Time Presence Platform System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 279
total_tokens: 441
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:16:19-05:00'
sources: []
---

Imagine a busy train station where each passenger’s phone is like a ticket that shows the conductor (the server) where they are at any moment.  
**Heartbeat** is the tiny “ping” every phone sends—just a quick “I’m still here!” message, so the conductor knows the passenger hasn’t fallen off the platform.  
A **Real‑Time Presence Platform** collects all those pings and instantly updates a big digital map that everyone can see: who’s at the station, where they’re heading, or if someone has left.  

In system design terms, you build three parts:

1. **Clients** (phones) that send frequent heartbeats.  
2. **Message broker** (like a radio tower) that receives those pings and forwards them to everyone who wants to know the status.  
3. **Presence store** (a quick‑lookup database) that keeps the latest “I’m at platform 4” for each user.

The trick is keeping the traffic light (heartbeats) small so the system stays fast, yet reliable enough that if a heartbeat stops, the presence map instantly marks the person as gone. That’s real‑time presence in plain train‑station terms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
