---
qid: ing_770e9e9c0b__eli5__local
question: 'Explain: Replication lag — Data replication explained: types, examples
  & use cases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 256
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:45:10-05:00'
sources: []
---

Think of a library that keeps a copy of every book it receives. When the original book arrives, the librarian first checks it, then writes down its title and location on a card, and only after that does she give a second copy to another branch. If the second branch is far away, there’s a short pause between when the original is logged and when the new copy appears—this pause is **replication lag**.

In databases, data moves from a primary server (the “original”) to one or more secondary servers (the copies). The lag can be *instant* (near‑zero delay) if the network is fast and the change is small, or it can grow when many large updates travel across slow links.  

Typical use cases:  
- **Read‑heavy applications** keep a lagging copy so users can read without slowing down writes on the main server.  
- **Disaster recovery** uses a lagged replica that’s kept up‑to‑date enough to take over quickly if the primary fails.

Understanding and monitoring this lag helps engineers balance speed, consistency, and reliability in real systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
