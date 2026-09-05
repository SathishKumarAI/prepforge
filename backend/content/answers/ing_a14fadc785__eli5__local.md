---
qid: ing_a14fadc785__eli5__local
question: 'Explain: Sizing a Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 234
total_tokens: 395
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:53:41-05:00'
sources: []
---

Imagine you’re packing a suitcase for a trip and want to keep track of what’s inside without having to look at every item each time. A Bloom filter is like that suitcase: it lets you ask “Is this thing in the set?” quickly, but sometimes it might say yes when it isn’t (a false positive).  

To size the suitcase, you decide two things:

1. **How many items** you’ll pack (the expected number of elements, *n*).  
2. **How much room** you can afford for a few “false friends” (the acceptable false‑positive rate, *p*).

The formula works like this: the more items (*n*) you add, the bigger the suitcase must be; the lower the tolerated error (*p*), the larger it gets too. You also choose how many “compartments” to split the suitcase into (hash functions, *k*). With a good size, every lookup is fast and the chance of a wrong yes stays below your chosen threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
