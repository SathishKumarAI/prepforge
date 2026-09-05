---
qid: ing_95883987ae__eli5__local
question: 'Explain: Blue-Green Deployment — Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 220
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:34:43-05:00'
sources: []
---

Imagine you’re a chef who has two identical kitchens on the same floor: Kitchen Blue and Kitchen Green.  
When you want to serve a new dish (a fresh machine‑learning model), you first cook it in Kitchen Green while Kitchen Blue keeps serving the old version to customers. Once the new dish is ready, you simply switch all diners from Blue to Green—no one notices any interruption.  

**Deployment** means putting a software version into production so users can use it.  
In **blue‑green deployment**, the “blue” and “green” represent two separate environments that are identical except for which model they run. You keep both live, test the new model in the idle one, then flip traffic from blue to green. If something goes wrong, you instantly revert by sending traffic back to blue. This keeps service continuous and lets you roll out updates safely.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
