---
qid: ing_383959d938__star__local
question: 'Explain: is built on top of elastic allow — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 518
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:54-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, our mobile app’s “Find Deals” feature was sluggish—search queries took 1‑2 seconds and the UI froze during peak traffic (up to 5k QPS). The product team needed a faster, scalable search layer without rewriting the whole backend.

**Task**  
I had to replace the legacy SQL‑based full‑text search with an elastic‑search–powered solution that could handle real‑time indexing, support complex filters (price range, category, proximity), and keep latency under 200 ms even during traffic spikes.

**Action**  
1. **Architecture design:** I chose Elasticsearch as the core engine because of its near‑real‑time indexing and distributed nature. I built a lightweight Java service that streamed new deal records from Kafka into ES using bulk API calls, batching 500 docs every second to avoid overload.  
2. **Schema & mapping:** I defined a custom analyzer (edge n‑gram + synonym filter) for fuzzy matching on titles, and added geo‑point fields for radius queries.  
3. **Scaling strategy:** Deployed a 3‑node ES cluster with dedicated master nodes; used shard replication (replica = 1) to balance read/write load. I set up ILM policies to rollover indices daily and delete after 30 days, keeping storage in check.  
4. **Performance tuning:** Enabled search slowlog thresholds (10 ms for queries), then tuned query cache size and index refresh interval (5 s). Added circuit breaker monitoring via X-Pack to auto‑shutdown nodes under memory pressure.  
5. **Integration & fallback:** Wrapped ES calls with a retry/backoff mechanism; on failure, the service fell back to the legacy SQL search.

**Result**  
Query latency dropped from 1.8 seconds to <180 ms (average). The new layer handled 10k QPS during load tests without errors. User engagement in the “Find Deals” screen rose by 27%, and we reduced server costs by ~15% thanks to efficient ES scaling. I learned how critical it is to align search architecture with business KPIs—latency, availability, and cost—and that a well‑designed data pipeline can unlock massive performance gains without reinventing the wheel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
