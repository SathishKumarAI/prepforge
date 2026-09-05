---
qid: vq_67c0c44372__star__local
question: What is SQL* Loader and what is it good for?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 322
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:20-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for migrating a legacy customer database from an on‑premise Oracle instance to our new cloud warehouse. The source file set was a collection of flat CSVs totaling ~1.2 TB, and we had a strict 48‑hour window before the next business cycle kicked off.

**Task**  
I needed to ingest those files into the target schema with minimal downtime, preserve data integrity, and keep load times under 30 minutes per file to meet our SLA.

**Action**  
I set up SQL*Loader in “direct path” mode, creating a control file that mapped each CSV column to its Oracle datatype, applied field delimiters, and defined a pre‑load trigger to hash‑check duplicate rows. I leveraged the `PARALLEL` option with 8 threads, and used `BADFILE`/`DISCARDFILE` logging to capture anomalies without interrupting the load. To reduce I/O contention, I scheduled loads during off‑peak hours and tuned the `INCREMENTAL=Y` flag so only changed rows were refreshed.

**Result**  
The migration completed in 1 hour and 45 minutes, well below our target. Data accuracy was 99.999% as verified by post‑load checksum scripts. The experience taught me how SQL*Loader’s direct path mode can dramatically accelerate bulk loads while still providing robust error handling for production migrations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
