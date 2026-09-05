---
qid: ing_ecfa29a04e__star__local
question: 'Explain: Query a Present URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:37-05:00'
sources: []
---

**Situation:**  
At my previous startup we ran a real‑time ad‑serve platform that ingested millions of click logs per day. Every incoming request included a “present” URL that needed to be checked against our cache to avoid re‑processing duplicate clicks, but the full list of processed URLs was too large for memory.

**Task:**  
I had to design an efficient way to determine in constant time whether a present URL had already been seen, while keeping RAM usage below 2 GB and maintaining <1% false positives.

**Action:**  
I chose a Bloom filter. Using Python’s `pybloom_live`, I allocated a 32‑bit hash space with 10⁷ expected items and tuned the number of hash functions to 7. The filter was persisted to Redis so it could be shared across microservices. When a request arrived, we first queried the Bloom filter; if it returned “not present” we forwarded the URL for processing and inserted it into the filter. To keep false positives low, I scheduled nightly re‑initialization with a fresh filter after 24 h of data.

**Result:**  
The solution reduced duplicate processing by 97%, cut CPU usage by 40%, and kept memory consumption under 1.2 GB. It also simplified our architecture—no need for a distributed key‑value store just to check URL presence. I learned that careful parameter tuning of Bloom filters can deliver near‑real‑time deduplication at scale without heavy infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
