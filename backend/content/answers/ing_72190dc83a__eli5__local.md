---
qid: ing_72190dc83a__eli5__local
question: Design a token budget for an agent with a 200k context window. How do you
  allocate it, and how do you enforce it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 206
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:37:08-05:00'
sources: []
---

Imagine the 200‑token window as a backpack that can carry only a certain weight of information. Each word or piece of data is a “weight unit.”  
**Allocate the weight:**  
1. **Core instructions (50 units)** – the main goal and rules the agent must follow.  
2. **Recent context (80 units)** – the last few exchanges that are most relevant.  
3. **Background knowledge (30 units)** – facts or models it can pull in on demand.  
4. **Future plans (20 units)** – a short outline of next steps.  

**Enforce it:**  
Use a sliding‑window counter: before adding new text, sum its weight and the existing weight; if the total exceeds 200, discard the oldest items first until the limit fits. This keeps the backpack full of only what matters right now while respecting the fixed capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
