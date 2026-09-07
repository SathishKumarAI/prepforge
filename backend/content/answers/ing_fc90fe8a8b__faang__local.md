---
qid: ing_fc90fe8a8b__faang__local
question: 'Explain: Daily Storage Calculation — Design Instagram | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 485
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:26:55-05:00'
sources: []
---

**Clarify**  
We’re asked to design a “daily storage calculation” service for Instagram: given millions of photos/videos uploaded each day, compute the total bytes consumed per day (and optionally per user). Assume we have existing upload pipelines and metadata stores; we need an efficient, fault‑tolerant way to aggregate sizes without scanning all objects each time.

**Approach**  
1. **Event‑driven ingestion** – attach a lightweight “size” field to every upload event (bytes, media type).  
2. **Per‑partition counters** – use a distributed counter table keyed by day (and optional user_id) in a fast key‑value store (e.g., DynamoDB/Bigtable).  
3. **Batch aggregation** – run a daily MapReduce/Beam job to reconcile outliers or missed events, updating the counters.  
4. **Query layer** – expose an API that reads the counter table; no heavy joins needed.

**Depth**  
- **Data model**: `DailyStorage(day, user_id?, total_bytes)`. Increment operation is atomic (`ADD` in DynamoDB).  
- **Complexity**: O(1) per upload for increment; daily reconciliation O(N) over failed uploads.  
- **Fault tolerance**: idempotent increments (use unique event IDs); retry logic ensures eventual consistency.  
- **Scalability**: sharding by day/user_id keeps hot spots minimal; counters can be stored in a single partition per day if traffic allows.

**Edge Cases**  
- Duplicate uploads → dedupe via event ID.  
- Deletions → subtract size on delete events or run nightly compaction.  
- Large media spikes (e.g., Live Reels) → ensure counter table supports high write throughput; use throttling/queueing.

**Optimize & Communicate**  
To reduce storage churn, compress counters with delta encoding and archive older days to cold storage. For real‑time dashboards, stream updates into a time‑series database (InfluxDB). In an interview, I’d emphasize the trade‑off between write latency (simple counter increment) vs. consistency (batch reconciliation), and explain how each component scales independently, satisfying FAANG’s focus on robustness and performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
