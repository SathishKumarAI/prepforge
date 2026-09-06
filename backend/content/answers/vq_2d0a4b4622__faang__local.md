---
qid: vq_2d0a4b4622__faang__local
question: How can I get a name for a temporary table that will not clash?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 447
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:56-05:00'
sources: []
---

**Clarify**  
You need a unique identifier for a *temporary* table (e.g., in SQL Server, PostgreSQL, MySQL) so that two concurrent sessions or processes don’t try to create the same name and collide. The assumptions:  
- Temporary tables are session‑scoped (or database‑scoped).  
- You have access to the current user ID, process ID, timestamp, or a UUID generator.  
- No external coordination service is available.

**Approach**  
1. Generate a deterministic suffix using session‑specific data.  
2. Concatenate it with a stable prefix (`tmp_`).  
3. Optionally add a random component for extra safety in highly concurrent environments.

**Depth**  
```sql
-- Example in PostgreSQL
DO $$
DECLARE
  tmp_name text;
BEGIN
  tmp_name := 'tmp_' || current_user || '_' ||
              extract(epoch from clock_timestamp())::bigint || '_' ||
              gen_random_uuid();
  EXECUTE format('CREATE TEMP TABLE %I (id int)', tmp_name);
END $$;
```
- `current_user` or `pg_backend_pid()` guarantees uniqueness per session.  
- The epoch timestamp adds a chronological component; casting to bigint removes decimals.  
- `gen_random_uuid()` provides entropy, virtually eliminating collisions even if two sessions start at the same microsecond.

**Edge Cases**  
- Extremely high‑frequency table creation may still collide on the epoch part; UUID covers this.  
- Some DBs restrict certain characters in identifiers—use only alphanumerics and underscores.  
- If the DB supports `CREATE TEMP TABLE ON COMMIT DROP`, you can let the system auto‑name it.

**Optimize & Communicate**  
- Keep the name length reasonable to avoid hitting identifier limits (e.g., 63 chars in PostgreSQL).  
- Log or expose the generated name if downstream code needs to reference it.  
- Explain that session scope + UUID guarantees isolation, satisfying interviewers’ expectations for robust, collision‑free naming.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
