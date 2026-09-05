---
qid: vq_0a0c8e5415__star__local
question: what is option in scala? why do we use it?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 290
total_tokens: 528
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:47:10-05:00'
sources: []
---

**Situation** – At my previous company we built a nightly ETL pipeline that ingested raw logs into a Hive data lake. One day the source system started sending malformed events where the optional `user_id` field was missing, causing our Spark jobs to crash with null pointer exceptions during aggregation.

**Task** – I had to refactor the ingestion logic so that it could gracefully handle absent values, keep downstream jobs robust, and still capture how many records were incomplete for monitoring.

**Action** – I replaced raw JSON parsing with a case class using `Option[String]` for `user_id`. In the mapper I used pattern matching (`case Some(id) => …; case None => logMissing += 1`) to separate valid from missing IDs. The reducer aggregated counts of `Some` values while incrementing a counter for `None`. Finally, I exposed the missing‑count metric via Prometheus so ops could act if it spiked.

**Result** – The pipeline stopped throwing runtime errors; we saw a 99.9% success rate on nightly runs and a clear KPI that tracked data quality. I learned that `Option` is not just a safety wrapper—it’s a powerful contract for nullable fields, enabling explicit handling of absence and better observability in distributed jobs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
