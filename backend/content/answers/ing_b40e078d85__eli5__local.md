---
qid: ing_b40e078d85__eli5__local
question: Why doesn't my program run faster with more CPUs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 230
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:24-05:00'
sources: []
---

Imagine you’re baking a cake in a kitchen that has only one oven. If you add more ovens (CPUs), you’d think the cake would finish instantly. In reality, each batch of batter still needs to be mixed, poured, and cooled before it can go into an oven, and the recipe steps must happen in order.  

In a program, many tasks are *sequential*: one step must finish before the next starts (e.g., loading data, preprocessing). Even if you give the code several CPUs, those sequential parts still run on just one CPU at a time. Only the truly independent parts—like sorting different chunks of data—can be split across CPUs.  

Also, splitting work creates overhead: each CPU must share memory, communicate results, and sometimes wait for others to finish (the “wait” step). If the program’s workload is small or highly dependent on sequential steps, adding more CPUs won’t speed it up; the extra processors sit idle or spend time coordinating rather than doing useful work.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
