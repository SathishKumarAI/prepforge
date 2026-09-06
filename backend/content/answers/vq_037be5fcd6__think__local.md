---
qid: vq_037be5fcd6__think__local
question: What is the difference between a normal class and a case class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 499
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:05:11-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- *“Normal”* means a plain `class` or `trait` defined with `class X(...)`.  
- *Case class* is declared with the keyword `case`.  
- Assume the reader knows basic Scala syntax and has seen both constructs.

**2️⃣ Mental model / framework**

Think of a case class as a *data holder* that automatically gets boiler‑plate: immutability, value equality, convenient constructors, pattern matching support, and useful methods (`copy`, `toString`, etc.).  
A normal class is just a container for state and behavior with no such defaults.

**3️⃣ Step‑by‑step reasoning**

1. **Immutability & constructor params** – case classes expose all parameters as immutable `val`s; normal classes can be mutable or have private fields.  
2. **Equality (`equals` / `hashCode`)** – case classes compare by *structural* value; normal classes use reference equality unless overridden.  
3. **Pattern matching** – case classes get an auto‑generated `unapply`, enabling deconstruction in `match`. Normal classes don’t.  
4. **Convenient methods** – `copy`, `toString`, and companion object apply/constructor are auto‑created for case classes.  
5. **Serialization / reflection** – case classes work well with libraries that rely on the above features; normal classes need explicit support.

**4️⃣ Common traps to avoid**

- Assuming case classes can be mutated (they’re immutable by default).  
- Thinking `case class` is just syntactic sugar for a regular class— it adds *semantic* guarantees.  
- Forgetting that parameters not in the constructor list are ignored by pattern matching.

**5️⃣ Sanity‑check & communicate**

- Verify you can write:  

  ```scala
  case class Person(name:String, age:Int)
  val p = Person("Ada",30)
  p.copy(age=31)          // works
  p match { case Person(n,a)=> … }  // pattern matching
  ```

- Compare with a normal `class Person(...)` and note the missing features.  
- Conclude: *Use a case class when you need an immutable, value‑based data type that participates in pattern matching; otherwise, a plain class suffices.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
