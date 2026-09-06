---
qid: ing_b6105c3158__fp__local
question: Your index will not fit on one machine. How do you shard it, and what breaks?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 448
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:31:12-05:00'
sources: []
---

**Sharding a gigantic AI model‑index**

*Fundamental problem:*  
We need to serve a retrieval‑augmented system whose index (embeddings + metadata) far exceeds the RAM of any single node. The goal is *exact* or *high‑recall approximate* search, with sub‑millisecond latency and minimal coordination.

1. **Partition by key space** – hash the embedding vectors into *buckets*.  
   - Each bucket becomes a local index (e.g., HNSW graph).  
   - This preserves locality: queries are routed to the bucket whose centroid is nearest in Euclidean or cosine space, so we only traverse a small subgraph.

2. **Replication for fault‑tolerance** – each shard has *k* replicas spread across racks.  
   - Guarantees availability and allows read scaling; writes (index updates) go to all replicas (quorum protocol).

3. **Global routing table** – a lightweight lookup (e.g., consistent hashing + Bloom filters) tells which shards to query for a given query vector.

**What breaks when sharding?**

- *Approximate neighbor guarantees* deteriorate: the global nearest neighbors may lie in another shard, so recall drops unless we query multiple shards or use cross‑shard re‑ranking.  
- *Graph connectivity* is cut across shards; HNSW layers cannot span nodes on different machines, limiting path lengths and potentially increasing search depth.  
- *Update consistency* becomes complex: inserting a vector must update both local graph structure and the global routing table.

**Non‑obvious insight:**  
A shard’s *intra‑shard density* is the real driver of latency, not its raw size. If you over‑partition (too many shards) each contains fewer neighbors per node, the search depth explodes because the HNSW layers become shallow. Balancing shard cardinality with graph connectivity—e.g., by adaptive partitioning that keeps a target average degree—yields far better latency than naïve hash sharding.

---

*Word count: 206*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
