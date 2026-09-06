---
qid: vq_a7337a984b__faang__local
question: What is the use of ‘???’ in Scala-based Applications?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 488
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:39-05:00'
sources: []
---

**Use of `???` in Scala‑based applications**

---

### 1️⃣ Clarify  
The interviewer asks: *“What is the purpose of the literal `???` that often appears in Scala code?”*  
Assumptions:  
- The context is a production or prototype Scala project.  
- We’re not dealing with external libraries; it’s a language feature.

---

### 2️⃣ Approach  
Explain that `???` is a *syntactic placeholder* supplied by the standard library, then illustrate typical use‑cases and pitfalls.

---

### 3️⃣ Depth  
- **Definition**: `???` is an alias for `scala.Predef.???`, which throws a `NotImplementedError`.  
- **Typical uses**:  
  - Stub out methods during early development or while writing tests (`def foo(): Int = ???`).  
  - Mark abstract members in concrete classes that will be overridden later.  
  - Provide quick “to‑do” markers for code generation tools.  
- **Behavior**: Executing the placeholder immediately raises an exception; it never returns normally, making failures obvious during runtime or tests.  
- **Trade‑offs**:  
  - *Pros*: Clear intent, compiler‑level reminder, no silent failure.  
  - *Cons*: If left in production code, any call will crash the application.

---

### 4️⃣ Edge Cases  
- Calling `???` inside a constructor can abort object creation before state is established.  
- In lazy vals or default arguments, `???` might be evaluated only when accessed, delaying failure.  
- Unit tests should assert that calling such stubs throws `NotImplementedError`.

---

### 5️⃣ Optimize & Communicate  
When refactoring, replace `???` with either a proper implementation or an abstract method if the class is meant to be extended. In production code, never ship a stub; use traits/interfaces and let subclasses provide concrete logic.

**TL;DR**: `???` is a quick “I’ll implement this later” marker that throws `NotImplementedError`. It’s useful for scaffolding but must be removed before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
