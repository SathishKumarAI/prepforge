---
qid: ing_cd3a5385fd__fp__local
question: 'Explain: Signatures: Describing the Task — Dspy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 405
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:16:41-05:00'
sources: []
---

**Signatures: Describing the Task — dspy**

When a large language model (LLM) is asked to *solve* something, we are really asking it to perform a **function call** whose semantics we have not yet formalised.  
A *signature* in DS‑Py is that function’s type annotation, written as a lightweight class:

```python
class Email( dspy.Signature ):
    subject   = dspy.InputField()
    body      = dspy.OutputField()
```

From first principles this is nothing more than **parameterised data flow**.  
The LLM receives an *input field* (the prompt), emits an *output field*, and the signature guarantees that the output will match a specified structure.  

Why must it be explicit?  
1. **Optimization** – The LLM can be fine‑tuned to minimise loss on `OutputField`s while respecting constraints on `InputField`s, turning inference into a constrained optimisation problem.  
2. **Information theory** – By declaring the output schema we reduce entropy: the model’s search space collapses from arbitrary tokens to those that satisfy the type, improving precision.  
3. **Geometry** – In embedding space, each field defines a sub‑manifold; the signature enforces that inference trajectories stay on these manifolds, giving better generalisation.

A non‑obvious insight: *signatures act as a contract between the LLM and downstream systems*. Because they are first‑class objects, we can compose them, nest them, or even treat them as hyperparameters for meta‑learning. This turns prompt engineering into a declarative programming problem rather than ad‑hoc string manipulation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
