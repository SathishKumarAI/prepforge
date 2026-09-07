---
qid: vq_5d685585c7__aws__local
question: How to compile and run a Scala program?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 585
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:17-05:00'
sources: []
---

**Situation & Task**  
I was tasked with building a nightly ETL pipeline that ingests ~10 GB of raw logs per day, transforms them into a Parquet format, and loads the results into an Athena‑queryable catalog for downstream analytics. The team needed a reproducible way to compile and run the Scala code on-demand and on schedule.

**Action – Technical Design**  
1. **Build & Compile** – Use *sbt* with the `assembly` plugin to produce a fat JAR.  
   - `build.sbt`: set `scalaVersion := "2.12.15"`, add dependencies (`spark-sql`, `aws-java-sdk-s3`).  
   - Run `sbt assembly`; artifacts are stored in an S3 bucket (`data-pipeline/artifacts/`).

2. **Execution** – Deploy the JAR to AWS Glue (Spark‑based).  
   - Create a Glue job that pulls the latest artifact from S3, sets the Spark version to 3.1, and passes runtime parameters via `--arguments`.  
   - Use *Glue Data Catalog* as the schema registry; Athena automatically exposes the Parquet tables.

3. **Scheduling & Monitoring** – Trigger the Glue job with an EventBridge rule (cron).  
   - Enable CloudWatch Logs for debugging and X-Ray for end‑to‑end tracing.

4. **Cost & Scalability** –  
   - *Glue* offers pay‑per‑second billing; we provisioned a 10 DPU cluster, which processed the dataset in ~15 min (≈$0.75 per run).  
   - The job scales horizontally via Glue’s dynamic allocation.

5. **Fail‑over & Retry** – Configure EventBridge to retry on failure up to 3 times with exponential backoff; store logs in S3 for post‑mortem analysis.

**Result**  
- Achieved a 30 % reduction in ETL runtime compared to the legacy MapReduce job (from 45 min to 15 min).  
- Cut costs by 40 % ($1,200/year savings) through Glue’s serverless model.  
- Customer analytics teams now query fresh data within 10 minutes of ingestion.

**Leadership Principles Highlighted**  
- **Ownership** – Took end‑to‑end responsibility for build, deployment, and monitoring.  
- **Dive Deep** – Analyzed Spark logs to identify bottlenecks; tuned partitioning strategy to halve shuffle size.  

*Bar‑raiser takeaways*: clear ownership narrative, quantified performance gains, depth in Spark/Glue optimization, and a concrete failure‑handling plan.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
