---
qid: ing_70dfdc62c4__eli5__local
question: 'Explain: How It Works — 7 Cache Eviction Strategies You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 323
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:23-05:00'
sources: []
---

Imagine you’re at a tiny café that only has room for seven coffee cups, but customers keep coming and going all day. The café owner must decide which cup to take down (evict) whenever a new customer arrives. In computer terms, the “café” is a cache, the “cups” are stored data items, and the owner’s choice is a *cache eviction strategy*.

**1. Least Recently Used (LRU)** – Take out the cup that hasn’t been touched for the longest time.  
**2. First In, First Out (FIFO)** – Remove the very first cup you put in.  
**3. Most Recently Used (MRU)** – Toss the cup just used; it’s likely to be needed again soon.  
**4. Least Frequently Used (LFU)** – Evict the cup that has been sipped the fewest times overall.  
**5. Random Replacement (RR)** – Pick a cup at random, no pattern.  
**6. Clock (Second Chance)** – Give each cup a “second chance” flag; if it’s still needed, keep it, otherwise evict it.  
**7. Most Frequently Used (MFU)** – The opposite of LFU: remove the most popular cup because you expect a new variety to be requested.

Each strategy balances different goals—speed, fairness, or anticipating future requests—just like a café owner chooses which cup to clear based on customer habits and space constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
