---
qid: vq_65dc2d09ba__faang__local
question: How to enforce schema on a data frame?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 471
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:55-05:00'
sources: []
---

**1️⃣ Clarify**  
You want to guarantee that every row in a Spark/Polars/Pandas dataframe matches a predefined structure (column names, types, constraints).  
*Assumptions:* We’re working with an immutable DataFrame API (e.g., PySpark) and the schema is known ahead of time.  

**2️⃣ Approach**  
1. Define a `StructType`/`Schema` object.  
2. When reading data, pass this schema to the reader (`spark.read.schema(schema)` or `pd.read_csv(..., dtype=…)`).  
3. After ingestion, cast all columns to the target types (`df = df.cast(schema)`).  
4. Validate constraints (non‑null, regex, range) with a separate check step.

**3️⃣ Depth**  
```python
from pyspark.sql.types import StructType, StructField, StringType, IntegerType

schema = StructType([
    StructField("id", IntegerType(), nullable=False),
    StructField("name", StringType(), nullable=False),
    StructField("age", IntegerType(), nullable=True)
])

df_raw = spark.read.option("header","true").csv(path)
df_validated = df_raw.select([col(c).cast(t) for c,t in zip(df_raw.columns, schema.fieldNames())])
# optional constraint check
violations = df_validated.filter(col("age") < 0)
```
*Complexity:* O(n) scan; casting is cheap.  
*Trade‑offs:* Strict typing may reject benign data; flexible schemas need a fallback.

**4️⃣ Edge Cases**  
- Missing columns → `withColumn` to add defaults.  
- Extra columns → drop or rename via `select`.  
- Wrong types → use `try/catch` during cast or `isnan`.  
- Nulls in non‑nullable fields → trigger error log.

**5️⃣ Optimize & Communicate**  
Explain that schema enforcement happens at read time, reducing downstream errors. Mention that for streaming sources you can attach a schema registry (e.g., Confluent) and use Kafka’s Avro serializer. Wrap up by highlighting how this guarantees data quality and simplifies ETL pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
