---
qid: vq_2daffcdaaf__star__local
question: Which table should you query to check the status of a function?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 377
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:53:35-05:00'
sources: []
---

**Situation**  
In my last role as a backend engineer at a fintech startup, we had an analytics microservice that exposed real‑time metrics for each data pipeline job. One day the dashboard started reporting “unknown” for several nightly jobs, and our ops team couldn’t determine whether they were running or stuck.

**Task**  
I needed to identify which database table holds the runtime status of these functions so I could build a quick health check endpoint and alert on failures.

**Action**  
I first skimmed the schema in pgAdmin and found two candidate tables: `job_runs` (audit log) and `function_status`. The latter had columns `func_name`, `last_update_ts`, `status_code`, and an index on `func_name`. I queried it with:

```sql
SELECT func_name, status_code, last_update_ts
FROM function_status
WHERE func_name = 'daily_etl';
```

The result showed a status of `2` (running) but the timestamp was 45 minutes old. Cross‑referencing with `job_runs`, I confirmed that the job had been stuck in the “queued” state for too long. I then added a cron job to update `function_status` after each worker finishes.

**Result**  
The health endpoint now returns JSON like `{ "daily_etl": "running", "last_seen": "2024‑09‑03T12:34:00Z" }`. Alerting is triggered when the timestamp exceeds 30 minutes, reducing mean time to recovery from 3 hrs to under 10 min. I learned that a dedicated status table can vastly improve observability compared to relying on audit logs alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
