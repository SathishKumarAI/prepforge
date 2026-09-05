---
qid: vq_e619a73a75__eli5__local
question: How can you mask sensitive data in the Azure SQL Database?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 218
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:08-05:00'
sources: []
---

Imagine your database is a library where every book (row) contains a secret recipe (sensitive column). You want visitors to read the books but not see the exact ingredients. Data masking in Azure SQL Database is like putting a clear, unbreakable sheet over each recipe page so that only a generic “•••” appears when someone opens it. The real data stays inside the book; only the viewer sees the masked version.

To set this up you add a *MASKED* keyword to a column definition (e.g., `ALTER TABLE Employees ALTER COLUMN SSN ADD MASKED WITH (FUNCTION = 'default()')`). When users query that column, Azure replaces each value with “***” or a pattern you choose. The masking happens automatically in the database engine; it never changes the stored data, just how it is shown to different roles. Thus sensitive information stays hidden while normal operations continue unhindered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
