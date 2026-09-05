---
qid: ing_a0247b8269__eli5__local
question: Walk me through the core agent loop. What are the components and stop conditions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 233
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:27-05:00'
sources: []
---

Imagine a robot chef who must cook a dish every day.  
**Core loop**:  

1. **Observe** – the chef looks around the kitchen (gets sensor data).  
2. **Decide** – based on what he sees and his recipe book, he chooses the next action (plan or policy).  
3. **Act** – he reaches for an ingredient, stirs, turns on the stove (executes the action).  
4. **Learn** – after tasting the dish, he notes whether it’s good or bad and updates his recipe book for next time.

The loop repeats until a *stop condition* is met:  
- The dish is finished (goal reached).  
- Time runs out or resources run low (budget exhausted).  
- An error happens that stops cooking (fatal fault).

So, the agent’s core loop is observe → decide → act → learn, repeating until one of those natural “end‑of‑cook” conditions signals it to stop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
