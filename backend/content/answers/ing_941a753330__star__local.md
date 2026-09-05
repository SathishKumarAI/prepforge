---
qid: ing_941a753330__star__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 265
output_tokens: 384
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:29:19-05:00'
sources: []
---

**Situation:**  
When launching a real‑time recommendation engine at my previous company, the model served predictions every 10 ms via a Flask API backed by an in‑memory TensorFlow graph. During peak traffic (≈25k requests/sec) we hit 80 % CPU and latency spiked to 150 ms, breaking our SLA.

**Task:**  
I needed to reduce inference latency by at least 60 % while keeping the model’s accuracy unchanged, without adding a second GPU cluster.

**Action:**  
1. Profiled traffic with `cProfile` and discovered that 70 % of requests were identical queries for the same user‑item pair.  
2. Implemented a two‑tier cache:  
   * **Local LRU cache** (using `functools.lru_cache`) to hold recent 10k predictions, keeping memory <1 GB.  
   * **Distributed Redis cache** with key = “user:item” and TTL=5 min for cross‑instance sharing.  
3. Wrapped the inference call in a decorator that first checks Redis, then local LRU, finally falls back to TensorFlow if miss.  
4. Added an async background task to prefetch hot keys based on recent access patterns.

**Result:**  
Cache hit rate rose from 0 % to 73 %, reducing average latency from 150 ms to 45 ms (a 70 % drop) and CPU usage fell below 30 %. The system now scales linearly with traffic, and I learned how cache locality and TTL tuning can dramatically improve ML service performance without extra hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
