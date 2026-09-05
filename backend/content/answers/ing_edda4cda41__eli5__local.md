---
qid: ing_edda4cda41__eli5__local
question: 'Explain: CP - consistency and partition tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 233
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:51-05:00'
sources: []
---

Think of a library that keeps a digital catalog of every book.  
**Consistency (C)** means that whenever you look up a title, everyone sees the same exact information—whether it’s “available” or “checked out.”  
**Partition tolerance (P)** is the library’s ability to keep working even if part of its network goes down, like a power outage in one wing.  

When the system faces a **partition** (the network splits), you must choose between keeping everyone perfectly synchronized (C) or allowing the library to keep running for those who can still connect (P). A CP system says: “If we lose part of our network, we’ll still show the same catalog everywhere; if that means some users have to wait for a fix, so be it.” It sacrifices the ability to keep every user online during a split in favor of never showing contradictory data. In short, CP = *Consistency + Partition tolerance*, giving up “Availability” when the network breaks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
