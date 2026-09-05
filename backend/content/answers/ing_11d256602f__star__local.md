---
qid: ing_11d256602f__star__local
question: 'Explain: Risky Shard Key: created_at — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 340
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:04:16-05:00'
sources: []
---

**Situation**  
I was leading the migration of our event‑logging service from a single MongoDB instance to a sharded cluster because the daily write volume had jumped from 2 M to 12 M events and latency was spiking.

**Task**  
Choose an appropriate shard key that would distribute writes evenly while preserving query performance on time‑range filters, all within a strict 48‑hour migration window.

**Action**  
I first evaluated the most common queries: they were range scans on `created_at`. A naive `created_at` key would concentrate recent data in one shard and create hotspots. To avoid this, I built a composite key `{created_at: 1, tenant_id: 1}` so that each tenant’s events were spread across shards but still allowed efficient range queries. I updated the router config, added a background index build on the new key, and scripted a rolling cutover with shard splits every 4 GB to keep chunks balanced. During cutover I monitored `mongostat` and sharding metrics, adjusting split thresholds when hot chunks appeared.

**Result**  
Post‑migration write latency dropped from 250 ms to <30 ms, throughput increased by 6×, and query performance on time ranges improved by 40%. The composite key also prevented future shard imbalances as new tenants joined. I learned that a seemingly obvious shard key can introduce severe hotspots; careful analysis of access patterns and a balanced composite key are essential for scalable sharding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
