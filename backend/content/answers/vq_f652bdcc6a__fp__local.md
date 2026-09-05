---
qid: vq_f652bdcc6a__fp__local
question: What can I do about ORA-600 Space Leaks?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 379
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:03:53-05:00'
sources: []
---

**Why the leak happens**

Oracle’s buffer cache is a fixed‑size pool of pages that holds data blocks read from disk.  
When a session writes to a block it marks that page *dirty* and the buffer manager later flushes it to disk.  
If the session repeatedly updates a large number of blocks without an intervening `COMMIT` or `ROLLBACK`, each dirty page remains in the cache until the transaction ends.  

**The ORA‑600 trigger**

Oracle internally tracks how many pages a single transaction has “owned.”  
When this count exceeds the *max\_db\_cache\_size* (or a per‑session threshold), the buffer manager raises **ORA‑600 space leaks** to prevent the cache from being exhausted by one long‑running, highly write‑intensive session.

**Fixing it**

1. **Commit or rollback more often** – keep transaction size below the threshold.  
2. **Increase `db_cache_size`** – gives Oracle more room for dirty pages.  
3. **Use `ALTER SESSION SET DB_CACHE_SIZE = …`** – temporarily enlarge the cache for a specific session.  
4. **Re‑architect hot tables** – use partitioning or materialized views so updates touch fewer blocks per transaction.

**Non‑obvious insight**

A *dirty* page is not just “unwritten”; it also blocks other sessions from acquiring that block in exclusive mode. Thus, the ORA‑600 error often signals **contention**, not just cache pressure. Reducing the number of dirty pages can improve overall concurrency even if you don’t change `db_cache_size`.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
