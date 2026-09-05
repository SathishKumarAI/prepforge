---
qid: vq_9ee254140b__fp__local
question: What is default access modifier in Scala? Does Scala have “public” keyword?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 346
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:48:46-05:00'
sources: []
---

In Scala, the **default access level** for a member (field, method, or nested type) is *public* in the sense that it is visible to any code that can see the containing class or object—there is no explicit keyword needed.  
This design follows the principle of *least astonishment*: most languages expose members publicly unless you explicitly hide them; Scala keeps that convention but makes the syntax leaner.

### Why “public” isn’t a keyword
Scala’s type system already distinguishes between *accessible* and *inaccessible* through visibility modifiers (`private`, `protected`) and package‑local scopes (`private[foo]`).  
Adding a separate `public` keyword would be redundant: if no modifier is present, the member is automatically public. The compiler internally treats an absent modifier as “public” rather than generating a distinct token.

### A subtle point
Because Scala allows *package‑private* and *protected* modifiers that can reference arbitrary packages or classes (`private[scala]`, `protected[foo]`), the notion of “public” is not binary. A member without any qualifier is public to its package and all subpackages, but it may still be hidden by a more specific modifier on an enclosing class. This subtlety is often overlooked when comparing Scala’s visibility rules to Java’s stricter `public/protected/private` triad.

In short: **Scala has no `public` keyword; the absence of any access modifier means “public” by default, aligning with its concise syntax and rich, fine‑grained visibility system.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
