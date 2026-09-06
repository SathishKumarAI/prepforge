---
qid: vq_a7337a984b__think__local
question: What is the use of ‘???’ in Scala-based Applications?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 449
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:09:01-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
   - Confirm that “???” refers to the Scala `scala.Predef.???` placeholder used during development, not a wildcard operator or SQL syntax.  
   - Assume the audience is familiar with basic Scala but may not know the purpose of `???`.  

**2️⃣ Adopt a mental model: “Feature‑flagged stubs”**  
   - Think of `???` as a *compile‑time stub* that signals unfinished code, analogous to `TODO` in other languages.  

**3️⃣ Step‑by‑step reasoning**  
   1. Locate the definition: `def ??? : Nothing = throw new NotImplementedError`.  
   2. Note its return type (`Nothing`) forces any use to be unreachable at runtime unless overridden.  
   3. Explain how it compiles but throws an exception if executed, making it safe for testing partial implementations.  
   4. Mention common usage patterns: stubbing out methods during refactor, temporarily disabling features, or marking future work in code reviews.  

**4️⃣ Common traps to avoid**  
   - Don’t confuse `???` with the SQL `NULL` placeholder.  
   - Avoid leaving `???` in production code; it will crash if called.  
   - Remember that IDEs may flag its usage as a warning or error depending on settings.  

**5️⃣ Sanity‑check & verbalize**  
   - Verify by compiling a small snippet: `def foo = ???`. The compiler accepts it, but running `foo` throws `NotImplementedError`.  
   - Explain to the audience that this pattern is a lightweight, type‑safe “todo” that helps developers track unfinished work without breaking the build.  

*Wrap up*: In Scala‑based applications, `???` serves as a compile‑time placeholder for incomplete code, providing a safe, explicit marker that compiles but fails at runtime if invoked, aiding incremental development and refactoring.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
