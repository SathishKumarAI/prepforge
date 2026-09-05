---
qid: vq_840dc6e92d__fp__local
question: What is the difference between Function and Method in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 456
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:44:03-05:00'
sources: []
---

**Why the distinction matters**

In Scala every piece of executable code lives inside a *value*—a function or a method.  
A **method** is syntactic sugar for an *inline* operation that belongs to a specific type; it can’t exist without an instance, and its name becomes part of the object’s API. A **function**, by contrast, is a first‑class value: it is an object (an instance of `FunctionN`) that can be passed around, stored in collections, or composed with other functions.

**Fundamental difference**

|                     | Method                                 | Function                               |
|---------------------|----------------------------------------|----------------------------------------|
| Declaration         | `def foo(x: Int): Int = x + 1`          | `val f: Int => Int = (x) => x + 1`      |
| Type                | Part of the class/trait’s type signature | An object of a function‑type (`FunctionN`) |
| Invocation syntax   | `obj.foo(3)`                           | `f(3)`                                 |
| First‑class          | No – can’t be passed directly           | Yes – can be assigned, returned, composed |

**Why it must work this way**

- *Methods* are bound to the object’s *receiver*, enabling polymorphism and overloading. They are resolved at compile time (or via virtual dispatch), giving efficient in‑line calls.
- *Functions* are immutable objects; they capture their environment (closures) and can be freely composed (`andThen`, `compose`). Treating them as values aligns with functional programming’s emphasis on higher‑order abstractions.

**Non‑obvious insight**

A method **implicitly becomes a function** when you use the placeholder syntax (`obj.foo _`). This conversion is not just syntactic sugar—it creates a *new* object that closes over `obj`. Thus, calling `obj.foo` repeatedly yields different results if `foo` mutates state, whereas `obj.foo _` captures the current state once. Understanding this subtlety prevents surprising bugs when mixing methods and functions in higher‑order APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
