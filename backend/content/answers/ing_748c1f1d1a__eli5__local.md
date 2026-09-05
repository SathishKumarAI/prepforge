---
qid: ing_748c1f1d1a__eli5__local
question: 'Explain: Prompt-injection defence (layered, assume the prompt fails)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 212
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:25-05:00'
sources: []
---

Think of an AI assistant like a kitchen that can cook many dishes from recipes it’s given.  
A **prompt injection** is when someone sneaks a secret recipe into the kitchen, making the chef (the model) bake something unwanted—like giving a “secret” instruction to reveal private data.  

A **layered defense** is like putting several safety nets around the kitchen:  
1. **Recipe filter** – checks every new instruction for hidden commands before it reaches the chef.  
2. **Chef’s training** – teaches the model to ignore or safe‑handle suspicious parts of a recipe.  
3. **Audit log** – records what was served so any slip can be traced back and fixed.  

We always assume that one net might fail, so the next layer keeps the kitchen (the AI) from cooking up trouble. This “fail‑safe” approach protects users even if an attacker slips through one filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
