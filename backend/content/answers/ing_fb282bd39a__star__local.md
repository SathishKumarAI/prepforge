---
qid: ing_fb282bd39a__star__local
question: 'Explain: Traffic Spike Absorption — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 395
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:07-05:00'
sources: []
---

**Situation**  
At my last company we launched a new marketing campaign for a mobile game and the app store pages suddenly saw a 7× increase in traffic over a single weekend. The CDN was already in place but our edge nodes were saturating, causing latency to climb above 200 ms and a 15% drop in conversion rates.

**Task**  
I had to redesign the CDN configuration so that it could absorb sudden spikes without degrading user experience or exceeding budget constraints, while keeping cache hit ratios high for dynamic content.

**Action**  
First, I instrumented real‑time analytics (Prometheus + Grafana) on edge servers to capture request rates and cache hit/miss stats. Using this data I set up a multi‑tier caching strategy: static assets were pinned at the edge with long TTLs; semi‑dynamic JSON payloads used a “stale‑while‑revalidate” policy so that stale content could be served while fresh data was fetched in the background. I also introduced an auto‑scaling rule for edge nodes based on CPU and request latency thresholds, and implemented rate‑limiting via Envoy to protect origin servers from overload. Finally, I added a CDN load‑balancer that shifted traffic to underutilized regions during peaks.

**Result**  
During the next campaign peak we saw average latency drop from 210 ms to 90 ms, cache hit ratio climb from 68% to 92%, and conversion rates rebound by 12%. The auto‑scaling added only 18% extra cost. I learned that proactive monitoring coupled with smart cache policies can turn a CDN into a resilient traffic absorbent layer rather than a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
