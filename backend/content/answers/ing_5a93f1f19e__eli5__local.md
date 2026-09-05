---
qid: ing_5a93f1f19e__eli5__local
question: 'Explain: Most Recently Used (MRU) — 7 Cache Eviction Strategies You Should
  Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 334
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:59:59-05:00'
sources: []
---

Think of a grocery cart that can hold only seven items while you shop.  
When the cart is full, you must decide which item to drop before adding a new one.  
That decision is called a **cache‑eviction strategy** in computing.

* **Most Recently Used (MRU)** – “Drop the newest thing.”  If you just added milk, MRU will toss it out next time you need space, assuming fresh items are likely to be needed again soon.  
* **Least Recently Used (LRU)** – “Keep what you’ve used lately; throw away the one you haven’t touched in a while.”  
* **First‑In First‑Out (FIFO)** – “Throw away the oldest item that entered the cart, regardless of how often it’s used.”  
* **Random Replacement (RR)** – “Pick any item at random to remove.”  
* **Least Frequently Used (LFU)** – “Drop the item you’ve bought the least number of times over time.”  
* **Most Frequently Used (MFU)** – “Remove the item you buy most often, hoping a new product will be more popular.”  
* **Adaptive Replacement Cache (ARC)** – “Blend LRU and LFU, learning which pattern works best for your shopping habits.”

Each strategy trades off how well it predicts future needs against simplicity. In software, choosing the right one can make programs run faster or slower, just like a smart grocery cart keeps you from losing the items you actually need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
