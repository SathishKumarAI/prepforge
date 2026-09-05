---
qid: vq_95b742d145__eli5__local
question: Is multiple inheritance possible in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 209
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:20:48-05:00'
sources: []
---

Yes – Python lets a class inherit from more than one parent class, just like a child can inherit traits from both parents.  
Think of a “class” as a recipe that tells how to make an object (a dish). A *single‑inheritance* recipe uses only one base list of ingredients. With *multiple inheritance*, the recipe pulls ingredients from several lists at once, mixing flavors from each source.  

When you create a new class that lists two parents, Python builds it by first looking at the first parent’s methods and attributes, then the second if something isn’t found. If both parents define the same method, Python follows an order called “method resolution order” (MRO) to decide which one wins—usually the left‑most parent.  

So, just as a child can have hair color from one parent and eye shape from another, a Python class can combine behavior from several base classes in a predictable way.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
