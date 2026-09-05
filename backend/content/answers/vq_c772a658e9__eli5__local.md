---
qid: vq_c772a658e9__eli5__local
question: What are scala variables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 230
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:27:22-05:00'
sources: []
---

Think of a Scala variable as a labeled jar in your kitchen pantry. The label (the *name*) tells you what’s inside, and the jar’s capacity (its *type*, like `Int` or `String`) says what kind of food it can hold. When you write

```scala
val age: Int = 30
```

you’re putting a fixed amount of dough—30 pieces of fruit—in that jar. The word **`val`** means the jar’s contents can’t be changed later; it’s *immutable* (unchangeable). If you use **`var`**

```scala
var count: Int = 10
```

the jar is a reusable container; you can pour in more or take some out, so its value may change over time. In Scala, variables are just these labeled jars that hold data of a specific type, and the `val`/`var` keyword tells whether the jar’s contents can be altered after it’s first filled.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
