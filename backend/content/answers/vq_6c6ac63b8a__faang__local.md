---
qid: vq_6c6ac63b8a__faang__local
question: what are temporary tables in hive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 442
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:15:08-05:00'
sources: []
---

**Clarify**  
The interviewer is asking about *temporary tables* in Hive—specifically how they differ from regular tables, when you’d use them, and what lifecycle rules apply.

**Approach**  
1. Define temporary vs. global temp tables.  
2. Explain creation syntax.  
3. Discuss storage, metadata, visibility, and cleanup.  
4. Mention common use‑cases (intermediate results in ETL, session‑specific joins).  

**Depth**  
- **Temporary table (`CREATE TABLE tmp_name …`)**: Exists only for the duration of the Hive session that created it; its metadata is stored in `session_state` and removed automatically when the session ends. Data can be stored either as a managed table or in memory (e.g., using `ROW FORMAT SERDE`).  
- **Global temporary table (`CREATE GLOBAL TEMPORARY TABLE …`)**: Visible to all sessions within the same HiveServer2 instance; metadata lives in a special database (`global_temp`), and data is cleaned up when the HiveServer2 process terminates.  
- Both types use the default warehouse path unless overridden by `STORED AS` or `LOCATION`.  
- They do **not** persist in the Hive metastore across restarts, so they’re ideal for staging intermediate results that don’t need long‑term storage.

**Edge Cases**  
- If a session crashes before cleanup, stale metadata may linger until the HiveServer2 process restarts.  
- Permissions: only the creator can drop a temporary table; global temp tables require higher privileges.  
- Using them in multi‑user workflows can lead to name clashes—use distinct prefixes or UUIDs.

**Optimize & Communicate**  
Highlight that temporary tables reduce I/O by avoiding full table writes, speed up iterative queries, and simplify debugging. When explaining, keep the focus on lifecycle guarantees (session vs. server), visibility scopes, and typical patterns like “create temp, join, drop” to demonstrate practical knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
