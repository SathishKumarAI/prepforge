---
qid: vq_0531416db5__star__local
question: How can I discover what tables, columns, etc are there?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 353
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:46:16-05:00'
sources: []
---

**Situation**  
When I joined the legacy e‑commerce platform at Acme Corp, the data team needed an audit trail for customer orders. The existing database was a mix of Oracle and PostgreSQL, with no up‑to‑date documentation. My first task was to map out every table, column, and relationship before writing any queries.

**Task**  
I had to produce a comprehensive schema diagram within two weeks that included data types, constraints, and foreign keys so the audit engine could reliably join across services.

**Action**  
1. Ran `SELECT * FROM information_schema.tables WHERE table_schema='public';` in PostgreSQL and similar queries against Oracle’s `ALL_TABLES`.  
2. Exported metadata to CSV and used SQLAlchemy’s `inspect()` to programmatically pull column details, primary keys, and indexes.  
3. Wrote a small Python script that parsed the outputs, identified foreign‑key relationships via `information_schema.key_column_usage`, and generated PlantUML diagrams.  
4. Cross‑checked the results with the team’s ERD in Lucidchart, filling gaps where missing constraints were inferred from naming conventions.

**Result**  
Delivered a 120‑page schema diagram that reduced query development time by 35 %. The audit feature went live on schedule, and I documented the discovery process so future developers could auto‑generate similar maps. This experience taught me the value of automating metadata extraction to keep documentation in sync with evolving databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
