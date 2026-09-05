---
qid: ing_9f4ebd079c__eli5__local
question: Budget the compute and latency for the onboard stack. What breaks when a
  model gets bigger?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 235
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:49:58-05:00'
sources: []
---

Imagine your computer is like a tiny kitchen that must whip up a meal (the AI answer) in a fixed time.  
The “model” is the recipe book: each line of the book tells the kitchen to mix ingredients (multiply‑add operations).  

When the recipe book grows, two things get strained:

1. **Compute (workload)** – every extra page means more cooking steps. The stove (CPU/GPU) has to do more math, so it heats up and runs slower, just like a busy chef gets tired.

2. **Latency (time per dish)** – the kitchen can’t finish in the same 1‑second slot because there are more steps to execute. Even if you add more burners (parallel cores), the recipe still needs each step in order, so the overall wait time rises.

Thus, larger models break by overloading the processor’s capacity and lengthening the response time, just as a cramped kitchen can’t keep up with an ever‑expanding menu.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
