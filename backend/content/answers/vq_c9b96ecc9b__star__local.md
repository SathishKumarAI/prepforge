---
qid: vq_c9b96ecc9b__star__local
question: What is a Rollback ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 316
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:19:37-05:00'
sources: []
---

**Situation** – In my last role as a backend engineer for an e‑commerce platform, we were rolling out a new order‑processing microservice that integrated with our PostgreSQL DB. During load testing, the service started throwing “deadlock detected” errors and the transaction logs began to grow uncontrollably, threatening to hit disk limits.

**Task** – I had to stop the runaway transactions, restore the database to a consistent state, and re‑enable safe writes without losing any user data or compromising performance.

**Action** – First, I used `pg_terminate_backend` to kill the offending sessions. Then I executed an explicit `ROLLBACK TO SAVEPOINT` for each open transaction that had been partially applied, ensuring all intermediate changes were discarded atomically. After confirming no dirty reads remained, I switched the affected tables to a read‑only mode temporarily and ran a background script to rebuild the indexes, which reduced the deadlock frequency by 85 %. Finally, I added advisory locks around critical sections of the new service to prevent future conflicts.

**Result** – The rollback procedure restored data integrity within 12 minutes, cut transaction latency from 250 ms to 90 ms, and prevented a potential outage that could have cost us $30K in downtime. I learned that careful use of savepoints and controlled rollbacks can be a powerful tool for maintaining system resilience under pressure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
