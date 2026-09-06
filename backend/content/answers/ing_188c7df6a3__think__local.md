---
qid: ing_188c7df6a3__think__local
question: 'Explain: Delete indices, not documents — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 486
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:20:42-05:00'
sources: []
---

**1️⃣ Clarify the question & state assumptions**  
- The user asks about *“Delete indices, not documents – Size your shards”* in an Elasticsearch context.  
- Assume they’re using the “elastic docs” guide and want to understand why you should delete entire indices instead of just individual documents when resizing shards.  
- Confirm that the goal is to explain the trade‑offs (performance, storage, cluster health) rather than give code.

**2️⃣ Adopt a mental model: Elasticsearch data lifecycle**  
- *Indices* = logical containers with their own mapping and settings.  
- *Documents* = individual records inside an index.  
- *Shards* are physical units that hold portions of an index.  
- Deleting an index removes all its shards in one atomic operation; deleting a document only marks it as deleted, leaving the underlying storage untouched until compaction.

**3️⃣ Step‑by‑step reasoning**  
1. **Shard size matters** – large shards can slow searches and cause memory pressure.  
2. **Resizing requires shard reallocation** – you must create a new index with desired shard count.  
3. **Deleting the old index** drops all its shards at once, freeing space immediately.  
4. **Deleting documents individually** keeps the same shard layout; deleted docs remain on disk until a force merge/refresh, so the cluster still sees large shards and suffers the same performance hits.  
5. Therefore, to truly “size” shards you delete the entire index (old layout) and re‑index into a new one with the correct number of shards.

**4️⃣ Common traps to avoid**  
- Thinking that deleting documents automatically shrinks shard size.  
- Forgetting that orphaned deleted docs still occupy disk until compaction.  
- Assuming you can change shard count on an existing index; it’s immutable.

**5️⃣ Sanity‑check & verbalize**  
- Re‑explain the difference between *document* and *index* deletion in one sentence: “Deleting a document only marks it as deleted; deleting an index removes all its shards at once.”  
- Confirm that this matches Elasticsearch documentation on shard resizing.  

By following these steps, you can confidently explain why you should delete indices rather than documents when you need to resize shards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
