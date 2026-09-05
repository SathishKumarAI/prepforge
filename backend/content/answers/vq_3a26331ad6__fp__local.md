---
qid: vq_3a26331ad6__fp__local
question: What is the difference between == in Java and Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 418
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:31:25-05:00'
sources: []
---

In Java and Scala the `==` operator is not a single primitive comparison; it’s an *overloadable* syntactic sugar that ultimately delegates to either reference equality (`Object.equals`) or structural equality defined by the type.  

**Java**:  
```java
a == b
```
is always *reference* equality for objects and *value* equality for primitives. The compiler never rewrites it; the bytecode invokes `if_acmpne`/`if_icmpeq`. To compare object contents you must explicitly call `equals()`. This separation follows Java’s **object‑identity principle**: an object’s identity is its memory address, and mutability makes implicit value checks unsafe.

**Scala**:  
```scala
a == b
```
is a method on `Any`, defined as:
```scala
def ==(that: Any): Boolean = (this eq that) || (this != null && this.equals(that))
```
Thus it first tests *reference* equality (`eq`) and falls back to the overridden `equals`. Scala’s design stems from **type‑safety by default**; it treats `==` as “structural equality” so most code can compare values without boilerplate, while still preserving identity semantics for reference types.

### Non‑obvious insight  
The subtle difference lies in *when* null is considered equal: Java’s `==` treats two `null`s as equal (reference equality), whereas Scala’s `==` also considers them equal but only after the `eq` check. Consequently, a `null == null` in Scala invokes `equals` on `null`, which is safe because the implementation handles it; in Java you never invoke `equals` on `null`. This design choice prevents accidental `NullPointerException`s when using `==` for value comparison—an optimization that reflects Scala’s commitment to safer defaults.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
