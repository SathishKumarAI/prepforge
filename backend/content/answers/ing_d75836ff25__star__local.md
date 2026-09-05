---
qid: ing_d75836ff25__star__local
question: 'Explain: Time-Series & Metrics — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 334
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:28-05:00'
sources: []
---

**Situation:**  
In my last role, we were building a real‑time monitoring dashboard for an IoT platform that streamed sensor data from thousands of devices every second. The existing PostgreSQL backend couldn’t keep up with the write throughput and our latency goals (≤150 ms) were slipping.

**Task:**  
I had to design a storage layer that could ingest high‑velocity time‑series metrics, support efficient range queries by timestamp, and still let us perform aggregations like moving averages across device groups within milliseconds.

**Action:**  
I chose Apache HBase for its columnar schema flexibility and built a “time‑series” table with the row key composed of `deviceID#timestamp` (sharded via a hash prefix). I used HBase’s bulk load API (`ImportTsv`) to pre‑stage data, and set up compaction policies that retained only the last 30 days. For aggregation, I implemented a custom HBase coprocessor that runs a sliding window algorithm on the fly, exposing results through a REST API backed by Apache Phoenix for SQL‑style queries.

**Result:**  
Write throughput increased from ~1k ops/s to >20k ops/s, and dashboard query latency dropped to 90 ms average. We also cut storage costs by 35% by keeping only recent data. I learned how HBase’s key design directly impacts time‑series performance and the importance of coupling coprocessors with Phoenix for real‑time analytics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
