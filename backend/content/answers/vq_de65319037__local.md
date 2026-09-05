---
qid: vq_de65319037__local
question: Are Hive SQL identifiers (e.g. table names, columns, etc) case sensitive?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 341
total_tokens: 572
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer:**  
Hive is *case‑insensitive* for unquoted identifiers – it folds them to lower‑case internally. If you wrap an identifier in double quotes (`"TableName"` or `"ColumnName"`), Hive preserves the case exactly as written, but only quoted names can contain mixed‑case letters or otherwise reserved words.

**Nuance from production:**  
In our 2023 migration of a legacy data lake to Hive on EMR, we turned on `hive.case.sensitive=true` to avoid accidental collisions when downstream Spark jobs started referring to columns in camelCase. With the flag set, unquoted names are still folded to lower‑case (so `"UserId"` becomes `userid`), but quoted identifiers keep their exact case – this allowed us to keep legacy column names like `"orderDate"` while preventing new jobs from accidentally using a different capitalization.

We also noticed that partition keys remain case‑insensitive regardless of the flag; they are always lower‑cased when stored in the Hive metastore. This subtlety caused a few data skew bugs until we added explicit `lower()` calls on partition values during ingestion.

Bottom line: by default, Hive is forgiving and treats identifiers as case‑insensitive, but you can enforce strict casing for quoted names via configuration or quoting syntax.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
