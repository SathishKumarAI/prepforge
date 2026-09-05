---
qid: ing_5f5ab24c92__eli5__local
question: 'Explain: Example: Orchestration-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 224
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:07:47-05:00'
sources: []
---

Think of a long‑term recipe that must finish successfully, even if some steps fail and need to be undone.  
In software, an **orchestration‑based saga** is like a master chef who keeps a list of every cooking step (a *transaction*) and knows exactly how to reverse it if something goes wrong. The chef (the orchestrator) sends instructions to each kitchen station, waits for the result, and either moves on or triggers a “rollback” sequence that undoes all prior steps in reverse order.  

*Transaction*: a single, atomic action that must be either fully completed or not applied at all.  
*Rollback*: the complementary action that restores the previous state when a later transaction fails.  

The saga pattern guarantees consistency across many services without locking everything together, just as the chef ensures a meal is finished correctly even if one ingredient goes missing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
