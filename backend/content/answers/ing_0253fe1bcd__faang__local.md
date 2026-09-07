---
qid: ing_0253fe1bcd__faang__local
question: 'Explain: Ongoing replication jobs — Log-based Incremental Replication |
  Stitch Documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 617
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:49:28-05:00'
sources: []
---

**Clarify**  
We need to explain how *log‑based incremental replication* works in Stitch’s ongoing replication jobs, and why it’s preferable over full table refreshes. Confirm that the audience knows Stitch is a data‑integration platform and that “ongoing” means continuous sync after the initial load.

---

### Approach
1. **Describe the baseline** – full table copy vs incremental.
2. **Explain log capture** – source database transaction logs (e.g., MySQL binlog, PostgreSQL WAL).
3. **Show how Stitch parses logs** – identifies DML events, maps them to destination rows.
4. **Illustrate data flow** – from log → change‑data capture (CDC) → incremental load queue → target warehouse.
5. **Mention fault tolerance & idempotency** – commit offsets, deduplication.

---

### Depth
- **Log Capture**: Stitch uses native CDC connectors that stream binary logs or WAL entries in real time, capturing `INSERT`, `UPDATE`, and `DELETE` events with primary‑key context.
- **Change Mapping**: Each event is transformed into a row delta. For updates, Stitch emits a “soft delete” followed by an insert (or upsert) to preserve history if needed.
- **Incremental Load**: Deltas are batched (e.g., 1 k rows or every 5 min) and written to the target warehouse via bulk API calls, keeping data fresh with minimal lag.
- **State Management**: A checkpoint table stores last processed log position per source, ensuring exactly‑once delivery even after failures.
- **Performance**: Log parsing is CPU‑light; network traffic stays low because only changed rows travel. Latency can be < 2 min for most workloads.

---

### Edge Cases
| Scenario | Potential Issue | Mitigation |
|----------|-----------------|------------|
| Schema change (new column) | CDC connector may drop events | Stitch auto‑detects schema drift and updates destination schema on the fly. |
| Deleted primary key rows | Hard deletes vs soft deletes | Configurable delete strategy; default is upsert with `NULL` marker. |
| Large bulk inserts | Batching can overflow memory | Adaptive batching based on size thresholds. |
| Log truncation before checkpoint | Data loss | Stitch verifies log retention policies and alerts if offsets become stale. |

---

### Optimize & Communicate
- **Batch sizing**: Dynamically adjust batch size to balance throughput vs memory.
- **Parallel streams**: For multi‑table sources, run CDC in separate threads to avoid bottlenecks.
- **Monitoring**: Expose lag metrics (log offset – checkpoint) and error rates via Stitch’s UI.

In summary, log‑based incremental replication turns every change into a lightweight event stream that Stitch consumes, transforms, and applies efficiently—providing near real‑time freshness while keeping bandwidth and compute costs low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
