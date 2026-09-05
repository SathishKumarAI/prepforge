---
qid: ing_aaea459c12__eli5__local
question: 'Explain: FIFO (First In First Out) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 349
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:02-05:00'
sources: []
---

Think of a grocery store’s checkout line that only lets you take the next item from the front.  
**FIFO (First In, First Out)** works exactly like that: when a new piece of data is added to a cache and the cache is full, the oldest entry— the one that entered first—is removed to make room for the newest.

In computing, other “eviction” rules decide which item goes next. The most common ones are:

| Strategy | What it looks at |
|----------|------------------|
| **LRU** (Least Recently Used) | Which data hasn’t been accessed in a long time |
| **MRU** (Most Recently Used) | Which data was just used, often not helpful |
| **LFU** (Least Frequently Used) | Which data is accessed the fewest times |
| **ARC** (Adaptive Replacement Cache) | A mix of LRU and LFU that learns what works best |
| **CLOCK** | A simple approximation of LRU using a “hand” that circles items |
| **Random** | Picks any item at random – quick but unpredictable |
| **TTL** (Time‑to‑Live) | Removes data after a set time, regardless of use |
| **Policy‑based** | Uses application rules (e.g., keep images longer than text) |

Each rule is like choosing a different strategy for deciding who leaves the line when it’s full. The goal: keep the most useful items in the cache while discarding those that are least likely to be needed again.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
