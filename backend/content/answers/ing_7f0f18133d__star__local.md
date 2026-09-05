---
qid: ing_7f0f18133d__star__local
question: 'Explain: Supported on-heap cache types — Caching'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 444
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:47:38-05:00'
sources: []
---

**Situation**  
At my previous job I was building a real‑time recommendation engine that ingested user click streams and had to serve predictions with sub‑200 ms latency. Our model inference cache lived in Java and we were using Spark’s broadcast variables for the model weights, but the feature lookup layer kept growing out of control.

**Task**  
I needed to implement an on‑heap cache that could store up to 500 M of pre‑computed feature vectors while keeping memory usage bounded and ensuring fast eviction of stale data. The goal was a 30% reduction in average query latency without exceeding the JVM heap limit.

**Action**  
I chose Google Guava’s `CacheBuilder` because it gives fine control over size, expiration, and concurrency. I configured:
- `maximumSize(200_000)` to cap entries at 200 k (≈500 M when serialized).
- `expireAfterAccess(Duration.ofMinutes(10))` so inactive features were purged.
- A custom `Weigher` that measured the actual byte size of each value, preventing oversized objects from filling the heap.

I wrapped the cache in a thread‑safe service that prefetches missing keys via an async batch loader. During load I batch‑queried our Redis feature store and populated the Guava cache; eviction callbacks logged evicted keys for monitoring. The whole layer ran inside the Spark executor’s JVM, so no off‑heap serialization was needed.

**Result**  
After deployment we saw a 32% drop in average response time (from 210 ms to 138 ms) and a 15% reduction in GC pause times. The cache hit rate climbed from 42% to 78%. I learned that choosing the right on‑heap cache library and tuning its size/eviction policy can dramatically improve latency while keeping memory usage predictable, especially when coupled with batch loading and custom weighing logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
