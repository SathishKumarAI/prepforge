---
qid: vq_b035f00ea5__faang__local
question: What are case classes in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 438
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:32-05:00'
sources: []
---

**Clarify**  
The interview asks about *case classes* in Scala—why they exist and what benefits they bring compared to regular `class`es. I’ll assume the candidate should explain syntax, immutability, pattern‑matching, and generated methods.

**Approach**  
1. Define a case class syntactically.  
2. Highlight key features (auto‑generated `equals`, `hashCode`, `toString`, copy).  
3. Discuss immutability & default values.  
4. Show pattern matching use.  
5. Touch on companion object and apply/unapply.

**Depth**  

```scala
case class User(id: Int, name: String = "guest")
```

- **Immutability** – fields are `val` by default; no setters.  
- **Boilerplate removed** – the compiler auto‑generates:
  - `equals`, `hashCode`, `toString`
  - `copy(…)` for shallow cloning with field overrides
  - Companion object with an `apply` factory and an `unapply` extractor.
- **Pattern matching** – `case User(id, name) => …` works because of the extractor.  
- **Serialization** – case classes are friendly to libraries like Play JSON or Circe.  

**Edge Cases**  
- Nested mutable collections inside a case class can still mutate state; immutability is shallow.  
- Overriding `toString` breaks pattern‑matching semantics if you change field order.  
- Large number of fields → generated `equals`/`hashCode` may be expensive.

**Optimize & Communicate**  
Explain that using case classes in a data pipeline (e.g., Spark rows) yields concise, type‑safe schemas and enables efficient serialization. Mention trade‑offs: for very large objects you might prefer a plain class to avoid heavy `equals`. Conclude by stressing that case classes are the idiomatic way to model immutable data in Scala’s functional ecosystem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
