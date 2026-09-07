---
qid: ing_6cade3cdea__faang__local
question: 'Explain: Leaderboard database schema design — Leaderboard System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 452
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:56:07-05:00'
sources: []
---

**Clarify**  
We need a relational/NoSQL design that stores user scores, timestamps, and rankings for multiple games/tournaments while supporting fast reads (top‑N) and writes (score updates). Assume: *users are many (10⁶+)*, *scores change often*, *leaderboards are per game and possibly per time window (daily, weekly)*.  

**Approach**  
1. **Entities** – `User`, `Game`, `Leaderboard` (game‑specific), `ScoreEntry`.  
2. **Storage choice** – Use a hybrid: relational for user/game metadata; a key‑value/column store (e.g., DynamoDB, Bigtable) for score entries and sorted sets.  
3. **Primary keys** – `LeaderboardID = GameID + WindowType`; `RowKey = LeaderboardID#UserID`.  
4. **Indexes** – Store scores in a sorted set or an inverted index (`Score → UserIDs`) to allow O(log N) top‑N queries.  

**Depth**  
- **Write path**: On score submission, upsert the row, then update the sorted set (incremental). Complexity: O(log N).  
- **Read path**: Fetch top‑N from sorted set; for pagination use cursor tokens.  
- **Consistency**: Use eventual consistency with a background job to reconcile discrepancies; strong consistency only on critical reads.  
- **Scalability**: Partition by `LeaderboardID`; each partition can be sharded horizontally.  

**Edge Cases**  
- Duplicate submissions → idempotent writes.  
- Score ties → secondary sort by timestamp or user ID.  
- Window rollover (e.g., new day) → create a fresh leaderboard and archive old one.  

**Optimize & Communicate**  
Explain trade‑offs: using sorted sets speeds reads but requires extra write cost; eventual consistency reduces latency. Mention monitoring metrics (latency, throughput) and auto‑scaling thresholds. Conclude with a diagram of the key tables/collections to visualize the flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
