---
qid: vq_a27d5a80d6__star__local
question: WHAT ARE SOME DOWNSIDES OF USING INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 323
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:53-05:00'
sources: []
---

**Situation:**  
In a quarterly audit for our e‑commerce platform, we discovered that the order history table—over 12 million rows—was taking 8 seconds to return customer orders when we added a new reporting feature.

**Task:**  
I was tasked with reducing query latency below 2 seconds without compromising write performance or storage costs.

**Action:**  
After profiling, I realized our index strategy was hurting writes: the table had indexes on `customer_id`, `order_date`, and an outdated composite on `(customer_id, status)`. I re‑engineered the schema by removing the composite index, creating a single covering index on `(customer_id, order_date)` for reads, and adding a partial index on active orders. I also switched from the default InnoDB engine to a partitioned table to keep hot data separate. While implementing these changes, I monitored transaction logs and noted an increase in page splits, so I tuned autocommit settings and batch‑insert sizes.

**Result:**  
Query times dropped from 8 seconds to 1.3 seconds, while write throughput improved by 15%. Storage grew only 2 % due to the reduced number of indexes. I learned that indexes are a double‑edged sword: they accelerate reads but can inflate storage, slow writes, and increase maintenance overhead—balancing them requires careful profiling and continuous monitoring.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
