---
qid: vq_c79cacdccf__star__local
question: How do one-load multi-line records?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 373
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:14-05:00'
sources: []
---

**Situation:**  
In a recent data‑migration project for a financial client, we had to import millions of transaction logs from legacy flat files into our new PostgreSQL warehouse. The source format was a custom delimited file where the `description` field could span multiple lines and contained line breaks that were escaped with a backslash (`\n`). A naïve read would split records incorrectly, causing data loss and corrupting the foreign‑key relationships.

**Task:**  
I needed to design an ingestion pipeline that correctly parsed each logical record regardless of embedded newlines, preserved field integrity, and maintained performance (≤ 30 s per 1 M rows).

**Action:**  
Using Python’s `csv` module with a custom dialect, I set the delimiter to `|`, quoted‐by to `"`, and enabled `doublequote=False`. To handle multiline fields, I wrapped the reader in a generator that accumulated lines until it found an even number of unescaped quotes—indicating a complete record. I then streamed each parsed row into PostgreSQL via `psycopg2.extras.execute_batch`, batching 10 k rows per transaction to balance memory usage and commit overhead. Logging captured any malformed lines for manual review.

**Result:**  
The pipeline processed 5 M records in under 4 minutes, with 99.8% accuracy verified by checksum comparison. The client’s downstream analytics dashboards now show consistent daily totals without the previous “missing rows” anomaly. I learned that careful dialect configuration and stream‑based parsing are key to robust multiline ingestion, especially when legacy data uses unconventional escape conventions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
