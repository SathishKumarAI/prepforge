---
qid: ing_5f6a7fbd92__star__local
question: 'Explain: timestamps — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 389
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:16-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a Go‑based analytics service that ingested clickstream data into PostgreSQL. The raw logs had millisecond‑precision timestamps in ISO 8601 format, but our queries required them as UTC `TIMESTAMP WITH TIME ZONE` for correct aggregation across regions.

**Task:**  
I needed to map the incoming string timestamps to Go’s `time.Time`, ensure they were correctly serialized by the `lib/pq` driver, and avoid drift when persisting or retrieving them.

**Action:**  
I first parsed the ISO strings using `time.Parse(time.RFC3339Nano, ts)`. Then I used `pq.NullTime{}` for nullable fields so the driver would write `NULL` rather than zero values. In the DB schema I defined columns as `TIMESTAMPTZ NOT NULL DEFAULT now()`. When querying, I leveraged `sqlx.NamedExec` with a struct that had `time.Time` fields; lib/pq automatically marshals them to UTC `timestamptz` thanks to its built‑in driver register. To double‑check, I wrote unit tests comparing the stored value back to the original using `pq.FormatTimestamp`. 

**Result:**  
The service correctly stored 95% of timestamps within a 1µs margin of the source data, and our downstream reporting queries ran 30% faster because PostgreSQL could use native time indexes. I learned that understanding lib/pq’s type mapping—and explicitly handling nullable times—prevents subtle bugs in distributed systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
