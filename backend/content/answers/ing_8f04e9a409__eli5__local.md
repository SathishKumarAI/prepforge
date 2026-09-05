---
qid: ing_8f04e9a409__eli5__local
question: 'Explain: Expiration Policy — Design of a Modern\u00a0Cache - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 288
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:44-05:00'
sources: []
---

Imagine a supermarket that keeps fresh produce on the counter but only for as long as customers are likely to buy it. The **expiration policy** is the rule that tells the store how long each item stays before it’s removed or replaced. In a modern computer cache, this rule decides when stored data (like a web page fragment) should be discarded so the cache doesn’t keep stale information forever.

A simple analogy: think of a vending machine that refreshes its snacks every hour. If you press a button and get a candy, the machine knows it’s only good for an hour; after that, it “expires” and is replaced by a fresh one. This keeps the machine lean (only needed items) and fast (no long‑running search).  

In high‑scalability systems, we use two main expiration strategies:

1. **Time‑to‑Live (TTL)** – each cached item has a countdown timer; when it reaches zero, the item is automatically purged.
2. **Least‑Recently‑Used (LRU)** – if the cache fills up, the item that hasn’t been accessed for the longest time gets evicted.

Both methods let many servers share a cache without getting bogged down by old data, keeping response times low and memory usage predictable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
