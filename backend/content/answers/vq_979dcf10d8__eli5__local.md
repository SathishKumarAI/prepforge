---
qid: vq_979dcf10d8__eli5__local
question: What is “Type Inference” in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 239
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:07-05:00'
sources: []
---

Imagine you’re baking cookies and your recipe book says “add *something* that tastes sweet.” You don’t have to write down the exact ingredient—your brain infers it from context (maybe sugar). In Scala, **type inference** works like that: when you write code, you usually give a variable a type (e.g., `Int`, `String`). But if you let the compiler see how you use the variable, it can *infer* what type it should be and you don’t have to spell it out.

For example:

```scala
val x = 42        // compiler sees an integer literal → x is Int
val y = "hi"      // compiler sees a string literal → y is String
```

Here, the compiler automatically deduces `x` is an `Int` and `y` is a `String`. This saves you from writing extra type annotations while keeping your code safe. The “type” is simply the kind of data (numbers, text, etc.) that a variable can hold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
