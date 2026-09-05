---
qid: vq_65a3d11eaa__fp__local
question: Is Python Object-oriented or Functional Programming?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 392
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:38:14-05:00'
sources: []
---

**Why Python feels both OO and FP**

Python’s core problem is *representing computation*.  
1. **State‑centric modeling** – Objects bundle data with mutating methods; this solves the “encapsulate state” principle of abstraction, giving a clean API for mutable entities (e.g., file handles).  
2. **Stateless transformation** – Functions are first‑class values that can be composed and passed around, enabling declarative pipelines and lazy evaluation (think `map`, `filter`).  

The language implements both because the *trade‑off* between mutation and composability is a fundamental design choice: mutable objects reduce boilerplate for shared state; pure functions simplify reasoning about side effects. Python exposes both paradigms at equal syntactic level, so it’s *multi‑paradigm* rather than strictly OO or FP.

**Deeper insight:**  
Python treats *everything as an object*, yet functions are also objects. This duality means that the boundary between “method” and “function” is merely a convention: you can attach a function to any object (via `types.MethodType`) and it behaves like a method, but without the automatic `self` binding. The pitfall many miss is that mutable default arguments are *shared across calls*, not per‑instance defaults; this subtlety forces developers to choose between safety (`None` sentinel) or mutability. Recognizing this helps avoid hidden bugs in both OO and FP code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
