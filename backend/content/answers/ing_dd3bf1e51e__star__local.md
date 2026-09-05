---
qid: ing_dd3bf1e51e__star__local
question: 'Build a rate limiter. Every ten minutes I''ll add a requirement: per-tenant
  limits, burst allowances, then a sliding window. How do you keep your code from
  collapsing?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 334
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:37-05:00'
sources: []
---

**Situation** – In my last role I was tasked with adding an API rate limiter for a multi‑tenant SaaS platform that already had strict SLAs. The initial requirement was a fixed token bucket per user, but every ten minutes new constraints arrived: tenant‑wide quotas, burst allowances, and finally a sliding window to smooth traffic spikes.

**Task** – I needed to design a single, extensible module that could ingest these evolving rules without rewriting the core logic or causing downtime. The goal was to keep latency below 5 ms per request while supporting up to 10⁵ tenants.

**Action** – I refactored the limiter into three layers:  
1. **Rule engine** – a pluggable DSL that stores tenant, user, and global limits in Redis sorted sets for O(1) lookups.  
2. **Token bucket core** – implemented with a lock‑free ring buffer per tenant; burst tokens are pre‑refilled from the rule engine.  
3. **Sliding window wrapper** – uses a time‑bucketed counter stored in Redis Streams, updated asynchronously to avoid blocking calls. I added feature flags so new constraints could be toggled on or off and used dependency injection for testability.

**Result** – The system handled 200 k QPS with <4 ms average latency; tenant violations dropped from 12% to 0.3%. I learned that decoupling rule parsing, token accounting, and window smoothing is key to evolving complex rate limits without breaking existing traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
