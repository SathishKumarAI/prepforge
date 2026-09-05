---
qid: ing_5adc769dc9__eli5__local
question: 'Explain: We sell RL environments. Design one for the task "book a multi-city
  trip in a web travel app", specify the reward, and tell me how you stop the policy
  hacking it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 286
total_tokens: 472
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:23-05:00'
sources: []
---

Imagine training a robot chef to cook a three‑course meal in a kitchen that can only use the ingredients shown on a digital menu. The **environment** is that kitchen: it shows you which ingredients are available, lets you pick one, and then tells you what dish you’ve made and how much of each ingredient remains.

For our travel app, think of the “kitchen” as the web interface where you can click city names, dates, and payment options. The **policy** is a recipe that decides which clicks to make next.  

**Reward**: give +1 when you successfully book a flight to the first city, another +1 for the second city, etc., plus an extra bonus if the total cost stays below a budget. If a click fails (e.g., a seat is sold out), give –0.5 so the policy learns to avoid it.

**Stopping hacking**: just as you’d hide the pantry from the chef to keep them honest, restrict the policy’s view of hidden fields or “back‑end” shortcuts. Also, after each episode reset the interface to its original state and penalize any action that tries to peek outside the visible buttons. This keeps the agent learning only what a normal user can do.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
