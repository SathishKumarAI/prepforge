---
qid: ing_47cf1a6053__star__local
question: 'Explain: Caching — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 354
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:52:13-05:00'
sources: []
---

**Situation** – While leading a recommendation engine for a mid‑tier e‑commerce platform, our latency hit 350 ms per request and we were exceeding the SLA of 250 ms. The model was a gradient‑boosted tree that ran on a 4‑core CPU with 16 GB RAM; every query triggered a full inference pass over 200 feature columns.

**Task** – Reduce response time to below 200 ms without compromising recommendation quality, and keep GPU memory usage under the existing budget.

**Action** – I introduced a two‑tier cache:  
1. *Feature cache* – Redis stores pre‑computed feature vectors keyed by user ID; we warmed it with batch jobs nightly.  
2. *Model output cache* – An in‑memory LRU cache (using Python’s `functools.lru_cache`) holds the top‑10 product IDs per user, refreshing every 12 hours. I added a Bloom filter to avoid false negatives on cold starts and tuned Redis eviction policies to “allkeys-lru”. The cache hit ratio jumped from 18% to 78%, so only 22% of requests hit the heavy model.

**Result** – Average latency dropped to 180 ms, meeting the SLA with margin. CPU usage fell by 45%, freeing resources for new experiments. I learned that thoughtful cache layering—combining feature and output caches—and careful eviction tuning can deliver dramatic performance gains without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
