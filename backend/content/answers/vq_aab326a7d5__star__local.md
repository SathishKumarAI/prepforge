---
qid: vq_aab326a7d5__star__local
question: How to implement parallel copies in ADF using partitioning ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:14:00-05:00'
sources: []
---

**Situation** – In my last role I was tasked with moving a 5 TB nightly log archive from on‑prem SQL Server to an ADLS Gen2 lake for downstream analytics. The existing copy activity ran sequentially and finished in 12 hours, missing our SLA of 6 hours.

**Task** – Reduce the transfer time to under 4 hours while ensuring data integrity and minimal impact on source performance.

**Action** – I re‑architected the pipeline to use a *Copy* activity with *Partitioning*. First, I added a *Lookup* to fetch distinct date ranges (e.g., hourly buckets) from the source. Then, in the copy activity I enabled *“Parallel copy”* and set the *"Maximum number of concurrent copies"* to 12. For each partition I used a *Derived Column* transformation to append the bucket key to the target path, ensuring idempotent writes. I also tuned the *Data Flow* sink to use *Blob storage parallelism* (chunk size 64 MB) and enabled *“Use multiple partitions”* on the source query to push data in chunks. Finally, I added a *Wait* activity to coordinate downstream jobs.

**Result** – The new pipeline completed every run in ~2 hours—an 80% speed‑up—and maintained 99.9% data fidelity. I learned that careful partitioning coupled with concurrency tuning can dramatically cut ETL windows without overloading source systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
