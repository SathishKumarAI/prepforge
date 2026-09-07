---
qid: ing_4fc8b7971b__faang__local
question: 'Explain: RDB (Redis Database) — How Does Redis Persist Data?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 626
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:49:47-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how Redis keeps data on disk so it can survive a crash or reboot. Assume we’re working with the default persistence options (RDB and AOF) and that the user wants an overview of mechanisms, trade‑offs, and typical use‑cases.

---

**2️⃣ Approach**  
- Briefly list the two primary persistence modes.  
- Explain when each is used, how data is written, and what guarantees they provide.  
- Highlight configuration knobs and common pitfalls.

---

**3️⃣ Depth**  

| Persistence | How it works | Consistency | Performance |
|-------------|--------------|-------------|-------------|
| **RDB (snapshotting)** | Periodically forks the process; child writes a compact snapshot of the entire DB to disk (`dump.rdb`). | Eventual: last successful snapshot. | Low overhead during snapshot, but pause in writes for the fork and write. |
| **AOF (Append‑Only File)** | Every mutating command is logged as an append operation (`appendonly.aof`). Redis can rewrite this file to compact it. | Configurable: `always`, `everysec` or `no`. With `everysec` you get ~1 s durability. | Higher I/O, but no pause; allows fine‑grained recovery. |
| **Hybrid (default)** | RDB for fast boot, AOF for crash safety. On startup Redis loads the latest AOF over the snapshot. |

**Key points:**  
- Forking creates a copy‑on‑write child that writes without blocking the master.  
- AOF rewrite is incremental and safe because it uses a background thread.  
- `maxmemory-policy` can trigger eviction before persistence if memory is tight.

---

**4️⃣ Edge Cases**  

- **Large DBs** → RDB snapshot may take minutes; consider `save` interval tuning or `--no-writes`.  
- **High write‑throughput** → AOF can become a bottleneck; use `appendfsync everysec` or `no` and rely on RDB.  
- **Power loss during AOF rewrite** → Redis writes to a temporary file then atomically renames, so data is never corrupted.

---

**5️⃣ Optimize & Communicate**  

Explain that choosing between RDB and AOF depends on durability vs. latency trade‑offs. In practice, many deployments enable both: use RDB for fast start‑up, AOF (`everysec`) for safety. If you need sub‑second recovery, switch to `always` or implement a custom WAL. Conclude by noting that monitoring `redis-cli info persistence` helps spot failed rewrites or stale snapshots.

> **Takeaway:** Redis persists via *snapshotting* (RDB) and/or *append‑only logging* (AOF), each with distinct consistency guarantees, and the default hybrid mode offers a balanced compromise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
