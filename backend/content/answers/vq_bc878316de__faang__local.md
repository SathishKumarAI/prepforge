---
qid: vq_bc878316de__faang__local
question: What is the difference between a trait and an abstract class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 535
total_tokens: 772
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:30:45-05:00'
sources: []
---

**Clarify**  
The interviewer wants to test your grasp of Scala’s type system and how it influences API design.  
Assumptions: we’re speaking about *runtime* behaviour (no macros or compiler tricks), and the goal is to expose when you’d choose one over the other.

**Approach**  
1. Define both constructs in plain terms.  
2. Highlight key semantic differences (inheritance, constructor parameters, initialization order).  
3. Show practical implications with a quick example.  
4. Mention trade‑offs (multiple inheritance vs. single‑inherited abstract class).

**Depth**  

| Feature | Trait | Abstract Class |
|---------|-------|----------------|
| **Inheritance** | Supports *mix‑ins* – an object can extend many traits. | Single inheritance only; a subclass may inherit from one abstract class. |
| **Constructor parameters** | Cannot have constructor arguments (except in Scala 3 with `trait T(arg: Int)`). | Can define primary constructors and require concrete subclasses to supply values. |
| **State & initialization order** | All trait fields are *lazy* until the first mix‑in; they run after superclass constructor. | Initialized during superclass construction, before subclass body. |
| **Abstract methods** | Same as classes – can be abstract or have default implementations. | Same, but you may provide concrete methods that rely on constructor state. |
| **Multiple inheritance** | Allows combining behaviour from several sources. | Not possible; forces a single line of ancestry. |

*Example:*  
```scala
trait Logger { def log(msg: String): Unit = println(msg) }
abstract class Service(val name: String)
class MyService extends Service("X") with Logger {
  // can use `log` and `name`
}
```

**Edge Cases**  
- Mixing traits that declare the same abstract method leads to *diamond* conflicts; Scala resolves by requiring an explicit override.  
- If a trait needs state, you must use abstract vals or lazy vals—otherwise you lose encapsulation.

**Optimize & Communicate**  
Emphasize: choose **traits** when you need composable behaviour without enforcing a class hierarchy; pick **abstract classes** when you need constructor parameters or shared initialization logic. Convey that Scala’s trait system is a powerful alternative to Java’s interfaces, but careful about initialization order and method conflicts. This structured answer showcases clear reasoning, technical depth, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
