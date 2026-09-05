---
qid: ing_7934da3277__star__local
question: 'Explain: Latency vs Throughput vs Bandwidth | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 323
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:11-05:00'
sources: []
---

**Situation:** While leading the redesign of our recommendation engine at a streaming startup, we noticed that user requests were timing out during peak hours even though our infrastructure had ample raw capacity.

**Task:** My goal was to reduce average request time (latency) without sacrificing the number of recommendations processed per second (throughput), all while staying within the bandwidth limits of our data‑center network.

**Action:** I first profiled the pipeline with `perf` and discovered that serialization of feature vectors added 30 ms per request. I refactored this to use flatbuffers, cutting latency by 70 %. Next, I introduced a sharded in‑memory cache (Redis) for the top‑20K items, which reduced disk lookups from 15 ms to 2 ms, boosting throughput from 1,200 to 3,500 requests/second. To keep bandwidth in check, I compressed cache responses with zstd and throttled outbound traffic via a token bucket algorithm, ensuring we never exceeded our 10 Gbps link.

**Result:** Latency dropped from 250 ms to 80 ms (a 68% improvement), throughput increased by 140%, and the bandwidth utilization stayed below 9 Gbps. I learned that balancing latency, throughput, and bandwidth requires targeted profiling, data structure optimization, and careful traffic shaping—skills I now apply in every system‑design interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
