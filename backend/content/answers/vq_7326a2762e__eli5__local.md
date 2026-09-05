---
qid: vq_7326a2762e__eli5__local
question: How can I get the definition of a view ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 251
total_tokens: 409
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:56-05:00'
sources: []
---

Imagine a recipe card that tells you exactly how a dish is made, but the kitchen only shows the finished plate. A **view** in a database is like that invisible recipe: it’s a saved query that gives you a “virtual table” without storing data itself. To read its recipe, you ask the kitchen (the database) for the card.

In practice, most databases keep view definitions in a catalog table called *information_schema.views* or *sys.sql_modules*.  
You can pull the definition with a simple lookup:

```sql
SELECT VIEW_DEFINITION
FROM   INFORMATION_SCHEMA.VIEWS
WHERE  TABLE_NAME = 'YourViewName';
```

Or, if you need the full text (including parameters and security context), look in `sys.sql_modules`:

```sql
SELECT definition
FROM   sys.sql_modules
WHERE  object_id = OBJECT_ID('YourViewName');
```

These queries return the exact SQL that builds the view, just like pulling out the recipe card from the kitchen’s storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
