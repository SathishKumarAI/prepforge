---
qid: ing_4304c6299e__star__local
question: 'Explain: Cursor — Opencoderguide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 309
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:42:48-05:00'
sources: []
---

**Situation:** In a recent data‑migration project for a fintech client, we had to move millions of transaction records from an old Oracle schema to a new PostgreSQL warehouse while keeping the API latency under 150 ms.

**Task:** I was responsible for designing the streaming layer that would read rows in batches, transform them on the fly, and load them into Postgres without overwhelming memory or hitting rate limits.

**Action:** I implemented a database cursor in Python using `psycopg2`. The cursor fetched 10,000 rows at a time from Oracle via `fetchmany()`, then applied a schema‑mapping function. To avoid high memory usage, each batch was immediately streamed to Postgres with a COPY command wrapped in a transaction. I also added retry logic and back‑pressure: if the downstream service reported a 429, the cursor paused for 2 seconds before resuming. Logging tracked throughput per minute so we could spot bottlenecks.

**Result:** The migration completed in 4.5 hours instead of the planned 8, reducing downtime by 70%. Throughput averaged 3,200 rows/second, and memory consumption stayed below 500 MB. I learned that cursors are essential for streaming large datasets, but careful batch sizing and back‑pressure control make the difference between a smooth run and a resource catastrophe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
