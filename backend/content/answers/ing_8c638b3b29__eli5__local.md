---
qid: ing_8c638b3b29__eli5__local
question: 'Explain: RR (Random Replacement) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 255
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:19:09-05:00'
sources: []
---

Imagine a coffee shop with only eight stools. Every time a new customer arrives, the barista must decide which stool to clear so the newcomer can sit. **Random Replacement (RR)** is like tossing a handful of names into a hat and picking one at random—whichever name comes out gets the stool taken away, no matter how long that customer has been waiting or how often they order.

In computer memory terms, a cache holds up to eight data items. When a new item needs space and the cache is full, RR simply selects any existing item at random for eviction. There’s no tracking of usage frequency (like Least‑Recently‑Used) or recency (Least‑Frequently‑Used); it’s pure chance.

Why would you use RR? It’s very fast—no bookkeeping needed—and can work well when data access patterns are unpredictable. However, if some items are “hot” and others are rarely used, RR may accidentally evict a hot item often, hurting performance. Thus, while simple, RR is usually outperformed by smarter strategies that consider how often or how recently items were accessed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
