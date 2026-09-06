---
qid: vq_f17e457a90__think__local
question: What is Either in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 450
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:45:11-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Confirm that “Either” refers to Scala’s standard library type, not a custom implementation.  
   - Assume familiarity with functional‑programming concepts (sum types, algebraic data types).  

**2️⃣ Map it onto a mental model**  
   - Think of `Either` as a *disjoint union* (`Sum`) of two types: `Left[A]` and `Right[B]`.  
   - Remember that by convention, `Right` holds the “successful” value while `Left` carries an error or alternative.  

**3️⃣ Step‑by‑step reasoning toward the answer**  
   1. Identify its definition in the standard library (`sealed trait Either[+A,+B]`).  
   2. Note that it’s *covariant* in both type parameters, enabling flexibility.  
   3. Enumerate constructors: `Left(a)` and `Right(b)`.  
   4. Highlight common operations (`map`, `flatMap`, `fold`, `getOrElse`, etc.) and how they preserve the sum‑type semantics.  
   5. Explain typical use cases (error handling, parsing, early exits).  

**4️⃣ Common traps to avoid**  
   - Mixing up `Either` with `Option`; remember `Either` can hold two distinct types.  
   - Forgetting that `Right` is the *success* branch—many readers mistakenly assume the opposite.  
   - Over‑using pattern matching where higher‑order functions (`map`, `fold`) suffice.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify that the explanation covers definition, type variance, constructors, operations, and idiomatic usage.  
   - When speaking, phrase it as: “`Either` is a sum type with two cases… its main purpose is to represent computations that can produce one of two possible outcomes.”  

This structured approach ensures you capture all essential facets while avoiding common misunderstandings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
