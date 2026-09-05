---
qid: vq_10ee9f5611__eli5__local
question: What is yield in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 213
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:58-05:00'
sources: []
---

In Scala, **`yield`** is the word that lets you build a new collection from an existing one, just like a chef taking ingredients and turning them into a finished dish.

Imagine you have a basket of apples (a `List`). You want to make a fruit‑salad list where each apple is sliced. In Scala you write:

```scala
val slices = for (apple <- apples) yield apple.slice(0, 3)
```

Here the `for` part says *“take every apple”*, and the `yield` part says *“put the result of this expression into a new list.”* The type of the new collection matches the original (`List[String]` if you sliced strings). So, **yield** is simply the instruction that collects all the results of the loop into a fresh collection. It’s like the chef plating each slice on a new plate, ready to serve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
