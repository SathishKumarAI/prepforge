---
qid: ing_64edd0dce5__star__local
question: 'Explain: Read-only enforcement & row-level security - defence in depth'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 399
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:49:28-05:00'
sources: []
---

**Situation** – In the summer of 2024 I was leading a GDPR‑compliant ML model training platform at a fintech startup. Our analytics team was pulling sensitive transaction logs from a PostgreSQL warehouse into a Spark cluster, and we had to guarantee that no developer or data scientist could accidentally read or modify production rows.

**Task** – I needed to enforce a strict read‑only policy for the Spark job while also ensuring row‑level security so that each analyst only saw data for their own customer segment. The goal was zero‑touch compliance and minimal performance hit on the 10 TB nightly ingest pipeline.

**Action** – First, I applied PostgreSQL’s `SET default_transaction_read_only = true;` at the session level and wrapped all external connections in a custom ODBC driver that automatically added the flag. Then, for row‑level control, I implemented a security policy using Postgres 13’s native `row_level_security`. A dynamic view filtered rows by `customer_id` based on the authenticated user’s role, and I stored the mapping in an LDAP-backed authentication layer. On Spark, I used the DataSource API to read from the secured view, caching only the subset needed for training. Finally, I wrote a CI pipeline that ran unit tests against mock data sets to confirm no privileged writes could slip through.

**Result** – The solution cut accidental data leaks by 100 % and reduced query latency by 15 % thanks to the pre‑filtered view. We passed an external audit with zero findings, and the team now confidently runs experiments without manual oversight. I learned that combining database‑level read‑only enforcement with declarative row‑level policies gives a robust “defence in depth” that scales with data volume and team size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
