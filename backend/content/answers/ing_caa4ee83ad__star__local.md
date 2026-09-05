---
qid: ing_caa4ee83ad__star__local
question: 'Explain: The Memory Hierarchy — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 316
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:14:18-05:00'
sources: []
---

**Situation**  
At my previous startup we were building a conversational AI for customer support. The live chat volume spiked during product launches, and our bot’s response time kept creeping above the SLA of 1 s.

**Task**  
I had to redesign how the agent stored short‑term context (dialogue turns) versus long‑term knowledge (product specs, FAQs), while keeping latency low and memory usage under budget.

**Action**  
First I profiled the existing stack: we used a flat Redis cache for everything. I introduced a two‑tier hierarchy— an in‑memory LRU buffer (using C++ unordered_map with custom eviction) for the last 10 turns, and a persistent RocksDB layer for episodic knowledge keyed by user ID. For state transitions I switched from ad‑hoc JSON blobs to protobuf messages so we could serialize/deserialize faster. I also added a Bloom filter to quickly test if an item existed in the long‑term store before hitting RocksDB.

**Result**  
Response latency dropped from 1.8 s to 0.7 s, and CPU usage fell by 35 %. We handled 30% more concurrent sessions during launch without additional infra. I learned that a thoughtful memory hierarchy can turn an SLA nightmare into a scalable system, and that choosing the right serialization format is as important as the cache strategy itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
