---
qid: ing_dc9b1ed2e9__fp__local
question: 'Explain: HTTP Caching Headers — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 510
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:48:17-05:00'
sources: []
---

**Why a CDN needs cache‑control logic**

At the core of every CDN is *minimising latency while honouring data freshness*.  
When a user hits an edge server, that server must decide whether to serve a cached
object or fetch a fresh copy from the origin.  This decision boils down to a simple
optimization: **maximise hit‑ratio subject to an acceptable staleness bound**.

---

### Deriving the headers

1. **`Cache-Control`** – the primary directive set.
   * `public/private`: who may cache (shared edge vs. browser).
   * `max-age=Δt`: upper bound on age; after Δt seconds the object is considered stale and must be re‑validated.
   * `must-revalidate`: forces a revalidation once stale, preventing “stale‑but‑revalidating” behaviour that would otherwise expose users to outdated content.

2. **`ETag / Last-Modified`** – *content fingerprint*.
   * The origin sends an immutable token (`ETag`) or timestamp (`Last-Modified`).  
   * On subsequent requests the edge issues `If-None-Match`/`If-Modified-Since`.  
   * If unchanged, the CDN returns **304 Not Modified**, saving bandwidth and CPU.

3. **`Expires`** – legacy fallback; a UTC date after which content is stale.  
   * Modern systems favour `max‑age`, but both coexist for backward compatibility.

4. **`Vary`** – tells caches that the response varies on certain request headers (e.g., `Accept-Encoding`).  
   * Prevents serving gzip to an uncompressed client or vice versa.

---

### Non‑obvious insight

A CDN can *intelligently shorten* `max-age` for objects whose **content entropy is high**.  
Entropy correlates with update frequency: highly dynamic assets (e.g., real‑time dashboards) exhibit higher Shannon entropy, so a lower `max-age` yields fewer stale hits without extra network traffic.  
In contrast, static assets (logos, fonts) have low entropy and can sustain long cache times.

By tying cache directives to measured content volatility rather than hard‑coded heuristics, CDNs achieve the optimal trade‑off between latency, bandwidth, and freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
