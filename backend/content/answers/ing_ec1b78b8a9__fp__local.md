---
qid: ing_ec1b78b8a9__fp__local
question: 'Explain: A Refresher on Context Engineering — Multi-Agents: What''s Actually
  Working | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 383
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:49-05:00'
sources: []
---

**Why “context” is the engine that powers modern multi‑agent systems**

The core problem any autonomous agent faces is *information bottleneck*: a large LLM can only attend to a few thousand tokens at once, yet solving a task (e.g., planning, reasoning) often requires far more data. The solution is to **inject relevant context**—prior knowledge, intermediate results, or external memory—directly into the prompt so that the model’s internal self‑attention has immediate access to what it needs.

From an optimization point of view, this turns a *global* problem (solve everything in one forward pass) into many *local* subproblems: each agent only optimizes over its slice of context. The overall objective is still the same—maximizing task reward—but the loss landscape becomes far smoother because gradients propagate through shorter chains.

A deeper insight comes from **information theory**. By packaging past interactions as a *context vector*, we effectively perform a lossy compression that preserves mutual information with the target output while discarding irrelevant bits. The agent’s policy is therefore conditioned on a maximally informative representation, which explains why “few‑shot” prompts often outperform exhaustive fine‑tuning.

**Non‑obvious takeaway:**  
The *ordering* of context matters more than its size. Placing the most recent or most task‑relevant tokens at the beginning reduces attention dilution and biases the transformer’s softmax toward useful signals, acting like a learned “attention cue” without changing model weights. This subtle trick is why many high‑performing multi‑agent pipelines shuffle context rather than simply truncating it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
