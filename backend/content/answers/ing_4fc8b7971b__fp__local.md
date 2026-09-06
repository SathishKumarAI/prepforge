---
qid: ing_4fc8b7971b__fp__local
question: 'Explain: RDB (Redis Database) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 531
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:54:36-05:00'
sources: []
---

## From “What is a database?” to **Redis persistence**

A database’s core job is to *guarantee that data survives crashes*.  
In the in‑memory world of Redis, this means turning transient memory into durable storage without blocking the single‑threaded event loop.

### 1. The fundamental problem
Every write must be recorded somewhere that survives a power loss **before** the next read can be served.  
We need:

* **Low latency** – reads should still hit RAM.
* **High throughput** – writes shouldn’t stall.
* **Durability guarantees** – either *at least once* or *exactly once*.

### 2. Two orthogonal solutions

| Mechanism | How it works | When it takes effect |
|-----------|--------------|----------------------|
| **RDB snapshots** | Periodically fork the process; child writes a compact binary dump of the whole keyspace to disk. | Every *save‑interval* or on `SAVE`. |
| **AOF (Append‑Only File)** | Append every modifying command (`SET`, `DEL`, …) as it arrives. | On each write, optionally flushed to disk according to `appendfsync` policy. |

Both are *write‑ahead*: the data in RAM is first committed to a file before being considered safe.

### 3. Why two, not one?

* **RDB** gives fast snapshots (O(1) flush) but loses recent writes if a crash happens between snapshots.
* **AOF** preserves every command (exactly once) but can grow huge and needs compaction (`BGSAVE`‑like rewrite).

Combining them: use RDB for quick restarts, then replay the AOF to catch up.

### 4. Non‑obvious insight

Redis’s persistence is *optimistic*: it assumes crashes are rare and that a small window of data loss (last few seconds) is acceptable for many workloads.  
This mirrors the **CAP theorem** in practice: Redis sacrifices *strong consistency* for *availability* and *performance*, but offers tunable durability via `appendfsync` policies (`always`, `everysec`, `no`).  

Thus, Redis persistence is a carefully engineered trade‑off between latency, throughput, and durability—derived from the same principles that govern distributed consensus protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
