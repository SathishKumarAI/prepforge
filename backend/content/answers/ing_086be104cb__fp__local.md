---
qid: ing_086be104cb__fp__local
question: 'Explain: Backing indices — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 437
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:23:42-05:00'
sources: []
---

**Backing indices in an Elastic data stream**

A *data stream* is a logical collection of time‑ordered documents that the user never writes to directly.  
Behind the scenes, each document ends up in a **backing index**—a normal Lucene index that actually holds the data.

Why must this indirection exist?

1. **Immutable storage & roll‑over** – A backing index is immutable once it’s sealed; all writes go to the current “write” index.  
   This guarantees *exactly‑once* semantics, simplifies snapshotting, and allows efficient compaction (merging) without worrying about concurrent updates.

2. **Time‑based lifecycle policies** – The stream’s policy can automatically delete or shrink older indices while keeping recent ones hot.  
   Because each backing index has a clear creation timestamp, the policy can target specific shards without scanning every document.

3. **Index‑level settings per “segment” of time** – Compression ratios, merge thresholds, and shard allocation can differ for fresh versus aged data.  
   A single logical stream can therefore use different Lucene configurations over its lifetime while presenting a unified API to the user.

4. **Query simplicity** – The client never needs to know which backing index holds a given document; the data‑stream alias resolves the correct indices at query time, preserving backward compatibility with legacy index APIs.

---

### Non‑obvious insight

The *true* cost of a data stream is not in the number of indices but in their **sequential roll‑over windows**.  
If you set a roll‑over policy that creates a new backing index every minute, you’ll end up with thousands of tiny indices, each incurring its own overhead (metadata, filesystem entries).  
A principled approach: choose a roll‑over interval that balances *write amplification* against *query performance*, typically aligning it with the natural granularity of your data’s usage pattern. This subtle trade‑off is often overlooked when configuring streams for high‑volume ingestion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
