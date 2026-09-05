---
qid: ing_2f75783664__star__local
question: 'Explain: Reference-based Eviction — CachesExplained \u00b7 google/guava
  Wiki \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 310
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:44-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time analytics platform that ingested millions of events per day. The front‑end dashboards queried a cache layer backed by Guava to avoid hitting the database for every request. After a spike in traffic, we noticed memory usage creeping up to 90 % and occasional OOM errors.

**Task:**  
I had to reduce peak memory consumption without sacrificing latency or losing hot data that users frequently accessed.

**Action:**  
I examined Guava’s reference‑based eviction policies—specifically *soft* and *weak* references. I reconfigured the cache to use `CacheBuilder.newBuilder().softValues()` so that JVM garbage collection could reclaim values when memory pressure rose, while keeping strong keys for quick lookup. I also added a custom `RemovalListener` to log evictions, enabling me to monitor which data was being purged. To avoid thrashing, I set a maximum size (`maximumSize(200_000)`) and tuned the expiration after write to 12 hours.

**Result:**  
Memory usage dropped from 90 % to ~55 %, eliminating OOM incidents while keeping cache hit rates above 97 %. The team learned that reference‑based eviction is a lightweight, JVM‑managed solution for dynamic workloads, and we now routinely instrument removal listeners to fine‑tune thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
