---
qid: ing_c47d834844__fp__local
question: 'Explain: Inserted Directly — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 416
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:44-05:00'
sources: []
---

**What problem does “Inserted‑Directly” solve?**  
When a cache is *write‑through*, every put must be persisted to the backing store (e.g., database). In many workloads the *read* traffic dwarfs the *write* traffic, and the backing store is costly or slow. The Inserted‑Directly strategy lets you **write immediately to the cache only**, deferring persistence until a later phase (e.g., batch flush). This decouples read speed from write latency.

**Why it must work that way**  
The cache’s *state machine* has two modes: **dirty** and **clean**. A dirty entry is present in memory but not yet committed to the backing store. If you allow a direct insert, you risk losing data on failure. Therefore Guava marks such entries as dirty and tracks them separately. When the flush routine runs, it iterates only over dirty entries, writes them out atomically, and clears their dirty flag. This guarantees *eventual consistency* without sacrificing read performance.

**Connection to deeper principles**  
This is an instance of **optimistic concurrency control**: you optimistically assume the cache will survive long enough to flush. It also embodies a **two‑phase commit** on a per‑entry basis, keeping the overhead minimal while preserving atomicity across batches. The design trades *consistency* for *throughput*, which is acceptable when eventual persistence suffices (e.g., analytics).

**Non‑obvious insight**  
Most people overlook that **the cache itself can act as a transaction log**. By treating dirty entries as a lightweight write‑ahead log, you avoid writing to disk on every put and still recover from crashes by replaying the dirty list. This dual role of cache/log is a subtle but powerful optimization in Guava’s implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
