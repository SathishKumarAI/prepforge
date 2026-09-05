---
qid: vq_6badc63f74__eli5__local
question: Difference between Traits and abstract class in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 235
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:14:40-05:00'
sources: []
---

Think of Scala as building a recipe book for data pipelines.

**Traits** are like “cheat sheets” you can stick onto any dish.  
* They contain reusable instructions (methods) and placeholders (abstract methods).  
* You can mix several cheat sheets into one recipe, just as you can mix multiple traits into a single class.  
* They don’t carry state by themselves, but they let the recipe decide how to fill it.

**Abstract classes** are like “cookbooks” that already have some pages written but still need a few missing chapters.  
* They can hold both concrete and abstract parts and can keep their own private data (state).  
* A recipe can inherit from only one cookbook, so you can’t mix several at once unless you use traits.

So, if you want to share small, interchangeable pieces of logic without owning state, use a trait. If you need a base class that already holds shared data or must be inherited once, go with an abstract class. Both help keep your data‑engineering code clean and reusable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
