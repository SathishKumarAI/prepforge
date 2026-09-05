---
qid: ing_936d82a274__eli5__local
question: 'Explain: Time-to-Live (TTL) — Cache Eviction Policies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 203
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:31:24-05:00'
sources: []
---

Think of a machine‑learning model’s cache like a coffee shop that keeps a handful of fresh cups on the counter for quick service. The **Time‑to‑Live (TTL)** is the rule that says each cup can stay on the counter only so long—say 30 minutes—before it must be removed, even if nobody has finished drinking it yet. When the timer runs out, the shop clears that cup to make room for new orders.

In a cache, TTL works the same way: every stored item (a pre‑computed prediction or data snippet) is stamped with an expiry time. Once the clock reaches that point, the system automatically evicts the entry, freeing space for fresh results. This prevents stale data from piling up and keeps the cache lean and responsive—just like a coffee shop keeps its counter tidy and its drinks hot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
