---
qid: vq_6441b0dd27__faang__local
question: What do you understand by apply and unapply methods in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 496
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:13:38-05:00'
sources: []
---

**Clarify**  
> “Apply” and “unapply” are companion object methods in Scala that enable instance creation and pattern matching, respectively.  
> *Assumptions to confirm:* we’re dealing with case classes or custom objects, not just primitive types; the interview expects explanation of their signatures and typical use‑cases.

**Approach**  
1. Define `apply` – factory method.  
2. Define `unapply` – extractor for pattern matching.  
3. Show examples: a simple class vs a case class.  
4. Discuss compiler‑generated versions for case classes.  
5. Touch on return types (`Option`, tuple, boolean).  

**Depth**  
- **`apply`**  
  ```scala
  object Person { def apply(name:String, age:Int) = new Person(name,age) }
  ```
  Invoked as `Person("Alice",30)`; syntactic sugar for `new`. It can hide construction logic (e.g., validation).  
- **`unapply`**  
  ```scala
  object Person {
    def unapply(p:Person): Option[(String,Int)] =
      Some((p.name,p.age))
  }
  ```
  Enables pattern matching:
  ```scala
  case Person(n,a) => println(s"$n is $a")
  ```
  Returns `Option` or `Boolean`; if `None`, the match fails. Case classes auto‑generate both: `apply` for construction, `unapply` returning a tuple of fields.

**Edge Cases**  
- `unapply` may return `None` for nulls → pattern matching throws `NullPointerException`.  
- Complex extractors can return nested tuples or custom objects; need to guard against `null` inside.  
- Overloading `apply`/`unapply` with different signatures requires careful naming to avoid ambiguity.

**Optimize & Communicate**  
Explain that using case classes is preferable because the compiler guarantees correct, efficient implementations. Highlight that `apply` can be overloaded for factory patterns (e.g., singleton), and `unapply` can support multi‑field extraction or guard clauses (`case Person(n,a) if a > 18`). Conclude with a concise reminder: *apply = “make it”; unapply = “break it apart for pattern matching.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
