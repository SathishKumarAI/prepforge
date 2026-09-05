---
qid: vq_eac9ed4233__eli5__local
question: In Python, how do you make a copy of an object?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 226
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:42-05:00'
sources: []
---

Imagine your code is like a kitchen where you keep a recipe book (the object).  
If you want another chef to use the same book, you can hand‑over the original – that’s **shallow copying**. Both chefs point to the same pages; if one edits a page, the other sees the change. In Python we do this with `copy.copy(obj)` or simply assigning: `new = old`.  

If you want each chef to have an entirely separate book so they can rewrite without affecting the other, you make a **deep copy**. Think of photocopying every page; now changes in one book don’t touch the other. In Python that’s `copy.deepcopy(obj)`.  

So:  
* Shallow copy – share references (like passing the same book).  
* Deep copy – duplicate everything inside (like making a full photocopy).  
Use `copy` module for both cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
