---
qid: ing_fed40f1e4b__faang__local
question: 'Explain: Combine smaller indices — Size your shards | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 550
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:37-05:00'
sources: []
---

**Clarify**  
We’re asked how to “combine smaller indices – size your shards” in an Elasticsearch‑style system (often called *shard sizing* or *index merging*).  
Key assumptions:  

- Data arrives incrementally; we maintain many small indices (e.g., per day/hour).  
- Each index is sharded into N partitions.  
- We want to reduce query latency and storage overhead by merging indices while keeping shard sizes within an optimal range (≈ 30–50 GB in production).

**Approach**  

1. **Determine target shard size** – consult cluster capacity & performance metrics.  
2. **Build a merge schedule** – group contiguous smaller indices whose total size < target and that share the same mapping.  
3. **Use `_reindex` or `read-only + delete+create`** – copy documents into new larger index with fewer shards, preserving aliases.  
4. **Update routing & aliases atomically** – point traffic to the merged index; decommission old indices after a graceful window.  
5. **Rebalance cluster** – let ES redistribute shards for even load.

**Depth**  

- **Complexity**: Reindexing is O(total_docs). Disk I/O dominates; network bandwidth matters if remote clusters are involved.  
- **Shard count formula**: `shard_count = ceil(total_bytes / target_shard_size)`.  
- **Trade‑offs**: Fewer shards → lower coordination overhead but higher risk of hot spots; more shards → better parallelism but increased GC and metadata.  
- **Automation**: Use Curator or ILM policies to trigger merges when index age > X days.

**Edge Cases**  

- Merging indices with differing mappings → requires schema reconciliation or separate pipelines.  
- Live traffic during reindexing can cause latency spikes; mitigate by throttling the operation.  
- Disk space shortage if intermediate copies double storage temporarily; ensure enough free disk before starting.

**Optimize & Communicate**  

- **Performance tuning**: Adjust `reindex.concurrent_requests` and `bulk.flush.max_size`.  
- **Monitoring**: Track `_cat/shards`, GC pause times, and query latency pre/post merge.  
- **Narration**: Explain that we’re balancing *cost* (IO, memory) against *benefit* (query speed). Emphasize the iterative nature—monitor, adjust target size, repeat.  

This structured plan aligns with FAANG expectations: clear problem framing, logical steps, technical depth, edge‑case awareness, and a focus on measurable improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
