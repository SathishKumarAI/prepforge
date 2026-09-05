---
qid: ing_1936c6d610__eli5__local
question: 'Explain: The synchrony assumptions of Redlock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 245
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:16:04-05:00'
sources: []
---

Imagine a group of friends each holding a different piece of a treasure map. They all want to add a new clue, but only one can write on the map at a time—otherwise the whole team gets confused. **Distributed locking** is like a “hand‑shake” rule that lets just one friend touch the map while everyone else waits.

Redlock does this across many computers (think of each computer as a different friend). Each computer runs its own lock server, and they all agree on a secret key (the treasure’s name). When someone wants to write, it asks *all* servers for permission. If most servers say “yes” within a short window, the writer gets the lock; if not, it backs off and tries again later.

The **synchrony assumptions** are simple:  
- All clocks must stay roughly in sync (so everyone knows when a lock expires).  
- Network messages can be delayed but will eventually arrive.  

If these hold, Redlock ensures that even in a messy network, only one writer touches the map at once, keeping the shared data consistent and safe.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
