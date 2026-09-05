---
qid: vq_8f40d9932e__star__local
question: what might be the root cause and fix for this error scenario?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 344
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:09:31-05:00'
sources: []
---

**Situation:**  
In my last role, our nightly Spark batch that loads customer orders into Redshift was throwing a `org.apache.spark.sql.AnalysisException: cannot resolve column` error every morning. The pipeline had been running flawlessly for months, but suddenly the job stopped and downstream dashboards were stale.

**Task:**  
I needed to pinpoint why the schema change broke the job, fix it so that the nightly run resumed, and prevent future silent failures.

**Action:**  
First I pulled the latest schema from our data catalog (AWS Glue) and compared it with the source Parquet files using `spark.read.format("parquet").schema` and a diff script. The culprit was an added nullable column “promo_code” that wasn’t in the target table’s DDL. Because the job used `df.write.mode("append")`, Spark tried to map every field, causing the exception. I updated the Redshift staging table to include the new column, altered the ETL code to use `selectExpr` to cast the nullable field appropriately, and added a unit test that checks for schema drift using Delta Lake’s versioning. Finally, I set up a nightly alert on Glue Catalog changes.

**Result:**  
The nightly job completed in 12 minutes instead of 30, restoring real‑time dashboards within an hour. The alert system now flags any future schema changes before they hit production, reducing downtime risk by 95 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
