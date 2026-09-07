---
qid: ing_407e4cf601__faang__local
question: 'Explain: Origin Overload on Misses — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 433
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:14:02-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the “Origin Overload on Misses” problem that CDNs face: when a cache miss forces a request to hit the origin server, a surge of such requests can overwhelm it. I’ll assume we’re dealing with a global CDN serving static assets and that origins are behind load balancers.

**Approach**  
1. Identify the root cause: bursty traffic → many simultaneous cache misses → origin overload.  
2. Design mitigation layers: edge‑side throttling, request coalescing (deduplication), pre‑warming, graceful degradation, and scalable backend pools.  
3. Quantify load reduction per layer.

**Depth**  
- **Cache‑miss detection** at the edge is O(1).  
- **Coalescing**: maintain a short TTL “in‑flight” map; duplicate requests wait for the first to finish, reducing concurrent hits by up to 80 %.  
- **Back‑pressure**: edges expose a token bucket per origin; if tokens exhausted, return 503 or cached stale content.  
- **Dynamic scaling**: autoscale origin pods based on miss rate (e.g., >5 % of traffic).  
- **Graceful degradation**: serve “placeholder” assets while the real ones load, keeping user experience acceptable.

**Edge Cases**  
- Sudden flash crowds (e.g., product launch) → coalescing may delay delivery; we can relax deduplication TTL.  
- Origin failure → fallback to stale cache or edge‑hosted mirrors.  
- Cache corruption → purge and recompute.

**Optimize & Communicate**  
Explain that each mitigation layer adds minimal latency (<5 ms) but dramatically lowers origin load (often >90 %). I’d present the trade‑off: tighter throttling reduces miss traffic but may increase perceived latency; coalescing balances them. Conclude by noting monitoring metrics (miss rate, token bucket fill, origin response times) to iterate on thresholds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
