---
qid: ing_4dd279d5f2__eli5__local
question: 'Explain: Output Distillation (Standard) — Knowledge Distillation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 279
total_tokens: 438
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:36-05:00'
sources: []
---

**Output Distillation (Knowledge Distillation)**  
Imagine a master chef who has spent years perfecting a recipe. The chef’s notebook contains all the subtle tricks—how long to stir, when to taste, how to balance flavors. A new cook wants to learn quickly but can’t spend months watching the chef every step. Instead, the chef lets the new cook try the dish and then gives feedback: “This part is too salty,” or “Add a splash of lemon.” The new cook records those notes—just the final taste hints, not the whole recipe—and uses them to make the dish on their own.

In AI, the *teacher* model (the master chef) is large and powerful. The *student* model (the new cook) is smaller and faster. We run many inputs through both models; the teacher’s soft outputs—probabilities that say how confident it is in each class—are collected. These probabilities are the “feedback notes.” The student learns by matching its own output to these notes, gaining the teacher’s knowledge without copying every internal detail. This process, called **output or standard distillation**, makes a lean model that still behaves like the big one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
