---
qid: ing_ecffb8d1ca__aws__local
question: 'Explain: Applicability — CachesExplained \u00b7 google/guava Wiki \u00b7
  GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 407
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:16-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑pipeline team, we noticed that repeated calls to an external ML inference API were throttling throughput. I needed a cache that could store predictions for the last 5 minutes while respecting memory limits.

**Action (Technical Design)**  
I chose **Guava’s `CacheBuilder`** with:
- `maximumSize(1_000_000)` – caps heap usage (~80 MB assuming 80‑byte entries).  
- `expireAfterWrite(5, TimeUnit.MINUTES)` – ensures stale predictions are purged.  
- `refreshAfterWrite(4, TimeUnit.MINUTES)` – triggers background refresh to keep data fresh without blocking reads.  

I wrapped it in a **`CacheLoader`** that batch‑calls the inference API, reducing network round‑trips by 70 %. I also added an eviction listener to log cache misses for telemetry.

**Result**  
Post‑implementation latency dropped from 320 ms (API only) to 45 ms average. Throughput rose from 1,200 req/s to 6,500 req/s, a **450 % increase**, while API call costs fell by 65 %. The cache hit ratio stabilized at **92 %**.

**Leadership Principles & Bar‑raiser Signals**  
- *Customer Obsession*: Delivered faster predictions for downstream services.  
- *Dive Deep*: Analyzed memory/latency trade‑offs, tuned `maximumSize`.  
- *Ownership*: Handled failure modes (cache miss → graceful fallback).  
- *Bias for Action*: Deployed in 2 days, no A/B needed.

**Learning** – Early experiments with a simple `HashMap` revealed race conditions; switching to Guava’s concurrent cache eliminated subtle bugs and reduced maintenance overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
