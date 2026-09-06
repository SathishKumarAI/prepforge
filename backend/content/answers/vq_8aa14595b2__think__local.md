---
qid: vq_8aa14595b2__think__local
question: What are Left and Right in Scala? Explain Either/Left/Right Design Pattern
  in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 545
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:59:59-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - *What is being asked?* We need to explain the concepts of `Either`, `Left`, and `Right` in Scala, focusing on how they are used as a design pattern for error handling or result representation.  
   - *Assumptions:* The audience knows basic Scala syntax but may not be familiar with functional‑style error handling. Assume no external libraries (e.g., cats) unless noted.

**2. Adopt the “functional error‑handling” mental model**  
   - Think of `Either[A, B]` as a tagged union: it holds either an *error* (`Left`) or a *successful value* (`Right`).  
   - Relate it to algebraic data types (ADTs) and pattern matching, which are core Scala features.

**3. Step‑by‑step reasoning**  
   1. Define the type alias `Either[+L, +R]` and its two case classes: `Left[L](value: L)` and `Right[R](value: R)`.  
   2. Show how to construct each (`Left("oops")`, `Right(42)`).  
   3. Explain the common operations (`map`, `flatMap`, `getOrElse`) that treat `Right` as “success” and propagate `Left` unchanged.  
   4. Contrast with `Try`, `Option`, or exception‑based error handling to highlight why `Either` is preferable in functional code.  
   5. Provide a short example: parsing an integer from a string, returning `Right(value)` on success or `Left(errorMsg)` otherwise.

**4. Common traps to avoid**  
   - Mixing up the type parameters (`Either[L, R]` vs. `Either[R, L]`).  
   - Forgetting that `Either` is right‑biased in Scala 2.13+; earlier versions required explicit `.fold`.  
   - Using `Either` for side effects instead of pure computations.

**5. Sanity‑check & verbalize**  
   - Verify the example compiles and behaves as expected (`Right(10)` vs. `Left("invalid")`).  
   - Summarize: *“In Scala, `Either` is a functional way to represent two mutually exclusive outcomes; `Right` signals success, `Left` signals failure. By chaining operations with `map/flatMap`, we can propagate errors cleanly without exceptions.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
