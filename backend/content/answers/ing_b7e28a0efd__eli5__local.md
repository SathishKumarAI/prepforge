---
qid: ing_b7e28a0efd__eli5__local
question: What is the difference between an outcome reward model and a process reward
  model, and when do you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 216
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:28:48-05:00'
sources: []
---

Imagine training a robot to bake bread.  
*Outcome reward model*: You only look at the final loaf—if it’s golden brown, fluffy, and smells good you give a “yes” score; if it burns or is flat you give a “no.” The robot learns by guessing recipes until the finished product earns a reward.  

*Process reward model*: Instead of waiting for the loaf, you watch every step—mixing flour, kneading dough, letting it rise. For each good action (right temperature, proper knead time) you give a small “thumb‑up.” The robot gets feedback continuously and can correct mistakes before the bread is finished.

Use an outcome model when the goal is a single final result and you don’t care how it’s achieved—like grading a test answer.  
Use a process model when the journey matters, such as safety or quality control, or when the task takes many steps and early feedback speeds learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
