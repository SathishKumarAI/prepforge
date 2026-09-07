---
qid: ing_188c7df6a3__faang__local
question: 'Explain: Delete indices, not documents — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 512
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:41:38-05:00'
sources: []
---

**Clarify**

You’re asking how an Elasticsearch index manages document storage when you *delete* specific _indices_ (or segments) versus deleting individual documents, and why that affects shard sizing.

Assumptions:  
1. “Delete indices” means dropping entire index/segment trees via `DELETE /index`.  
2. “Not documents” means we’re not using `DELETE` per‑doc API but instead removing whole segments.  
3. Shard size is measured in bytes of Lucene files, not logical document count.

**Approach**

1. Explain Lucene’s immutable segment architecture.  
2. Contrast dropping an entire index vs. deleting docs → how Lucene rebuilds.  
3. Show shard‑size implications: freed space, fragmentation, and merge behavior.  
4. Summarize best practices for sizing shards after deletions.

**Depth**

- **Segment immutability**: Each write creates a new segment; deletes mark documents as tombstones but keep them in the same file.  
- **Deleting an index** removes all segments instantly—shard size drops by the full on‑disk footprint, no merge needed.  
- **Deleting docs** only adds delete markers; actual space reclamation occurs during periodic *force merge* or *soft deletes* if enabled. Until merged, shard size remains large, potentially causing I/O overhead and higher memory pressure.  
- After a bulk delete, you may want `POST /index/_forcemerge?max_num_segments=1` to reclaim space quickly.  
- Shard sizing: 10–50 GB per primary is common; after mass deletes, recalc based on remaining data plus some buffer.

**Edge Cases**

- Deleting >90% of docs still leaves many tombstones → merge cost spikes.  
- Force merges can lock shards and impact write latency.  
- Soft delete feature keeps old versions for a retention period—shard size grows until TTL expires.

**Optimize & Communicate**

Explain trade‑offs: immediate space release vs. temporary performance hit when forcing merges. Suggest monitoring `indices.segments.count` and `store.size_in_bytes`. Conclude that deleting entire indices is efficient for large purges, while per‑doc deletes require periodic maintenance to keep shard size optimal. This narrative demonstrates structured reasoning, depth, and practical trade‑off awareness—key signals in FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
