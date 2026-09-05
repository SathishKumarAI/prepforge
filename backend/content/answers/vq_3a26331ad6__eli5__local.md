---
qid: vq_3a26331ad6__eli5__local
question: What is the difference between == in Java and Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 252
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:36-05:00'
sources: []
---

Think of **==** as a pair of “look‑at‑the‑box” eyes that decide if two things are the same.  

In **Java**, those eyes look at the *memory address* of objects – do they point to the exact same spot? If you write `a == b`, Java checks whether `a` and `b` reference the same object, not whether their contents match. To compare content (e.g., two strings that say “hello”), Java uses `.equals()`.

In **Scala**, the same symbol is overloaded: for primitive types (Int, Double) it behaves like Java’s address check because primitives are values, not objects. For objects, Scala’s `==` automatically calls the object’s `equals` method, so two different instances with identical data will be considered equal. Thus, in Scala you can write `a == b` and get a content comparison without extra syntax.

So: Java’s **==** = same memory spot; Scala’s **==** = same memory spot *or* same value (via equals).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
