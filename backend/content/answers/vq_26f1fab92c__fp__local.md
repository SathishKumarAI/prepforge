---
qid: vq_26f1fab92c__fp__local
question: What is inheritance in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 343
total_tokens: 508
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:27:27-05:00'
sources: []
---

Inheritance in Python is the mechanism that lets one class (the *subclass*) automatically acquire the attributes and behaviors of another (the *super‑class*).  
At its core it solves a **composition vs. duplication** dilemma: if several objects share common code, you either copy that code into each object or factor it out into a shared entity. Inheritance formalises the latter by letting the subclass “extend” the super‑class’s interface while keeping a single source of truth.

Why must it work this way?  
1. **Identity preservation** – an instance still belongs to its concrete type; methods are resolved via the *Method Resolution Order* (MRO), which is essentially a linearised inheritance graph guaranteeing deterministic dispatch.  
2. **Polymorphic contracts** – a function that accepts a super‑class can operate on any subclass, because each subclass guarantees at least the contract of the super‑class. This is an instance of the *Liskov Substitution Principle* in action.

A non‑obvious insight: inheritance is not just “copy‑paste” of code; it is a *data‑flow* optimisation. When a subclass overrides a method, Python creates a new slot only for that override; otherwise it reuses the super‑class’s implementation. Thus memory and lookup cost stay minimal while allowing flexible specialization.

In short, inheritance is Python’s disciplined way to express “is‑a” relationships that preserve substitution, optimise reuse, and keep runtime efficient through MRO and slot sharing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
