---
qid: ing_b6f4053fd7__eli5__local
question: 'Explain: Example: Choreography-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 224
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:26:26-05:00'
sources: []
---

Imagine a group of dancers performing a long routine where each dancer must finish their step before the next can begin, but no single choreographer tells them what to do—each dancer just watches the others and reacts.  
In a *choreography‑based saga* this is exactly how distributed services coordinate a big transaction.  

- **Saga**: A sequence of local steps (like dance moves) that together accomplish a goal (the full performance).  
- **Choreography**: Every service knows only its own step and what to do if the next one fails; it watches the “music” (messages) from other services instead of asking a central conductor.

If one dancer trips, they perform an *undo* move that reverses all previous steps. Because each dancer follows the same rules, the whole routine still ends gracefully. This pattern keeps the system loosely coupled and resilient, just like dancers who can adapt without needing a single master.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
