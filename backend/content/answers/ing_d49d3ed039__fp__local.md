---
qid: ing_d49d3ed039__fp__local
question: When would happen if object change value of a class?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 353
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:49-05:00'
sources: []
---

When you mutate a **class‑level** attribute (the one defined directly inside the class body, not in `__init__`), every *existing* and *future* instance that hasn’t overridden that name will see the new value immediately.  
Why? A class object is a namespace; instances look up attributes by first checking their own `__dict__`, then falling back to the class’s dictionary. Thus, changing the entry in the class dict rewires the lookup table for all unshadowed attributes.

Contrast this with an **instance** attribute: each object has its own copy in its own `__dict__`. Changing one instance’s value does not touch others because the class namespace remains untouched.

A subtle but powerful consequence appears when you store *mutable* objects (e.g., a list) as class attributes. Mutating that mutable (appending, removing) alters the shared state for all instances—often leading to bugs or, conversely, to intentional shared caches. The deeper principle is **closure over identity**: class attributes form a closed‑over environment for all instances; instance attributes are local scopes.

Non‑obvious insight: if you need per‑instance defaults that can be changed later, use *class* attributes as factory functions (e.g., `default_factory=lambda: []`) and assign to the instance inside `__init__`. This keeps shared state safe while still allowing each object its own copy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
