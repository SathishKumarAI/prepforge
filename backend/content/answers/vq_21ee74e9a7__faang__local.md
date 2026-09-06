---
qid: vq_21ee74e9a7__faang__local
question: What is the difference between unapply and apply, when would you use them?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 595
total_tokens: 834
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:01:34-05:00'
sources: []
---

**Clarify**  
The interview asks about Scala’s `apply`/`unapply` (or similar “apply/unapply” concepts in other languages). We’re expected to explain how these methods work on companion objects and case classes, why they exist, and when each is appropriate.

---

### Approach
1. **Restate the API**: `apply` creates an instance; `unapply` extracts values for pattern matching.  
2. **Show use‑cases**: factory vs. extractor.  
3. **Mention alternatives** (e.g., implicit conversions, lenses).  
4. **Cover complexity and pitfalls**.

---

### Depth
- **`apply`**  
  *Defined on companion objects.*  
  ```scala
  case class User(id:Int,name:String)
  object User { def apply(id:Int) = new User(id,"") } // custom factory
  ```
  Called as `User(1)`—no need for the `new` keyword. It can encapsulate validation or caching.

- **`unapply`**  
  *Defined on companion objects (or any extractor).*  
  ```scala
  object User {
    def unapply(u:User): Option[(Int,String)] = Some((u.id,u.name))
  }
  ```
  Enables pattern matching:
  ```scala
  case User(id, name) => …
  ```
  Returns `Option` (or a custom type) to signal failure.

- **When to use**  
  - Use `apply` for *factory* logic or when you want to hide construction details.  
  - Use `unapply` when the object should be deconstructed in pattern matching, especially for DSLs or parser combinators.

---

### Edge Cases
| Scenario | Issue | Test |
|---|---|---|
| `unapply` returns `None` | Pattern match fails silently | Verify with `case User(_, _) => …` and a fallback case |
| Mutating state in `apply` | Side‑effects break functional guarantees | Ensure idempotence or document side‑effects |

---

### Optimize & Communicate
- **Explain trade‑offs**: `apply` is O(1); `unapply` can be expensive if it parses complex structures.  
- **Narrate reasoning**: “I’d use `apply` to encapsulate construction and validation, while `unapply` lets callers decompose the instance in a concise syntax.”  
- **Show familiarity with Scala conventions** and how they map to design patterns (Factory vs. Extractor).  

This structured answer demonstrates clear problem framing, technical depth, and practical insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
