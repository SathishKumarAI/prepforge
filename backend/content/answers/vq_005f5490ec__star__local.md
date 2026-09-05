---
qid: vq_005f5490ec__star__local
question: Difference between Row number and Dense Rank in SQL?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 339
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:44:45-05:00'
sources: []
---

**Situation:** While leading a migration of our analytics pipeline from on‑prem Hive to Snowflake for the marketing attribution team, we discovered that the daily user‑journey reports were showing duplicate session IDs and inconsistent ordering.

**Task:** I needed to rewrite the ranking logic so that each user’s sessions were uniquely identified and correctly ordered by timestamp, without inflating the row count or dropping any data.

**Action:** I compared `ROW_NUMBER()` and `DENSE_RANK()`. `ROW_NUMBER()` assigns a unique sequential number per row regardless of duplicates, which would have given every session a distinct rank even when timestamps matched. Instead, I used `DENSE_RANK()` over the partition `(user_id)` ordered by `session_start`, because it returns the same rank for identical start times while still progressing the rank for subsequent groups. I implemented this in a Snowflake stored procedure, added a window function with `PARTITION BY user_id ORDER BY session_start` and logged the intermediate counts to validate that no sessions were omitted.

**Result:** The new ranking produced 12 % fewer rows in the output table (from 1,200,000 to 1,056,000) while preserving all unique sessions. Report run time dropped from 18 s to 9 s, and we eliminated duplicate session counts in downstream dashboards. I learned that choosing between `ROW_NUMBER()` and `DENSE_RANK()` hinges on whether you need a strictly incremental sequence or group‑aware ranking when handling ties.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
