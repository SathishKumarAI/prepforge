---
qid: ing_3fe2ae5258__star__local
question: 'Explain: Bulk imports with COPY [..] FROM STDIN — GitHub - lib/pq: Go PostgreSQL
  driver for database/sql \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 381
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:02-05:00'
sources: []
---

**Situation:**  
When building the analytics layer for our SaaS product, we had to ingest millions of user activity logs daily into PostgreSQL. The initial approach—executing one `INSERT` per row via `database/sql`—slowed down the pipeline and hit our SLA of 4 hours processing time.

**Task:**  
I needed to design a bulk import routine that could load ~3 M rows per day within 1.5 hours while keeping memory usage under 2 GB, using only open‑source Go libraries.

**Action:**  
I switched to PostgreSQL’s `COPY FROM STDIN` protocol via the `github.com/lib/pq` driver. In Go I opened a `pgx.Conn`, called `CopyFrom` with a custom `io.Reader` that streamed CSV data directly from our log files, buffering 64 KB chunks. I wrapped each file read in a goroutine and used a bounded channel to limit concurrency to 4 streams, preventing the process from exhausting CPU cores. To handle errors, I parsed the COPY error response and logged offending rows to an S3 “dead‑letter” bucket for later review. I also added a `COPY` pre‑statement that created a temporary staging table with appropriate indexes off, then swapped it into production using a single `ALTER TABLE ... RENAME TO`.

**Result:**  
The new pipeline processed 3 M rows in ~1 hour and 15 minutes, cutting the ingestion window by 70%. Memory peaked at 1.8 GB, meeting our constraints. I learned how to balance Go’s concurrency primitives with PostgreSQL’s streaming API to achieve high throughput without over‑loading either side of the stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
