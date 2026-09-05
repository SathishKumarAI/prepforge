---
qid: vq_73bdb46ea1__fp__local
question: In Python, how are arguments delivered by value or reference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 370
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:58-05:00'
sources: []
---

**Python’s “pass‑by‑object‑reference”**

When a function is called, the *name* that appears on the left of the assignment (`f(x)`) is bound to the *object* that already exists in the caller’s namespace. The call does **not** copy the object; it merely creates a new reference pointing to the same memory location.

- **Immutable objects (int, str, tuple)**: any “modification” inside the function must create a brand‑new object, so the original remains untouched. From an information‑theoretic view, the function receives a *fixed* value that cannot be altered without producing a new representation.

- **Mutable objects (list, dict, custom classes)**: the reference points to a container whose internal state can change. Mutating it inside the function changes the shared object’s contents, which is why side‑effects occur. This reflects the principle of *in‑place optimization*: altering the existing structure avoids unnecessary copying and preserves referential transparency only when explicitly required.

**Non‑obvious insight:** The distinction between “value” and “reference” in Python is actually a single concept—*object identity*. A function receives an object; whether it can change that object depends on the object's mutability, not on how arguments are passed. Thus, the same passing mechanism works uniformly: the caller’s name remains bound to the same object unless the function rebinds its parameter to a new object (which only changes the local binding). This unification simplifies reasoning about side‑effects and clarifies why seemingly “by value” semantics arise for immutable types.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
