---
qid: vq_5aafbbd970__star__local
question: is the renaming the output file possible?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 338
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:00:17-05:00'
sources: []
---

**Situation**  
In a recent batch‑processing pipeline for our e‑commerce analytics, we were generating nightly fact tables into HDFS using Spark. The job produced files named `fact_sales_2023-11-01.parquet`, but downstream BI tools expected the file to be called simply `sales_daily.parquet`. Every day I had to manually rename them in a separate step.

**Task**  
I needed to automate the renaming so that the output filename matched the production convention without breaking our Spark job or adding extra steps in Airflow.

**Action**  
First, I refactored the Spark write call to include the exact target path: `spark.write.parquet("hdfs://cluster/user/analytics/sales_daily.parquet")`. To avoid overwriting existing data, I used the `mode('overwrite')` option and added a small pre‑write check that removed any stale file at that path. Then I updated the Airflow DAG to remove the legacy “rename” task and instead passed the final destination as an XCom variable to downstream tasks. Finally, I wrote a unit test with `pyarrow.fs.LocalFileSystem` to confirm the file was created with the correct name.

**Result**  
The pipeline now writes the file directly with the expected name, cutting the nightly maintenance time by 90 % and eliminating manual errors. The new approach also reduced our HDFS storage fragmentation by avoiding duplicate intermediate files. I learned that a small change in the write path can simplify orchestration and improve reliability across the data stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
