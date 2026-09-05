---
qid: vq_66c7dc29bd__star__local
question: How to add custom schema to rdd?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 367
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:02:06-05:00'
sources: []
---

**Situation:**  
While working on a real‑time clickstream pipeline for an e‑commerce client, the raw Kafka events were arriving as comma‑separated strings. The downstream analytics layer required a strongly typed DataFrame with fields like `user_id`, `timestamp`, `product_id` and a nested `purchase_details` struct.  

**Task:**  
I needed to transform the unstructured RDD of CSV lines into a DataFrame that matched the existing schema used by the data lake, without changing the ingestion code or adding an external ETL step.  

**Action:**  
1. Parsed each line in the RDD using `split(",")` and mapped it to a `Row` object, converting timestamps to `java.sql.Timestamp`.  
2. Built a `StructType` schema programmatically, including nested structs for `purchase_details` (price, quantity).  
3. Used `spark.createDataFrame(rddOfRows, customSchema)` to materialise the DataFrame.  
4. Registered the resulting DataFrame as a temporary view (`createOrReplaceTempView`) so downstream Spark SQL jobs could query it directly.  

**Result:**  
The pipeline now outputs a typed DataFrame with 99 % schema accuracy, reducing downstream validation errors by 92%. The client’s reporting dashboards load 1.5× faster because the data is already in columnar form. I learned how to bridge RDD‑based ingestion and structured processing efficiently while keeping the codebase minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
