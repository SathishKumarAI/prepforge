---
qid: vq_f50876abf8__eli5__local
question: what is the difference var and val in scala?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 188
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:53-05:00'
sources: []
---

Think of **Scala** variables like boxes on a workbench.

* `var` is a *re‑usable* box.  
  You can put something inside it once, but later you’re free to open the box and change its contents. It’s like a jar that you can refill whenever you want.

* `val` is a *fixed* box.  
  When you first put something in it, the box locks so nothing else can be added or taken out. It behaves like a sealed envelope: the value stays exactly what you set it to for the rest of its life.

So, use **`var`** when the data will change (e.g., a counter that grows). Use **`val`** when the data should stay constant after creation—this gives clearer code and safer guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
