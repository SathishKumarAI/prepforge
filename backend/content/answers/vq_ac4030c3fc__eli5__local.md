---
qid: vq_ac4030c3fc__eli5__local
question: What does mapReduce partitioner do?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 235
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:52-05:00'
sources: []
---

Think of MapReduce as a big library that sorts books for you.  
*The mapper* reads every book and writes a “key‑value” pair, like “(author: Rowling) → (book title).”  
When all the pairs are handed to the reducer, they must be grouped by author so each reducer can assemble one author’s collection.

A **partitioner** is the librarian that decides which shelf (reducer) a key goes on. It takes the key (e.g., “Rowling”) and uses a simple rule—often a hash function—to map it to a number between 0 and *N‑1* (the number of reducers). That number tells MapReduce: “Put this pair on reducer 3.”  

Because every mapper uses the same rule, all pairs with the same key end up on the same reducer, guaranteeing that each author’s books are gathered together. The partitioner keeps the workload balanced while ensuring keys stay together—just like a good librarian keeps related books on the same shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
