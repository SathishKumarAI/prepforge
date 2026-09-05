---
qid: vq_c48bdf03f1__eli5__local
question: What is Python's Scope Resolution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 215
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:53-05:00'
sources: []
---

Think of a kitchen where you keep different ingredients in separate drawers.  
A **scope** is just the drawer that contains a particular ingredient (a variable).  
When you want to use an ingredient, you look first in the drawer right next to you—your **local scope** (inside a function or a block). If it isn’t there, you reach into the next larger drawer—the **enclosing scope**, then the **global scope** (the whole kitchen), and finally the built‑in drawer that holds common items like `print`.  

In Python, this “look‑up ladder” is called **scope resolution**. It decides which variable a name refers to by checking each drawer in order until it finds one that contains the ingredient. If none is found, you get an error. This simple rule keeps variables tidy and prevents accidental sharing between different parts of your code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
