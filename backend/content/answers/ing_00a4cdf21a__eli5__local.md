---
qid: ing_00a4cdf21a__eli5__local
question: 'Explain: API Gateway — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 248
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:36:12-05:00'
sources: []
---

**API Gateway – the “Ticket‑Collector” for a music streaming service**

Imagine a big concert hall (Spotify). Every seat is a different type of song, playlist, or user profile. The **API gateway** sits at the front entrance like a friendly ticket‑collector who checks everyone’s tickets before they enter.

- **Routing**: It tells each visitor which part of the hall to go to—music tracks go to the “Audio” room, playlists to the “Curator” room, user data to the “Account” room.  
- **Authentication & Rate‑Limiting**: Before letting someone in, it verifies their ticket (user token) and ensures no one rushes through too fast, keeping the crowd calm.  
- **Aggregation**: Sometimes a single request needs several rooms—like a playlist that pulls songs from multiple servers. The gateway gathers those parts and returns one tidy response to the user.

So, in Spotify’s design, the API gateway is the smart gatekeeper that directs traffic, protects resources, and keeps everything running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
