---
qid: vq_29c2f93904__star__local
question: WHAT IS THE DIFFERENCE BETWEEN CHAR AND VARCHAR?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 295
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:52:51-05:00'
sources: []
---

**Situation:**  
While refactoring the user profile module for a social‑media app, I noticed the `display_name` column in our PostgreSQL table was consuming 1.5 GB of storage, yet most names were under 20 characters.

**Task:**  
I needed to reduce the database size and improve query performance without breaking existing application logic or compromising data integrity.

**Action:**  
I compared the two string types: `CHAR(255)` stored a fixed 255‑byte value padded with spaces, while `VARCHAR(255)` stored only the actual characters plus a small length prefix. I ran a quick benchmark using `pgbench` to measure read/write times for both columns and analyzed disk usage with `\d+ users`. After confirming that `display_name` rarely exceeded 50 characters, I altered the schema to `VARCHAR(50)`, updated the ORM models, added a validation rule in Django to enforce the new limit, and ran a migration script that preserved existing data.

**Result:**  
The table shrank from 1.5 GB to 350 MB (≈ 75% reduction). Query latency on name lookups dropped by ~12%, and I learned that choosing the right string type can yield significant storage and performance gains when you understand padding overhead and typical data lengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
