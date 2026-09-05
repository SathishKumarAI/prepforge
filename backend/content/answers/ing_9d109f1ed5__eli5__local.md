---
qid: ing_9d109f1ed5__eli5__local
question: 'Explain: Broadcast — Liveblocks | Realtime infrastructure for multiplayer
  apps and agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 252
total_tokens: 415
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:46:27-05:00'
sources: []
---

**Broadcast with LiveBlocks – a real‑time “town square” for multiplayer apps**

Imagine a town square where people shout out news, and everyone nearby hears it instantly. In LiveBlocks, that square is the *broadcast* channel.  
When one player (or an AI agent) sends a message—say, “I moved to point (10, 5)”—the system copies that single line of text and hands a copy to every other participant who has joined the same room. No one else sees it; only those in the square hear it.  

*Broadcast* is simply this one‑way “shout” from one user to all others in a room.  
The *room* is the shared virtual space where players and agents live together.  
A *client* is any device (phone, computer, game console) that connects to LiveBlocks.  

Because LiveBlocks handles the copying for you, your code stays tiny: just “broadcast('move', data)” and everyone else receives it instantly—just like shouting in a town square where no one misses the news.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
