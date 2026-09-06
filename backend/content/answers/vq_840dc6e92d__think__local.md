---
qid: vq_840dc6e92d__think__local
question: What is the difference between Function and Method in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 438
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:58:30-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume the reader knows basic Scala syntax (classes, objects, traits).  
- Distinguish *functions* as first‑class values (`() => Int`) from *methods* defined inside a class or trait.  
- Note that both can be called with `()` but methods need an instance unless they’re in an object.

**2️⃣ Mental model / framework**  
- Think of **function** = standalone value, possibly anonymous, stored in a variable, passed around.  
- Think of **method** = part of an object’s interface; it has a receiver (`this`) and participates in overloading/overriding.  
- Map this to the JVM: functions become `scala.FunctionX` objects; methods compile to bytecode instructions.

**3️⃣ Step‑by‑step reasoning**  
1. Identify where the definition lives (top‑level vs. inside class/object).  
2. Check if it can be referenced without an instance (`val f = () => 42`).  
3. Examine whether it can be overridden in subclasses.  
4. Observe how you invoke it: `obj.method()` vs. `f()`.  

**4️⃣ Common traps to avoid**  
- Confusing a *method* with a *function literal* that’s assigned to a val (`val m = obj.method`).  
- Forgetting that methods can have multiple parameter lists, while functions are single‑arity by default.  
- Assuming all `def`s are automatically converted to functions; the conversion is explicit (`obj.method _`).

**5️⃣ Sanity‑check & verbalize**  
Ask: “If I write `val x = new MyClass(); val f = x.myMethod`, what type does `f` have? Can it be overridden later?”  
Explain that `myMethod` is a method; `f` becomes a function value capturing the receiver.  
Reiterate: functions are values, methods belong to types and can participate in polymorphism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
