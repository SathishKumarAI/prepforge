---
qid: ing_806d1eb0ff__eli5__local
question: 'Explain: Training an internal assistant — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 225
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:25-05:00'
sources: []
---

Imagine you’re teaching a new robot chef how to cook your favorite dish. First, the chef watches a master cook (the “policy”) and copies every move—this is *on‑policy* because the chef only learns from what it actually does. Next, instead of memorizing each step, the chef writes down simple notes that capture the essence of the master’s technique; this note‑taking is called *distillation*. The robot then practices using those notes alone, refining its own style while still staying true to the master’s original recipe.

In machine learning, on‑policy distillation does exactly that: an assistant learns from a powerful “teacher” model by observing its own actions (on‑policy) and then compresses that knowledge into a smaller, faster model. The result is a lean assistant that behaves like the teacher but runs quickly and efficiently—just as your robot chef can cook just as well with fewer ingredients in its pantry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
