---
qid: vq_8d5ffcce47__star__local
question: How do control which rollback segment I use ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 388
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:11-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we were migrating our legacy Oracle database to a new version while maintaining real‑time trading feeds. During a nightly batch that processed ~2 M trades, we hit an unexpected rollback segment exhaustion error; the session had to abort mid‑transaction.

**Task:**  
I needed to pinpoint which rollback segments were being consumed by the batch job and configure the system so that only the most efficient segments were used, preventing future rollbacks without impacting the high‑frequency read workload.

**Action:**  
First, I queried `V$ROLLSTAT` and `DBA_ROLLBACK_SETS` to identify the active segments. I discovered that the batch was using the default segment pool (`DEFAULT_RBS`) even though a dedicated “BATCH_RBS” set existed but had not been allocated due to missing initialization parameters. I added an `ALTER SYSTEM SET ROLLBACK_SEGMENT_POOL='BATCH_RBS'` for that session, and rewrote the batch’s PL/SQL block to explicitly open a rollback segment from the new pool (`OPEN_ROLLBACK_SEGMENT('BATCH_RBS')`). I also tuned the segment size (from 1 MB to 4 MB) based on the average transaction size. Finally, I set a warning threshold in `AUDIT_TRAIL` so any future session exceeding the limit would trigger an alert.

**Result:**  
The batch completed successfully without exhausting rollback segments, cutting downtime by 90%. The dedicated pool also reduced memory pressure on the read‑heavy sessions, improving overall throughput by ~12 %. I learned that explicitly managing rollback segment pools and sizes can dramatically improve stability in mixed workload environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
