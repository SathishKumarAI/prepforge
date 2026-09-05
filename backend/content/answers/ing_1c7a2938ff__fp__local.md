---
qid: ing_1c7a2938ff__fp__local
question: 'Explain: to delete the the item and so — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 391
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:06:44-05:00'
sources: []
---

**Why deletion is “cheap” in DynamoDB**

When you delete an item, the system does not physically remove its bytes from a disk page immediately. Instead it writes a *tombstone* – a small record that says “this key is gone”. The write cost is just another single‑item PutItem operation, so it obeys the same throughput guarantees as any other request.

Why this works:

1. **Append‑only storage**  
   DynamoDB’s underlying storage engine (a distributed log‑structured merge tree) writes all updates sequentially to SSDs or flash. By appending a tombstone we avoid costly in‑place deletes and page fragmentation, preserving write throughput even at petabyte scales.

2. **Compaction & garbage collection**  
   Background compaction scans partitions for obsolete records (old versions or tombstones). Once a tombstone has survived the retention period, the engine rewrites the partition without it, freeing space. This is an *optimization* of storage reclamation that keeps the system lean while keeping individual delete operations fast.

3. **Strong consistency**  
   Because the tombstone is immediately visible to subsequent reads (via the same key), DynamoDB guarantees that a deleted item cannot be read again unless re‑written, satisfying ACID‑like guarantees without locking or expensive scans.

**Non‑obvious insight**

The cost of deletion scales with *metadata*, not data size. Even if an item is 1 MB, deleting it costs roughly the same as deleting a 1 byte item because only a few dozen bytes (the tombstone) are written. This property lets DynamoDB maintain high throughput for workloads that perform many deletes—e.g., cache invalidation or session cleanup—without incurring a proportional storage penalty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
