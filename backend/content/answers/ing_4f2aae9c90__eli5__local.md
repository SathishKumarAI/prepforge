---
qid: ing_4f2aae9c90__eli5__local
question: 'Explain: Reactive Programming — Top 8 Programming Paradigms'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 248
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:34-05:00'
sources: []
---

**Reactive Programming – a quick guide**

Imagine a kitchen where every ingredient is a *data source* (like a sensor or user input). In **reactive programming**, you set up *observers* that watch those ingredients. Whenever an ingredient changes—say the sugar level rises—the observers automatically “react” by updating the recipe, cooking time, or even notifying the chef. The key idea is *declarative flow*: you declare “if this happens, do that,” and the system takes care of wiring the reactions.

- **Observable**: a stream of values over time (the ingredients).  
- **Observer**: something that reacts to those values (the chef’s actions).  
- **Subscription**: the agreement that lets the observer receive updates.  

Reactive programming is one of the eight main paradigms, alongside imperative, functional, object‑oriented, logic, event‑driven, concurrent, and declarative styles. It shines when you need to handle continuous data (like live sensor feeds) or UI events efficiently and with minimal manual state management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
