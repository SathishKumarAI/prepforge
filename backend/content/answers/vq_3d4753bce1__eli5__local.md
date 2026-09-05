---
qid: vq_3d4753bce1__eli5__local
question: How many public class files are possible to define in Scala source file?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 275
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:08:52-05:00'
sources: []
---

In Scala a single source file can contain many `class`, `trait`, or `object` definitions, just like in Java.  
The rule that matters is about **visibility** at the top level:

*You may write as many classes as you want in one file, but only one of them can be *public* (i.e., accessible from other packages) and it must have the same name as the file.*  

All the others are package‑private by default.  
So if your file is called `Worker.scala`, you could write

```scala
class Worker   // public, matches file name
class Helper   // package‑private
object Util    // package‑private
```

But you cannot have two public top‑level classes in the same file—doing so would cause a compilation error.  
Think of it like a book: you can include many chapters (classes), but only one chapter can be titled exactly as the book’s title and still be publicly referenced by that name.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
