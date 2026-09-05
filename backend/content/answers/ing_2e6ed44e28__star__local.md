---
qid: ing_2e6ed44e28__star__local
question: 'Explain: Vertical Scaling — System Design: How to Scale a Database'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 321
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:01:14-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, our loan‑processing service hit a bottleneck when the PostgreSQL database could no longer handle the 2,000 concurrent user queries per minute during peak application periods. The latency spiked from 120 ms to over 1 s, jeopardizing compliance with SLA and risking regulatory fines.

**Task:**  
I was tasked with scaling the database to support a sustained 5× traffic increase while keeping read‑write latency under 200 ms and preserving data integrity across all services.

**Action:**  
First, I profiled queries with pg_stat_statements and identified heavy joins on the `transactions` table. I then implemented partitioning by transaction date, added a materialized view for the most recent month, and introduced read replicas to offload reporting traffic. To address CPU limits, I migrated from single‑node instances to an Amazon RDS Aurora cluster with auto‑scaling enabled, configuring a higher instance class (db.r5.large) during predicted peaks. I also leveraged connection pooling via PgBouncer to reduce overhead.

**Result:**  
Post‑migration, peak latency dropped to 140 ms and throughput increased from 2k to 12k QPM. The cost of scaling up was offset by eliminating manual sharding maintenance, and we avoided a regulatory audit that would have followed SLA breaches. I learned the importance of combining vertical scaling (instance upgrades) with logical schema changes for optimal performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
