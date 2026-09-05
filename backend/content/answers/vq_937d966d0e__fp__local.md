---
qid: vq_937d966d0e__fp__local
question: What is Row Chaining, Row Migration?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 350
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:46:41-05:00'
sources: []
---

**Row chaining and row migration** arise when a database table’s rows are stored in *pages* (fixed‑size blocks).  
When an update enlarges a row beyond the page it originally occupied, two choices exist:

1. **Row chaining** – keep the original row on its page; append a *chain pointer* to a new page that holds the expanded data. The chain may extend over several pages if the row grows further.

2. **Row migration** – move the entire row (and any chained fragments) to a single, contiguous space elsewhere in the table, then replace the original with a forwarding pointer.

The *fundamental problem* is preserving ACID guarantees while minimizing I/O. Chaining is cheap: it requires only one extra pointer write and avoids large data moves; but it creates long chains that degrade read performance because every access must follow pointers, increasing page fetches and cache misses. Migration, on the other hand, restores locality at the cost of more expensive writes (copying the whole row) and potential fragmentation.

The deeper principle is **temporal locality vs. spatial locality** in storage: chaining favors temporal locality (few writes), migration favors spatial locality (fewer reads). A non‑obvious insight is that *migration can be deferred lazily*—the database may leave a chained row until a future compaction or checkpoint, thus amortizing the cost over many transactions without violating consistency. This lazy compaction technique is what modern column‑store engines use to keep write paths fast while still achieving efficient reads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
