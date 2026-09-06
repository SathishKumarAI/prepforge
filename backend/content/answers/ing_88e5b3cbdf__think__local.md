---
qid: ing_88e5b3cbdf__think__local
question: 'Explain: Range-based sharding — What is Database Sharding? - Shard DB Explained
  - AWS'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 424
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:05:12-05:00'
sources: []
---

**1️⃣ Clarify & Assume**  
   * Confirm that “range‑based sharding” refers to partitioning a database by key ranges (e.g., user ID ≤ 1000 → shard A).  
   * Assume the audience knows basic DB concepts but not sharding specifics.  
   * Decide on a concrete example (user table) for illustration.

**2️⃣ Mental Model / Framework**  
   * **Data Distribution**: How rows are allocated across shards.  
   * **Query Routing**: Which shard to hit based on key.  
   * **Benefits & Trade‑offs**: Scalability, locality vs. complexity.

**3️⃣ Step‑by‑Step Reasoning**  
   1. Define a sharding key (e.g., `user_id`).  
   2. Partition the key space into contiguous ranges → each range maps to one shard.  
   3. When inserting, compute which range the key falls in → route to that shard.  
   4. For reads/writes, use the same logic; cross‑shard joins become expensive.  
   5. Mention AWS services (Amazon RDS + Aurora Global Database, DynamoDB partitioning) that implement this pattern.

**4️⃣ Common Traps to Avoid**  
   * Forgetting that uneven key distribution can cause hot shards.  
   * Assuming all queries automatically hit the correct shard—must have routing logic or a lookup table.  
   * Over‑emphasizing simplicity; in reality, rebalancing ranges requires data migration.

**5️⃣ Sanity‑Check & Communicate**  
   * Re‑explain in plain terms: “Think of a library where each shelf holds books from a specific title range.”  
   * Verify that the explanation covers what sharding is, how range‑based sharding works, and why AWS offers it.  
   * End with a quick summary sentence to reinforce key points.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
