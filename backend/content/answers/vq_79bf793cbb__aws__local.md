---
qid: vq_79bf793cbb__aws__local
question: How will you capitalize the first letter of a string?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 413
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:14-05:00'
sources: []
---

**Customer Obsession & Dive Deep**

*Situation:*  
A client’s data‑pipeline in **AWS Glue** ingested raw product titles from an e‑commerce feed. The downstream analytics layer expected each title to start with a capital letter for consistent display, but the current script left them all lower‑case, causing misleading metrics.

*Task:*  
Refactor the transformation step so that every string’s first character is capitalized **without breaking batch performance** and while ensuring idempotence across retries.

*Action:*  
1. In Glue’s PySpark job I replaced the naïve `title.capitalize()` with a UDF:

```python
from pyspark.sql.functions import udf, col
from pyspark.sql.types import StringType

def capitalize_first(s: str) -> str:
    return s[:1].upper() + s[1:] if s else s

cap_udf = udf(capitalize_first, StringType())
df = df.withColumn("title", cap_udf(col("title")))
```

2. Added unit tests in `pytest` to cover empty strings and non‑ASCII characters.  
3. Deployed the job via **AWS CodePipeline**; added a CloudWatch alarm for execution time > 30 s.

*Result:*  
- Processing time dropped from **1.8 min/GB** to **1.2 min/GB** (33 % faster).  
- Capitalization accuracy improved to **100 %** on all test datasets.  
- No downstream data loss or duplicate records after 3 successive pipeline runs.

*Learnings:*  
I realized that a simple string operation can become a bottleneck at scale; using a UDF with careful type handling preserves performance while meeting business rules. This experience reinforced my habit of **owning the end‑to‑end data quality** and continuously measuring impact against real metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
