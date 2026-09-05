---
qid: vq_533af52a08__star__local
question: What is the difference between call-by-value and call-by-name function parameters?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 280
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:59:13-05:00'
sources: []
---

**Situation** – While refactoring our nightly ETL pipeline that ingested millions of log records from Kafka into BigQuery, we noticed the transformation stage was taking twice as long as expected. The culprit turned out to be a custom UDF that evaluated an expensive regular expression on every record.

**Task** – I needed to reduce runtime by avoiding unnecessary regex evaluations for records that already matched a simple prefix check, without changing the business logic.

**Action** – Instead of passing the entire log string (call‑by‑value) into the UDF, I switched to a call‑by‑name style by wrapping the input in a lazy Scala `=> String`. Inside the UDF I first checked the cheap prefix; only if it passed did I force evaluation of the regex. This effectively turned the expensive operation into an optional branch that ran only when needed.

**Result** – Pipeline latency dropped from 12 minutes to 7 minutes on average, a 42% improvement. I also learned how laziness can be leveraged in data engineering to trade off CPU for memory and avoid redundant work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
