---
qid: ing_af6a5fb2de__faang__local
question: 'Explain: Inbox Search Feature at Facebook using HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 523
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:31:19-05:00'
sources: []
---

**Clarify**  
We’re asked how Facebook’s “Inbox Search” could be built on top of HBase. I’ll assume the goal is a fast, scalable full‑text search over millions of messages per user, with real‑time updates and minimal latency.

**Approach**  
1. **Data model** – Store each message as an HBase row keyed by `userID:messageID`. Columns hold metadata (timestamp, thread) and the raw text.  
2. **Inverted index table** – A second HBase table (`index`) where rows are `term#shard` and columns are `userID#offset`. Each column points to the message row(s) containing that term.  
3. **Tokenization & sharding** – Tokenize on ingestion, hash terms into shards to spread load.  
4. **Query flow** – Parse user query → fetch relevant index rows → intersect per‑term columns for a given user → retrieve message rows from the primary table.  

**Depth**  
- *Write path*: Ingestion writes the message once and updates `index` with ~10–20 column entries (average tokens). HBase’s write‑optimized architecture handles this.  
- *Read path*: For a 3‑term query, we read 3 index rows (O(1) per term), perform set intersection in memory, then batch-get the message rows. Latency < 50 ms for typical queries.  
- *Complexity*: Write ~O(T) where T = #tokens; Read ~O(K + M) with K terms and M matching messages.  

**Edge Cases**  
- **Hot terms** (e.g., “hello”) create large index rows → shard by hash or use Bloom filters to reduce size.  
- **Data consistency** – eventual consistency between message and index tables; resolve via write‑ahead logs.  
- **Deleted messages** – mark in primary table; clean up index lazily.  

**Optimize & Communicate**  
We could add a secondary cache (e.g., Redis) for popular queries, or use Bloom filters to skip absent terms quickly. In discussing this with interviewers, I’d emphasize the trade‑off between write amplification and read speed, justify HBase’s suitability for high write rates, and outline how sharding and intersection keep query latency low. This shows clear problem framing, a solid engineering plan, and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
