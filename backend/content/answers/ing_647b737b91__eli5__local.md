---
qid: ing_647b737b91__eli5__local
question: 'Explain: Non-Functional Requirements — Leaderboard System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 278
total_tokens: 440
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:16-05:00'
sources: []
---

**Non‑functional requirements (NFRs)** are the rules that tell a system *how* it should behave, not what it should do—think of them as the “quality” checklist: speed, reliability, security, and so on.

Imagine building a **race track for an online gaming leaderboard**.  
- **Speed** is like how quickly cars (score updates) can zoom around the circuit; you need low latency so players see their new rank almost instantly.  
- **Scalability** is the number of lanes: as more racers join, the track must widen without traffic jams—your database and caching layers should handle millions of concurrent updates.  
- **Reliability** is the safety net that catches any car that crashes; you need replication and fail‑over so data never gets lost if a server dies.  
- **Security** is the guard at the entrance, ensuring only authorized racers (players) can access the track and tamper with their positions.

These NFRs shape every design choice—caching strategy, sharding plan, monitoring tools—so that the leaderboard runs smoothly, fairly, and always up to date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
