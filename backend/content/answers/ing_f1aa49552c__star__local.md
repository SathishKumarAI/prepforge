---
qid: ing_f1aa49552c__star__local
question: 'Explain: Each index, shard, segment and field has overhead'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 356
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:31:38-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with migrating a legacy product catalog into an Elastic‑search cluster to support real‑time recommendation queries. The dataset had grown to 4 million documents, and the initial query latency hit 350 ms, exceeding our SLA of 200 ms.

**Task**  
I needed to reduce the index footprint and cut query time while keeping daily indexing throughput above 10k docs/sec.

**Action**  
First I profiled segment statistics: each shard was 5 GB with ~120 segments, each segment adding a 1‑byte per document overhead for doc IDs. I reconfigured mapping to use `keyword` instead of `text` where no full‑text search was required, cutting field data size by 30 %. I then reduced the number of shards from 12 to 6 and enabled force merge after bulk loads to collapse segments into a single one per shard—eliminating ~200 MB of segment overhead. Finally, I disabled `store` for fields that were only needed for aggregations, removing an additional 2 bytes per document.

**Result**  
The index size dropped from 5.8 GB to 3.4 GB per node, and average query latency fell to 140 ms. Bulk ingestion stayed above 12k docs/sec. I learned that small per‑document overheads (IDs, field data) scale linearly with millions of docs, so careful mapping and segment management can deliver big performance gains without sacrificing functionality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
