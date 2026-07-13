---
qid: q078
question: "What is ETL and how does it differ from ELT?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

ETL and ELT both move data from sources into a warehouse; the difference is **where transformation happens**. ETL transforms before loading (clean and shape in a staging engine, then load the finished schema). ELT loads raw data first, then transforms inside the warehouse using its compute. ELT wins with cheap, elastic cloud storage and MPP engines because you keep raw data for reprocessing and push transforms down to the warehouse.

I'd map this to AWS: Glue or a Spark EMR job for classic ETL; or land raw data in S3, load into Redshift, and transform with SQL/dbt for ELT. Lake Formation governs access; Athena queries the raw S3 layer directly.

I'd frame the choice through **Invent and Simplify** and **Frugality**: ELT simplified a pipeline I owned by killing a brittle pre-processing tier. We landed raw clickstream in S3 via Kinesis Firehose, then transformed in Redshift with dbt. Reprocessing a logic bug went from a two-day full re-ingest to a 20-minute re-run against retained raw data, and pipeline incidents dropped 40%.

A bar-raiser listens for whether I reason about the trade-off (cost, reprocessing, governance, schema-on-read vs write) rather than reciting acronyms, and whether I owned a real design decision.
