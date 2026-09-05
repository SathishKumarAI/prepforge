---
qid: ing_32b78dd889__fp__local
question: 'Explain: a regular base table and that is — AWS re:Invent 2018: Amazon
  DynamoDB Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 371
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:52:45-05:00'
sources: []
---

### What is a “regular base table” in DynamoDB?

In DynamoDB’s storage engine the data are stored on SSD‑backed partitions called *shards*.  
Each shard contains one or more **base tables**—the smallest logical unit that can be read or written atomically. A regular base table is simply a contiguous range of key values that lives on a single physical partition and is managed by the same background process (indexing, compaction, etc.).  

Why does DynamoDB need this concept?  
1. **Atomicity & Consistency** – All operations against a base table hit the same storage node, so the ACID‑like guarantees for reads/writes are preserved without cross‑node coordination.  
2. **Scalability by Partitioning** – The key space is split into many base tables; when traffic on a range grows, that base table can be *split* into two new ones and moved to fresh nodes—no shuffling of unrelated data.  
3. **Efficient Indexing** – Secondary indexes are built per base table; the index entries are tightly coupled to the primary key range they belong to, enabling fast range scans and garbage collection.

A non‑obvious insight: *base tables are not just storage buckets—they act as “micro‑clusters” of data that carry their own metadata (compaction schedule, TTL policy). Because each base table knows its own lifecycle, DynamoDB can apply different retention or compression strategies to hot versus cold data without affecting the rest of the cluster.*  

Thus, a regular base table is the fundamental building block that lets DynamoDB offer global scale while keeping operations fast and consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
