---
qid: ing_dcb496542a__eli5__local
question: 'Explain: says here''s what changed so the rest — The Many Meanings of Event-Driven
  Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 219
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:23:42-05:00'
sources: []
---

Imagine a kitchen where every appliance is a tiny robot that can act only when someone tells it to.  
When you flip the light switch (the **event**), the bulb’s robot instantly turns on—no one had to keep checking its status.  
In software, *event‑driven architecture* works the same way: components listen for signals (“events”) and react right away, instead of constantly polling each other.  

There are several flavors of this idea:

1. **Event sourcing** – every change is stored as an event; you can replay events to rebuild state.  
2. **Command‑query responsibility segregation (CQRS)** – commands generate events that update a read model.  
3. **Reactive streams** – components push data downstream when it arrives, keeping the flow smooth.

Like kitchen robots, each part stays simple and only does what an event asks of it, making systems more flexible, scalable, and easier to understand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
