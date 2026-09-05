---
qid: ing_7566faaae8__star__local
question: 'Explain: Vertical Partitioning — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 330
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:29-05:00'
sources: []
---

**Situation** – At my previous SaaS company we hit a 30 % slowdown on our billing table after adding a new subscription tier. The table held 12 M rows and every query had to scan columns for the old plan fields that were no longer relevant.

**Task** – I was tasked with reducing read latency below 50 ms for the core metrics dashboard while keeping write performance unchanged, all within our existing PostgreSQL cluster.

**Action** – I performed a vertical partitioning audit: identified 5 legacy columns that only served historical reporting. I created a new table `billing_legacy` and moved those columns there, adding a foreign key back to the main table. Then I rewrote the application’s ORM layer to use JOINs lazily when the legacy data was needed for compliance exports. To maintain ACID guarantees I set up a lightweight replication trigger that kept the two tables in sync during inserts/updates. Finally, I added targeted indexes on the new partition and dropped unused ones from the main table.

**Result** – Query times for the dashboard fell from 180 ms to 35 ms (a 80 % win). Write latency stayed constant at ~4 ms. The migration also cut storage usage by 12 %, freeing up disk budget for future features. I learned that vertical partitioning is a low‑risk, high‑reward strategy when legacy columns are rarely accessed in hot paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
