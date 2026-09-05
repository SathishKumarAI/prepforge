---
qid: ing_251d5c9fce__eli5__local
question: 'Explain: Hallucinated memory writes — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 337
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:34:48-05:00'
sources: []
---

Imagine an AI “agent” as a busy chef in a kitchen that must remember recipes (memory) and keep track of what’s on the counter at any moment (state).  
When the chef pulls a recipe from the cookbook, it might sometimes mix up ingredients—adding salt instead of sugar. That mix‑up is like a **hallucinated memory write**: the agent records something in its memory that never actually happened or was wrong.  

In practice, an AI writes to its internal “memory” (a database of facts and past actions) every time it processes new information. If the model’s language prediction is uncertain or misled by noisy data, it can generate a false fact and store it as if it were true. Later, when the agent consults this memory to decide what to do next, it acts on that hallucinated piece of information, just as a chef might season a dish incorrectly because they remembered the wrong ingredient.

**Key terms**

- **Agent**: an AI program that performs tasks and learns from experience.  
- **Memory**: a stored record of facts, observations, or past actions the agent can retrieve later.  
- **State**: the current snapshot of everything the agent is aware of (e.g., which ingredients are on the counter).  

Hallucinated memory writes happen when the agent’s internal “recipe book” contains made‑up entries. They’re dangerous because the agent will treat them like real facts, leading to mistakes—just as a chef following a wrong recipe will produce a bad dish.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
