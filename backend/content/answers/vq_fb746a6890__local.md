---
qid: vq_fb746a6890__local
question: Kind of COMMENT statements placed within SQL statements ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 397
total_tokens: 619
web_searches: 0
cost_usd: 0.0
sources: []
---

**Answer:**  
In most relational engines you can embed comments with two styles: **`-- comment`** for a single line and **`/* comment */`** for block text that may span multiple lines. MySQL, PostgreSQL, SQL Server, Oracle, SQLite—all support these.

**Nuance & experience**

- `--` is the simplest; it terminates at the end of the line, so you can safely put it after a clause:  
  ```sql
  SELECT * FROM users WHERE id = 42 -- fetch user by id
  ```

- `/* … */` can be nested in some engines (PostgreSQL allows nesting, MySQL does not). In production I’ve seen accidental nesting cause the whole query to fail on MySQL because it treats the inner `*/` as closing the comment. Always test with a linter.

- Inline comments inside expressions are fine, but avoid commenting out entire clauses in long queries—readability suffers and some IDEs strip them when reformatting.

- When using tools like **pgAdmin** or **DataGrip**, block comments survive formatting; line comments may be lost if you copy‑paste into a different editor. I usually use `/* … */` for multi‑line notes in versioned scripts.

- In migrations (Flyway, Liquibase), we keep the comment inside the SQL file to explain why a column was added or why a trigger uses a particular logic; that comment is preserved when the script runs on any DB engine supporting standard SQL.

So: `--` for quick one‑liners, `/* … */` for longer, cross‑engine notes—watch for nesting rules and IDE quirks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
