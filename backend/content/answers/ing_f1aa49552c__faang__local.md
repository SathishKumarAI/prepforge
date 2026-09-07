---
qid: ing_f1aa49552c__faang__local
question: 'Explain: Each index, shard, segment and field has overhead'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 502
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:01:39-05:00'
sources: []
---

**Clarify**  
The interview asks why every *index*, *shard*, *segment* and *field* incurs storage/CPU overhead in a search engine (e.g., Elasticsearch). I’ll assume we’re dealing with inverted‑index based systems that persist data on disk and cache metadata in memory.

**Approach**  
1. Enumerate the components that consume resources.  
2. Explain each component’s purpose and why it can’t be eliminated.  
3. Quantify typical overheads (bytes, CPU).  

**Depth**  
- **Index**: Holds the global mapping (field types, analyzers) plus per‑shard routing tables; ~few KB–MB.  
- **Shard**: Physical unit of storage; contains its own term dictionary, postings lists, and segment metadata. Each shard carries a *routing* table (~bytes per doc), an in‑memory cache for recent queries, and a lock/commit log (~several MB).  
- **Segment**: Immutable snapshot inside a shard created by merging. A segment stores its own term dictionary (unique terms → ordinal), postings lists, norms, and field‑data structures. Even if the segment is empty, it reserves space for headers (~1–2 KB) and alignment padding.  
- **Field**: Each field has per‑document values stored in a columnar format; the field’s codec adds header bytes, null‑bitmap, and compression overhead. For example, a numeric field may need 8 bytes per doc plus 4 bytes for a bitmap flag.

Overall, overhead scales with the number of shards (more routing tables) and segments (more headers), not just raw data size.

**Edge Cases**  
- Very small indices (<10 MB) where metadata dominates.  
- Shards with no documents still occupy disk space due to segment files.  
- Sparse fields causing large null‑bitmap overheads.

**Optimize & Communicate**  
To reduce overhead: use *doc values* for numeric/text fields, enable *shard merging* aggressively, and compress segment headers (e.g., Lucene’s `Bits` compression). I would explain that trade‑offs exist between memory usage, query latency, and storage. Conclude by highlighting how understanding these costs guides cluster sizing and shard allocation in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
