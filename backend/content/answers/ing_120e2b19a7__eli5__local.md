---
qid: ing_120e2b19a7__eli5__local
question: 'Explain: Limitations — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 208
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:04:20-05:00'
sources: []
---

Imagine you’re at a party and you want to know if someone is on the guest list without having to look up every name. A Bloom filter is like a quick, one‑way “yes/no” card that says *probably there* or *definitely not*. It’s great because it uses very little memory and checks fast.

But it has two quirks:  
1. **False positives** – the card might say someone is on the list when they’re actually absent (because the same combination of bits can be set by many names).  
2. **No deletions or updates** – once a name’s bits are set, you can’t erase them without rebuilding the whole filter.

So while Bloom filters save space and speed, they trade certainty for possibility of mistakes and lack flexibility to change the list on the fly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
