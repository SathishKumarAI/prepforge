---
qid: ing_5d411a512f__faang__local
question: 'Explain: All Database Lists — All Dbs List'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 471
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:20:49-05:00'
sources: []
---

**Clarify**

The interviewer wants you to explain how an application would retrieve *all* database names from a data platform (e.g., PostgreSQL, MySQL, Snowflake).  
Assumptions:  
1. The user has permissions to query system catalogs or information schema.  
2. We’re targeting relational engines; No‑SQL specifics can be analogized.

**Approach**

1. Identify the catalog view that stores database metadata (`pg_database` for PostgreSQL, `information_schema.schemata` for MySQL).  
2. Form a simple SELECT query to list names (and optional owner/creation date).  
3. In multi‑tenant or cloud platforms, add filters (e.g., exclude system DBs).  
4. Wrap the call in a function/service that handles errors and pagination if the catalog is large.

**Depth**

```sql
-- PostgreSQL
SELECT datname
FROM pg_database
WHERE NOT datistemplate;          -- filter out template databases

-- MySQL
SELECT schema_name AS db_name
FROM information_schema.schemata;
```

*Complexity*: O(N) where N = number of DBs; constant space.  
Trade‑offs: Using `information_schema` is portable but may be slower on very large catalogs; querying the engine’s native catalog (`pg_catalog`) is faster.

**Edge Cases**

- Lack of permission → return empty list + error code.  
- Huge number of databases → paginate results or stream.  
- Names with special characters → ensure proper quoting/escaping.  

**Optimize & Communicate**

For cloud services (e.g., Snowflake), the `SHOW DATABASES` command returns a result set; we can filter client‑side or use the REST API for pagination. I’d present this flow: “First, check permissions; then query the system catalog; finally, expose results via a thin service.” This demonstrates clear problem decomposition, knowledge of catalog schemas, and awareness of performance/security trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
