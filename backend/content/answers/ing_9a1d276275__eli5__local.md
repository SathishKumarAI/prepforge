---
qid: ing_9a1d276275__eli5__local
question: 'Explain: Trade-offs — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 281
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:42:17-05:00'
sources: []
---

Think of building an AI system like designing a city.  
*Architecture patterns* are the blueprints that decide how streets, buildings, and services connect—just as software patterns decide how data flows, where storage lives, and which parts talk to each other.

The **trade‑offs** are the choices you make when you pick a blueprint:

| Pattern | What it does | Trade‑off |
|---------|--------------|-----------|
| *Monolithic* (everything in one building) | Easy to build and run; all parts share resources. | Hard to grow—adding new features can slow down the whole city. |
| *Microservices* (separate neighborhoods) | Each part runs independently, scales on its own. | More complex traffic rules and coordination between neighbors. |
| *Serverless* (pay‑as‑you‑go utilities) | You only pay for what you use; no need to manage servers. | Less control over timing and performance consistency. |

So, choosing a pattern is like deciding whether your city will grow fast with many independent districts or stay simple but slower to expand. The right choice depends on how much traffic you expect, how quickly you want to add new services, and how much complexity you’re willing to handle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
