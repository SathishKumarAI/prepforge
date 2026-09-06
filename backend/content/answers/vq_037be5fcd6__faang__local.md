---
qid: vq_037be5fcd6__faang__local
question: What is the difference between a normal class and a case class in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 541
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:55:26-05:00'
sources: []
---

**Clarify**  
You’re asking how a *normal* (regular) Scala `class` differs from a `case class`.  
Assumptions: the audience knows basic OOP, but not necessarily Scala’s case‑class semantics.

**Approach**  
1. List core distinctions (constructors, immutability, auto‑generated methods).  
2. Explain why each matters in data‑engineering pipelines.  
3. Provide a concise example and note performance/serialization quirks.

**Depth**  

| Feature | Normal `class` | `case class` |
|---------|----------------|--------------|
| **Primary constructor** | User‑declared; no defaults unless provided | Implicitly public, parameters become *val* fields (unless marked `var`) |
| **Immutability** | Mutable by default | Immutable by default (fields are vals) |
| **`equals` / `hashCode`** | Inherited from `AnyRef`; reference‑based | Structural equality: compares field values |
| **`toString`** | Generic (`ClassName@hash`) | Descriptive (`CaseClass(field1, field2)`) |
| **Copying** | No built‑in copy; need manual method | `copy()` auto‑generated for cloning with modifications |
| **Pattern matching** | Requires custom extractor or manual `unapply` | Built‑in extractor: pattern match on fields |
| **Serialization (e.g., Kryo, Avro)** | Needs explicit serializer | Often easier to serialize due to stable API |

In data pipelines, case classes are preferred for schema objects (rows, events) because their immutability and structural equality make reasoning about transformations safe. They also integrate nicely with Spark’s Dataset API, enabling compile‑time type safety.

**Edge Cases**  
- **Mutable fields** (`var`) in a case class break the contract; avoid them.  
- **Large case classes** can inflate `hashCode`/`equals` cost; consider using value objects or tuples.  
- **Serialization bugs**: default Java serialization is heavy; use specialized encoders.

**Optimize & Communicate**  
If performance is critical, profile `hashCode` and pattern‑matching overhead. For very large schemas, switch to a *plain* class with custom equality or use a library like Circe for JSON handling.  
Explain that the decision hinges on whether you need structural comparison, immutability, and concise boilerplate—core traits of case classes that simplify ETL codebases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
