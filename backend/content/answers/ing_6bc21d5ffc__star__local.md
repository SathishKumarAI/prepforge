---
qid: ing_6bc21d5ffc__star__local
question: 'Explain: Partial or Filtered Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 344
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:02:33-05:00'
sources: []
---

**Situation:**  
At my previous company we built a feature store that served real‑time features to dozens of production models. One model, a churn predictor, pulled customer activity from a massive events table (≈ 5 B rows). The query was bottlenecked on a full index scan because most customers had no recent activity in the last 30 days.

**Task:**  
Reduce the query latency for the churn model to under 200 ms while keeping storage overhead minimal, so we could serve features at scale without over‑provisioning hardware.

**Action:**  
I designed a partial (filtered) index on the events table: `CREATE INDEX idx_recent_activity ON events(customer_id, event_timestamp) WHERE event_timestamp >= NOW() - INTERVAL '30 days';`. This kept only recent rows in the index, cutting its size by ~90 %. I also added an INCLUDE column for the activity count to avoid lookups. The query planner automatically used this index for the model’s feature extraction. I monitored the cache hit rate and adjusted the 30‑day window based on business cycles.

**Result:**  
Query latency dropped from 1.2 s to 120 ms, a 90 % improvement. Storage cost fell by 8 GB per day, freeing capacity for other workloads. The exercise taught me how selective predicates can dramatically shrink index size and improve performance when data is naturally partitioned by time or status.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
