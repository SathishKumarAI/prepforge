---
qid: vq_f17e457a90__faang__local
question: What is Either in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 536
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:42:03-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is `Either` in Scala?”*  
Assume they want a concise explanation of the type, its purpose, and typical use‑cases in data‑engineering pipelines (error handling, validation).

---

**Approach**  
1. Define the algebraic data type (`Left | Right`).  
2. Explain semantics: `Right` = success, `Left` = error/alternative value.  
3. Show how it replaces exceptions or nullable returns.  
4. Mention common methods (`map`, `flatMap`, `fold`, etc.).  
5. Relate to real‑world data‑engineering problems (parsing CSV, schema validation).

---

**Depth**  

```scala
sealed trait Either[+L,+R]
case class Left[L](value: L) extends Either[L,Nothing]
case class Right[R](value: R) extends Either[Nothing,R]
```

- **Immutability & type safety**: `Either` is a pure functional container; no side‑effects.  
- **Error handling**: Use `Left(error)` to carry failure details (e.g., `ValidationError`).  
- **Composable**: Supports monadic operations (`flatMap`) so pipelines can chain transformations without explicit try/catch.  
- **Pattern matching**: Enables exhaustive case analysis, guaranteeing all branches handled.

Typical pattern:

```scala
def parseInt(s: String): Either[String, Int] =
  if (s.matches("""-?\d+""")) Right(s.toInt)
  else Left(s"Invalid integer: $s")
```

---

**Edge Cases**  

| Scenario | What to test |
|----------|--------------|
| Empty input | `Left` with message |
| Overflow numbers | `Right` after safe conversion |
| Nested Eithers | Flattening with `.flatten` or monad comprehensions |

---

**Optimize & Communicate**  
- Prefer `Either[Throwable, A]` when propagating exceptions.  
- Use `ValidatedNel` (Cats) for accumulating multiple errors in batch jobs.  
- Explain that while `Either` is great for single‑path error handling, it can be verbose; libraries like *cats* provide syntactic sugar (`eitherT`).  

Conclude: *“In data engineering, `Either` lets us build robust ETL pipelines where each step explicitly returns success or a rich error, enabling composable, testable, and side‑effect‑free code.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
