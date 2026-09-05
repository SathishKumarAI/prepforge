---
qid: ing_abe8620561__star__local
question: 'Explain: bytea with copy — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 387
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:16:16-05:00'
sources: []
---

**Situation** – In a micro‑services refactor, I had to migrate a legacy user profile service that stored encrypted avatar images as `bytea` blobs in PostgreSQL. The dataset was ~3 TB and the existing bulk export used a custom binary format, which broke when we upgraded to PostgreSQL 15.

**Task** – I needed to rewrite the import pipeline so it could ingest large `bytea` payloads efficiently using `COPY FROM STDIN`, while keeping the Go codebase clean and type‑safe. The goal was to cut import time by at least 50 % compared to the old line‑by‑line `INSERT`.

**Action** – I used the lib/pq driver’s `CopyIn` helper, defining a statement like  
```go
stmt, err := db.Prepare(pq.CopyIn("users", "id", "avatar"))
```
Then I streamed the binary data from a gzipped source file, converting each avatar to a PostgreSQL‑compatible byte array (`[]byte`). Inside a single transaction I looped over rows, calling `stmt.Exec(id, avatar)`. To avoid memory spikes I buffered 10 000 rows before flushing with `stmt.Close()`, which internally issues the COPY command. I also added a progress logger that tracked bytes processed and estimated remaining time.

**Result** – The new pipeline cut import time from 12 hours to just 4 hours, a 66 % improvement, while keeping memory usage below 200 MB. I learned how `COPY` with binary mode leverages PostgreSQL’s wire protocol for massive throughput, and that lib/pq’s `CopyIn` abstracts the low‑level details so Go code stays readable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
