---
qid: ing_1e078d81e0__faang__local
question: 'Explain: Stale facts — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 452
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:55:13-05:00'
sources: []
---

**Stale Facts – Agent Memory & State**

| Step | What I’d Say |
|------|--------------|
| **Clarify** | “You’re asking how an AI agent keeps track of facts that may become outdated (stale) and what mechanisms we use to refresh or invalidate them.”  Assume a dialogue system with long‑term knowledge, user context, and external data sources. |
| **Approach** | 1️⃣ Store facts in a *state store* keyed by entity + timestamp.<br>2️⃣ Tag each fact with a *TTL* (time‑to‑live) or *confidence decay* function.<br>3️⃣ On every query, check TTL; if expired, trigger a *refresh* (API call, re‑inference).<br>4️⃣ Use *event‑driven updates* when external triggers (e.g., news feed) arrive. |
| **Depth** | • **Memory Model:** Immutable log of events + current snapshot.  Querying recomputes state via differential updates.<br>• **Stale Detection:** `is_stale = now - last_update > TTL` or confidence < threshold.<br>• **Refresh Strategy:** *Lazy* (on demand) vs *Eager* (background polling). Complexity: O(1) lookup, refresh cost depends on source latency. Trade‑off: higher freshness ↔ more API calls & bandwidth. |
| **Edge Cases** | • Network failure → fallback to cached value.<br>• Conflicting sources → resolve via weighted voting.<br>• Rapid churn (stock prices) → set very short TTL or use push notifications. |
| **Optimize & Communicate** | • Batch refreshes for multiple stale facts.<br>• Cache eviction policies (LRU, LFU) to limit memory footprint.<br>Explain to interviewers: “We treat state as a versioned log; staleness is an explicit property we monitor and act on, balancing latency, cost, and accuracy.” |

*Word count:* 206

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
