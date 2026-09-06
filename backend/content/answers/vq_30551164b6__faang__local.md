---
qid: vq_30551164b6__faang__local
question: What is the super class of all classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 410
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:46-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is the superclass of all classes in Scala?”*  
Assumptions:  
- We’re dealing with plain Scala (not Java interop nuances).  
- The answer should reference Scala’s type hierarchy, not the JVM root `java.lang.Object`.

**Approach**  
1. Recall Scala’s core trait hierarchy.  
2. Identify the top‑level trait that every class mixes in automatically.  
3. Mention the role of `Any` and its subclasses.

**Depth**  
In Scala, the ultimate ancestor for every value is the *type* `Any`.  
- **`Any`** is a *sealed* type with two direct subclasses:  
  - `AnyVal` (value types: primitives + case classes)  
  - `AnyRef` (reference types: all objects).  
Every class you define inherits from `Any`, implicitly mixing in the trait `Product` if it’s a case class, but at the very top the common ancestor is **`Any`**.  
Thus, *the superclass of every Scala class is `Any`* (and for reference classes, `AnyRef` sits just below).

**Edge Cases**  
- Java primitive wrappers (`java.lang.Integer`, etc.) still extend `AnyVal`.  
- Scala objects (`object`) are instances of singleton types but still inherit from `Any`.  
- If you mix in traits that override `equals`, `hashCode`, or `toString`, the underlying superclass remains unchanged.

**Optimize & Communicate**  
Explain succinctly: “All Scala classes ultimately extend `Any`; reference classes descend to `AnyRef` and value classes to `AnyVal`.”  
This shows you know both the high‑level answer and the subtle distinctions, satisfying FAANG interviewers’ focus on structure, depth, and clarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
