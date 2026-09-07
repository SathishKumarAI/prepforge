---
qid: ing_8f3578a73e__faang__local
question: 'Explain: We''re switching embedding models. There are 200M vectors in the
  index. Walk me through the migration.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 578
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:17:40-05:00'
sources: []
---

**Clarify**  
We have a vector store of ~200 M embeddings (≈ 8 GB if 128‑dim float32). The goal: replace the current model with a new one that outputs higher‑dim vectors (e.g., 384‑dim) while keeping query latency ≤ 20 ms. Assumptions:  
1. Index is partitioned across shards; read/write traffic is ~10k QPS.  
2. We can afford a two‑phase migration with minimal downtime.  

**Approach**  
1. **Prototype & Benchmark** – generate a sample set of 1M documents, embed them with the new model, and run latency/accuracy tests on a replica shard.  
2. **Dual‑indexing** – spin up a parallel index (same partitioning) that stores new embeddings. Write both old and new vectors for each document during a short “sync window”.  
3. **Feature flag routing** – route 10 % of queries to the new index; monitor latency, hit‑rate, and relevance metrics. Gradually increase traffic as confidence grows.  
4. **Data consistency** – implement an idempotent write pipeline that guarantees each document gets both embeddings once. Use a version field or timestamp to avoid duplicates.  
5. **Cutover & Decommission** – when 100 % traffic is routed, retire the old shards. Perform a full re‑index of any stale docs (e.g., new content added after cutover).  

**Depth**  
- Storage: 200 M × 384 × 4 bytes ≈ 307 GB; need to provision extra SSD capacity (~350 GB) and adjust shard count accordingly.  
- Compute: embedding inference cost is ~0.5 ms per doc on GPU; with 10k QPS, we need 5 GPUs for real‑time indexing.  
- Latency: ANN search (IVF + PQ) scales linearly with vector dim; expect a 1.5× increase in query time unless we adjust product‑quantization parameters.  

**Edge Cases**  
- Documents added during migration may be missed → use a change‑feed to catch late writes.  
- Backward compatibility: older clients still querying old index must be supported until all are switched.  
- Failure of new index shards should trigger automatic fallback to the old ones via routing rules.  

**Optimize & Communicate**  
Explain trade‑offs: higher dimensionality → better semantic recall but more storage and latency. Propose incremental tuning (e.g., fewer IVF lists) if latency budget is tight. Share a migration timeline, rollback plan, and monitoring dashboards with stakeholders to keep confidence high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
