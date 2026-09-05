---
qid: ing_0d27233bed__eli5__local
question: 'Explain: User Online Status Indicator — Real Time Presence Platform System
  Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 236
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:56:24-05:00'
sources: []
---

Think of the online‑status feature like a smart “traffic light” for a big group chat room.  
When someone opens the app, his device sends a quick “I’m here now” ping to a tiny traffic‑light server (the *presence broker*). The broker keeps a list—just a map that says who is on and when they last sent a ping. Every few seconds each user’s client checks this list; if someone hasn’t pinged in, the light turns yellow or red, showing “away.”  

The broker uses a fast key‑value store (like Redis) so reads/writes are almost instant, and it pushes updates to all clients via websockets, so everyone sees the change without refreshing. If many users join at once, multiple brokers can run behind a load balancer, sharing the map in memory or through a small cluster.  

So, just as traffic lights keep drivers informed of road status, this tiny real‑time system keeps people aware of who’s actually online.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
