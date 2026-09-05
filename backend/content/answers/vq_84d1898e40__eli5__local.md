---
qid: vq_84d1898e40__eli5__local
question: How do you copy just the structure of a table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 204
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:31-05:00'
sources: []
---

Imagine building a house from a set of blueprints. The **structure** (or **schema**) is the blueprint: it tells you how many rooms, where windows go, and what walls look like, but it doesn’t hold any furniture or paint. In data terms, copying just a table’s structure means creating a new table that has exactly the same columns and data types as the original, but no rows of data inside.

In most database systems you can do this with a simple command. For example:

```sql
CREATE TABLE new_table LIKE original_table;
```

The keyword `LIKE` tells the system to duplicate only the schema—column names, types, default values, and constraints—while leaving the table empty. Think of it as printing an exact copy of the blueprint so you can later fill in your own details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
