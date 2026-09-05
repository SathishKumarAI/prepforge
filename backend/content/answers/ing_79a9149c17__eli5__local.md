---
qid: ing_79a9149c17__eli5__local
question: 'Explain: Title: When More Thinking Hurts: Overthinking in LLM Test-Time
  Compute Scaling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 215
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:49:15-05:00'
sources: []
---

Imagine your brain is a kitchen that’s making a sandwich.  
If you rush, you just spread the peanut butter and put the bread together—fast but maybe not perfect.  
If you pause to think about every grain of peanut butter, whether the bread should be toasted, how many slices of cheese, whether a pinch of salt would help, you spend more time and might even forget the sandwich altogether.

Large language models (LLMs) work like that kitchen. During *test‑time* (when they answer your questions), we can give them extra “thinking” steps to refine their answers. That sounds good, but each extra step costs compute—like adding a minute for every ingredient check.  
When the model spends too much time over‑analyzing, it uses more resources and slows down without improving accuracy. So, just as a sandwich maker should balance speed and care, LLMs must limit their thinking to keep answers fast and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
