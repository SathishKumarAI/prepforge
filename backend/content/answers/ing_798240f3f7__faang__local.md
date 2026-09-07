---
qid: ing_798240f3f7__faang__local
question: 'Explain: Cleanup Service — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 482
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:26:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a design of *Cleanup Service* that will periodically prune expired or unused URLs from a URL‑shortening system (e.g., TinyURL). Key assumptions:  
1. We have a large, write‑heavy table of shortened links with fields `id`, `original_url`, `created_at`, `expires_at` and usage stats (`clicks`).  
2. Deletions must not affect read latency or consistency for active URLs.  
3. The system is distributed (multiple shards/regions).  

**Approach**  
1. **Identify stale records** – a background job scans for rows where `expires_at < now()` or `clicks == 0 && created_at + TTL`.  
2. **Batch deletion** – delete in small batches per shard to avoid lock contention.  
3. **Compaction / archiving** – optionally move expired URLs to an archival store (Cold storage) before hard delete for audit.  
4. **Indexing** – maintain a secondary index on `expires_at` to accelerate scans.  

**Depth**  
- Use *time‑based partitioning* (e.g., daily tables or time‑bucketed partitions). The cleanup job only needs to touch the relevant partition, reducing I/O.  
- Complexity: Scan O(n) per partition; delete O(batches) with constant cost per batch.  
- Trade‑off: Immediate deletion vs. eventual consistency – we can mark rows as `deleted` first (soft delete), then physically purge after a grace period to support rollback or analytics.  

**Edge Cases**  
- Clock skew across shards → use NTP or logical clocks.  
- Concurrent writes during cleanup → use optimistic concurrency or versioning to avoid deleting newly created URLs.  
- Extremely large partitions → split into sub‑buckets.  

**Optimize & Communicate**  
Explain that by partitioning and batching, we keep the system responsive. We can monitor queue depth of pending deletions; if it grows, add more workers or increase batch size. Provide a diagram in the interview to show data flow: “Scanner → Batch Deleter → Archiver”. End with metrics: *deletion latency*, *queue length*, and *storage savings*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
