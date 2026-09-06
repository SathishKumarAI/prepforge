---
qid: ing_d77a3de955__think__local
question: What is Database Sharding? — Sharding | System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 412
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:10:05-05:00'
sources: []
---

**Thinking process for explaining “Database Sharding” in a system‑design context**

1. **Clarify the scope and assumptions**  
   - Confirm whether the interview wants a *conceptual* answer or a *technical implementation* one.  
   - Assume the audience knows basic relational/NoSQL databases but not distributed systems jargon.

2. **Choose a mental model**  
   - Think of sharding as “horizontal partitioning” – splitting a large table into smaller, independent tables (shards) that can live on separate servers.  
   - Use the *“store‑by‑key”* analogy: each record has a key that determines which shard holds it.

3. **Step‑by‑step reasoning**  
   - Start with the problem: single DB bottlenecks (CPU, memory, I/O).  
   - Show how sharding distributes load and storage across nodes.  
   - Explain routing logic (hashing, range, directory) and how queries hit one or multiple shards.  
   - Mention trade‑offs: simpler scaling vs. cross‑shard joins, consistency challenges.

4. **Avoid common traps**  
   - Don’t conflate sharding with replication; they solve different problems.  
   - Avoid over‑promising “zero latency”—sharding can add complexity and potential latency for distributed queries.  
   - Be careful not to gloss over the *data model* impact (e.g., foreign keys across shards).

5. **Sanity‑check & communicate**  
   - Verify that the explanation covers: definition, motivation, basic implementation, pros/cons.  
   - Use a concise example (e.g., user table split by user ID range) to illustrate routing and fault tolerance.  
   - Keep language simple yet precise; end with a quick recap of when you’d choose sharding in a design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
