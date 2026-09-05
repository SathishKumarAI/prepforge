---
qid: ing_43f382062d__eli5__local
question: 'Explain: Least Recently Used (LRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 381
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:24:29-05:00'
sources: []
---

Think of a small coffee shop that can hold only seven cups at once. Every time someone orders, the barista puts their cup in the front row and remembers when it was last used. When the shop gets full and another order comes, the barista looks back and takes out the cup that hasn’t been touched for the longest time—this is **Least‑Recently Used (LRU)**.

In computing, a *cache* stores recently accessed data so future requests can be answered faster. An *eviction strategy* decides which cached item to throw away when space runs out. LRU keeps track of each item's last access time and removes the one whose “last touch” was farthest in the past. Other common strategies include:

1. **First‑In, First‑Out (FIFO)** – discard the oldest entry, like a line at checkout.  
2. **Random** – pick any item at random, useful when all items are equally likely to be reused.  
3. **Least Frequent Used (LFU)** – evict the data accessed least often, as if the shop keeps track of how many drinks each customer orders.  
4. **Most Recently Used (MRU)** – remove the freshest entry, useful when new items are unlikely to be reused soon.  
5. **Time‑to‑Live (TTL)** – delete entries after a fixed period, similar to a “today’s specials” shelf that refreshes daily.  
6. **Adaptive Replacement Cache (ARC)** – blends LRU and LFU, learning which pattern works best over time.

Each strategy balances simplicity, speed, and hit‑rate depending on how data is used in a particular application.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
