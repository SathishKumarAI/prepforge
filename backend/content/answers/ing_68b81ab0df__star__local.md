---
qid: ing_68b81ab0df__star__local
question: How to update the score of a player? — Leaderboard System Design - System
  Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 348
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:56:49-05:00'
sources: []
---

**Situation:**  
At my last company we launched an online multiplayer game with a global leaderboard that refreshed every minute. A sudden spike in traffic during a promotional event pushed the leaderboard service to its limits; our Redis cache started evicting entries, causing laggy score updates for thousands of players.

**Task:**  
I needed to redesign the update pipeline so that player scores could be written reliably and reflected on the leaderboard within 2 seconds, even under peak load, while keeping memory usage in check.

**Action:**  
First, I introduced a two‑tier write strategy: local in‑memory buffers per server instance held recent score deltas, then a background worker batch‑persisted them to PostgreSQL every 500 ms. For the read side, I switched from a single Redis hash to a sorted set with score as the key, enabling O(log N) rank queries. To handle evictions, I used Redis’ LRU eviction policy combined with a secondary “hot” tier in Memcached for top‑10 k players. Finally, I added a circuit breaker that routed writes to a Kafka queue when latency exceeded 200 ms, guaranteeing eventual consistency.

**Result:**  
The system now updates scores within 1.5 seconds on average, even during traffic peaks of 50k concurrent users. Leaderboard refresh latency dropped from 10 s to under 2 s, and we saw a 25% reduction in player churn during events. I learned the importance of decoupling writes from reads and using tiered caching to balance speed and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
