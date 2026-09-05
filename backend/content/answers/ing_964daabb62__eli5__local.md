---
qid: ing_964daabb62__eli5__local
question: 'Explain: Recreate — Kubernetes Deployment Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 183
total_tokens: 339
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:01-05:00'
sources: []
---

**Recreate strategy (Kubernetes)**  
Imagine a bakery that makes a new batch of cookies every day. With the *recreate* strategy, the bakery first stops baking the old batch entirely—no more fresh cookies are made from it. Only after all ovens and workers are shut down does the bakery start cooking the new batch. In Kubernetes terms, when you update a Deployment with this strategy, **every running pod is terminated before any new pod is created**. This guarantees that at no point do two versions of your application run together, but it also means there’s a brief period when nothing is available. It’s like pressing “reset” on a machine: everything goes down first, then everything comes back up with the new configuration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
