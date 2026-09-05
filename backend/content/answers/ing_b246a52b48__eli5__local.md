---
qid: ing_b246a52b48__eli5__local
question: 'Explain: Durability and Replay — Pub/Sub | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 190
total_tokens: 350
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:19:26-05:00'
sources: []
---

Think of a pub/sub system like a town’s public notice board.  
**Durability** is the guarantee that once someone posts a message, it stays on the board until everyone who needs to see it has read it – even if the town hall (the server) crashes or power goes out. In practice, this means the system writes each message to permanent storage before telling subscribers it’s ready.

**Replay** is like having a “copy‑cat” that can re‑post old notices for anyone who missed them or just joined the town. When a new subscriber starts up, the system hands it all past messages (the replay), so it doesn’t miss any important announcements.  

Together, durability and replay make sure every message survives failures and reaches every subscriber, no matter when they come online.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
