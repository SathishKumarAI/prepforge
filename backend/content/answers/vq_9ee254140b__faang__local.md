---
qid: vq_9ee254140b__faang__local
question: What is default access modifier in Scala? Does Scala have “public” keyword?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 450
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:25:23-05:00'
sources: []
---

**Clarify**  
The interviewer asks two things: (1) what the implicit visibility level is for a member defined in Scala, and (2) whether there’s an explicit `public` keyword analogous to Java/C#. I’ll assume we’re talking about top‑level members inside classes/objects.

**Approach**  
I’ll first state Scala’s default modifier, then explain how it maps to the JVM’s access flags. Next, I’ll cover the presence (or absence) of a `public` keyword and why it isn’t needed.

**Depth**  

| Member | Default visibility | JVM flag |
|--------|-------------------|----------|
| **Class / trait / object** | *Public* – accessible from anywhere | `ACC_PUBLIC` |
| **Method / field inside a class/trait/object** | *Public* – visible to any code that can see the containing type | `ACC_PUBLIC` |

Scala deliberately omits an explicit `public` keyword. The language designers decided that “not specifying anything” should mean “public”, matching Java’s convention and keeping the syntax minimal. If you need stricter access, you use:

- `private`: only visible within the enclosing class/trait/object (and its companion object).
- `protected`: visible to subclasses (plus companion objects in Scala 3).
- `package private` (`private[foo]`): visible within a given package or nested scope.

Because every member is public by default, there’s no separate keyword; you simply omit it.

**Edge Cases**  
*Top‑level definitions* (outside any class) are always public. *Nested classes* inherit the visibility of their enclosing context unless otherwise specified. In Scala 3, `private[this]` restricts access to the same instance, but that’s a finer granularity rather than a new keyword.

**Optimize & Communicate**  
I’d finish by summarizing: “Scala defaults to public; no `public` keyword is required.” This demonstrates concise knowledge and clear communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
