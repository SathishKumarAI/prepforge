---
qid: vq_4e1e89f2ce__star__local
question: What is the difference between a nested UDF and recursive UDF?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 332
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:36-05:00'
sources: []
---

**Situation** – While refactoring our nightly ETL job on Databricks, I noticed the data quality metrics for customer segmentation were slipping from 95% to 88%. The root cause was an inefficient transformation that repeatedly applied a UDF to flatten nested JSON and then recursively aggregate hierarchy levels.

**Task** – I needed to redesign the UDF logic so it could handle both nested structures and hierarchical recursion without blowing up executor memory or causing stack overflows, all while keeping runtime under 4 minutes for a 1.2 TB dataset.

**Action** – First, I created a **nested UDF** that iterated over each record’s `address` array to pull out street, city, and zip into separate columns. Then I wrote a **recursive UDF** using Spark SQL’s `explode_outer` in a loop: the function called itself until no more child nodes remained, returning a flattened list of all descendants. To avoid deep recursion, I limited depth to 10 and used Spark’s broadcast variable for the lookup table, trading a slight memory hit for predictable stack usage.

**Result** – The new pipeline ran in 3 minutes, boosting data quality back to 96%. I learned that nested UDFs are great for shallow field extraction, while recursive UDFs must be bounded and coupled with Spark’s lazy evaluation to stay performant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
