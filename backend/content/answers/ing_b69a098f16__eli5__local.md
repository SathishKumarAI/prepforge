---
qid: ing_b69a098f16__eli5__local
question: 'Explain: Distributed consensus — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 224
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:25:56-05:00'
sources: []
---

**Distributed consensus** is like a group of friends deciding on a movie when each has their own TV.  
Each friend’s TV (a “node”) can only see its own screen, but they need to agree on the same film so everyone watches together. They send short messages (“votes”) to one another over the internet. If enough friends (a *majority*) say the same movie, the group locks in that choice and all TVs switch to it. If a friend’s TV stops working or gets a different suggestion, the others still stay on the chosen film because they trust the majority’s decision.

*Node*: an independent computer part of the system.  
*Majority*: more than half of the nodes; their agreement is enough to make a decision.  

This simple “movie‑watching” picture shows how distributed systems reach a single, reliable state even when some parts fail or act differently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
