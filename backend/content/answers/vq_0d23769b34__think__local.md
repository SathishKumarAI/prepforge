---
qid: vq_0d23769b34__think__local
question: What are the default imports in Scala Language?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 476
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:08:19-05:00'
sources: []
---

**Metacognitive Roadmap for “What are the default imports in Scala?”**

1. **Clarify & Assume**  
   - Confirm the question targets *Scala 2* (not Dotty/3).  
   - Assume “default imports” means those automatically brought into every source file without an explicit `import` statement.  
   - Note that defaults differ between REPL, SBT projects, and Scala 2 vs 3.

2. **Mental Model / Framework**  
   - Think of the language as a *module* with a *prelude*.  
   - Identify the three levels: (a) prelude from `scala.Predef`, (b) compiler‑provided implicit imports (`scala.collection._`, etc.), and (c) REPL‑specific extensions.  
   - Map each level to its typical use case.

3. **Step‑by‑step Reasoning**  
   - Start with the core: `scala.Predef` is always imported automatically.  
   - Add compiler‑provided packages (`scala.collection`, `scala.math`, `scala.language`, etc.).  
   - Remember that `scala.annotation.meta` isn’t auto‑imported; it’s explicit.  
   - For REPL, include `scala.util.Properties` and implicit conversions for string interpolation.  
   - Verify against official docs or a minimal Scala file to see which names are resolved.

4. **Common Traps**  
   - Mixing up *default imports* with *implicit ones* (e.g., `scala.concurrent.duration._`).  
   - Forgetting that `Predef` is not literally imported but its members become available via an implicit package object.  
   - Assuming Scala 3’s `scala.*` prelude behaves the same as Scala 2.

5. **Sanity‑Check & Communicate**  
   - Test by compiling a file that uses only a default member (e.g., `println`) and see if it compiles without imports.  
   - Summarize in bullet form: list of packages, explain why each is included, note any differences for REPL or Scala 3.  

Follow this structured walk‑through whenever you need to recall or explain language defaults.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
