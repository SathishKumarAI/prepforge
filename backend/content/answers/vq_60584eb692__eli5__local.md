---
qid: vq_60584eb692__eli5__local
question: What is High Water Mark?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 206
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:13:10-05:00'
sources: []
---

**High Water Mark – a safety line you never cross**

Imagine a river that sometimes swells with rain. The *high water mark* is the highest point the water ever reached; it’s marked on a rock so people know how far the flood can spread.  
In programming, especially when we use stacks, heaps or memory pools, the high water mark is the maximum amount of space that has been used at any time during a program’s run. It tells you the worst‑case “peak” usage.  

So if a stack tops out at 200 KB once, its high water mark is 200 KB—even if later it shrinks back to 50 KB. Knowing this helps you size memory correctly and spot leaks (when the mark keeps climbing). It’s just a record of the highest “water level” that has ever been reached.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
