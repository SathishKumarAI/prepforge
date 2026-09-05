---
qid: vq_97683b3f09__eli5__local
question: How does yield work in Scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 225
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:00-05:00'
sources: []
---

**Yield in Scala – think of it like a kitchen recipe**

Imagine you’re making a fruit salad (the collection).  
You have a list of fruits: apples, bananas, oranges.  
The *yield* keyword is the “serve” part of your recipe: for each fruit you pick, you decide how to present it—maybe slice it, maybe mix it with yogurt, or maybe just keep it whole.

In Scala terms:

- **Collection** – a list, array, or any group of items.  
- **for‑comprehension** – the loop that goes through each item.  
- **yield** – tells Scala to build a new collection from the results you produce inside the loop.

So, `for (f <- fruits) yield f.toUpperCase()` takes every fruit name, turns it into uppercase, and collects those strings into a fresh list. The original list stays unchanged; you get a brand‑new one with your transformed items.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
