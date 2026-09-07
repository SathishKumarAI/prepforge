---
qid: vq_de3db2208a__faang__local
question: what is companion object in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:38:44-05:00'
sources: []
---

**Clarify**  
You’re asking about *Scala’s `object` that sits next to a class and shares its name* – the **companion object**.  
Assumptions: you know basic Scala syntax, single‑file vs multi‑file definitions, and that the question targets language features rather than runtime behavior.

**Approach**  
Explain the definition, scope rules, why it’s useful (factory methods, implicits), and how it differs from a regular object or a class companion. Then give an example.

**Depth**  

```scala
class Person(val name: String)

object Person {            // companion object
  def apply(name: String) = new Person(name)   // factory
  implicit val ordering: Ordering[Person] =
    Ordering.by(_.name)
}
```

* **Same source file or same package** – the class and its companion share access to each other’s *private* members.  
* They are compiled into separate static classes (`Person.class` and `Person$.class`).  
* The object can contain factory methods (`apply`, `unapply`), constants, implicits, or any helper logic that logically belongs with the type but doesn’t need an instance.  
* Because they share a name, you refer to the class as `new Person(...)` and the object as `Person.apply(...)`.

**Edge Cases**  

| Situation | What breaks? | Test |
|-----------|--------------|------|
| Two files in different packages | Compiler error: “duplicate definition” | Compile with same package names |
| Class without companion | No static helpers; cannot access private members of class | Verify access in object fails |

**Optimize & Communicate**  
Highlight that the companion pattern lets you keep related code together while preserving encapsulation. Mention alternatives (traits, separate utilities) and why a companion is preferred for factory logic or implicit instances. Conclude: *A companion object is Scala’s idiomatic way to bundle static behavior with a class without exposing it as a regular instance.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
