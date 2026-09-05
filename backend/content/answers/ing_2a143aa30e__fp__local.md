---
qid: ing_2a143aa30e__fp__local
question: 'Explain: Historical Index data backfill — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 427
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:20-05:00'
sources: []
---

**Why index back‑filling matters**

When a time‑series platform ingests billions of rows per day, the *index*—a compact map from key (e.g., vehicle ID) to sorted timestamps—is the only structure that lets queries run in sub‑linear time. If an old window of data arrives late (back‑fill), the index must be updated **without** rewriting the entire dataset or blocking concurrent reads. This is a classic *online incremental optimization* problem: we want a *differential update* that preserves consistency and latency.

**LedgerStore’s solution**

1. **Append‑only ledgers**  
   Each key owns an immutable ledger file. Appending new index entries is O(1). Reads scan forward until the desired timestamp, then seek to the exact block—O(log n) via a lightweight in‑memory skip list per ledger.

2. **Segmented compaction**  
   Back‑filled entries are first written to a *hot* segment. Periodic compaction merges hot and cold segments into a single sorted file. This guarantees that every read touches at most two files, keeping I/O bounded even when trillions of indexes exist.

3. **Write‑ahead logs + MVCC**  
   A tiny write‑ahead log records the exact sequence of back‑fill operations. Multi‑version concurrency control lets readers see a consistent snapshot while writers keep appending. Thus reads never block on compaction, and the system can sustain >10 k writes/sec per node.

**Non‑obvious insight**

Because each ledger is *independent*, the cost of back‑filling scales with the number of affected keys, not the total index size. In practice, a single vehicle’s history may grow to 100 M entries, but that still requires only one append operation and a local compaction—allowing Uber to support trillions of indexes across millions of devices without ever shuffling terabytes of data between nodes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
