---
qid: ing_09b8feace5__fp__local
question: 'Explain: The solution to the browser caching issue'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 366
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:26:32-05:00'
sources: []
---

### Why a Browser Caching Bug Hurts Model Delivery

When an ML‑in‑browser app loads a large weight file (e.g., a 10 MB TensorFlow.js graph), the HTTP response header `Cache-Control: no-cache` is usually sent so that every visit forces a fresh download.  
If the header is omitted or mis‑set, the browser stores the file and serves it from disk on subsequent visits. The *problem* arises when developers update the model but forget to change the URL or add a version query string; clients keep using the stale cached weights, leading to incorrect predictions.

#### Fundamental Principle: **Cache Invalidation ≠ Cache Validation**

- **Validation** (e.g., `ETag`/`Last‑Modified`) asks the server if the cached copy is still valid.  
- **Invalidation** forces a new fetch regardless of age.  

In ML, model weights are *immutable* for a given version; any change must be treated as a brand‑new resource. Thus, we should **invalidate** rather than validate.

#### Deep Insight: Use a Content‑Addressable URL

Hash the weight file (SHA‑256) and append it to the filename (`model.v3.a1b2c3.json`).  
- The URL itself encodes the content; browsers treat any hash change as a new resource, automatically bypassing cache.  
- This eliminates the need for server‑side headers or manual version bumping.

**Takeaway:** For ML assets, force cache invalidation by making URLs content‑addressable; this guarantees that every deployment delivers the exact weights intended without relying on fragile header tricks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
