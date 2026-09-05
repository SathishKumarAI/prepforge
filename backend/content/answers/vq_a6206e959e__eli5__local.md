---
qid: vq_a6206e959e__eli5__local
question: Difference between terms & types in scala? Nill, NUll, None, Nothing?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 278
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:05-05:00'
sources: []
---

Imagine Scala is a kitchen where you cook data dishes.  
* **`null`** is like a broken plate that can’t hold anything—if you try to put food on it, the program crashes.  
* **`None`** is a *sealed* empty jar: it’s deliberately “no value” and you can safely ask “does this jar contain something?” and get “no.” It’s part of Scala’s `Option[T]` family that tells the compiler you’re aware there might be nothing.  
* **`Nothing`** is the kitchen’s *empty‑space type*: it has no instances, so a function that returns `Nothing` never actually returns; it always throws an exception or loops forever. It lets the compiler infer that code after it is unreachable.  
* **`Nil`** (with a capital “N”) is the empty list: like an empty shopping list. It’s a value of type `List[Nothing]`, so you can put any element later and still have a valid list.

So, use `None` for intentional emptiness, `null` to avoid (it breaks safety), `Nil` when you need an empty list, and `Nothing` to signal “this branch never finishes.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
