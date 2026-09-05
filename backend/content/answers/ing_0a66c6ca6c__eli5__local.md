---
qid: ing_0a66c6ca6c__eli5__local
question: 'Explain: Cons : — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 303
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:59-05:00'
sources: []
---

Imagine your brain’s short‑term memory as a tiny backpack that can only hold a few important notes while you solve a puzzle (the training data). When the backpack is full, you must drop something to make room for new information—this is “cache eviction.” In machine learning pipelines, seven common ways to decide what to drop are:

1. **Least Recently Used (LRU)** – toss the note that hasn’t been looked at for the longest time.  
2. **Least Frequently Used (LFU)** – discard the note that has been consulted the fewest times.  
3. **First In, First Out (FIFO)** – simply drop the oldest note in the backpack.  
4. **Random Replacement** – pick a note at random to let go.  
5. **Time‑Based Expiry** – remove notes older than a set age threshold.  
6. **Least Value** – evaluate each note’s “importance score” (e.g., gradient magnitude) and discard the lowest.  
7. **Adaptive Weighted Eviction** – combine several signals—recency, frequency, value—to choose the best candidate.

Like choosing which flashcards to keep in a cramped pocket, these strategies help machine‑learning systems keep the most useful data ready while staying within limited memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
