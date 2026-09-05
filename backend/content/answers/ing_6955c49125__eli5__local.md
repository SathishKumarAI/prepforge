---
qid: ing_6955c49125__eli5__local
question: How to update the distributed counter? — Distributed Counter System Design
  - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 241
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:22:33-05:00'
sources: []
---

**Imagine a group of friends each keeping their own notebook to track how many times they’ve seen a movie.**  
When one friend sees the film, they write “+1” in *their* notebook and send that note to everyone else. Everyone receives the note and adds it to their own tally. Over time, every notebook ends up with the same total because each update is shared.

In this analogy:  
- **Distributed counter** = each friend’s notebook; a copy of the same number spread across many machines.  
- **Update** = writing “+1” (or any change) in one notebook and sending it to all others.  
- **Propagation** = sending that note through the network so every machine learns about the new value.

The system keeps the counter accurate by *broadcasting* every increment (or decrement) to all replicas, just like friends sharing their notes. If a friend misses a note, they can ask for the latest count from anyone else—this ensures eventual consistency even when some messages are delayed or lost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
