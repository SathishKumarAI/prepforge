---
qid: ing_40f6c3438f__eli5__local
question: 'Explain: Padding side — Text generation \u00b7 Hugging Face'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 223
total_tokens: 386
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:19:06-05:00'
sources: []
---

**Padding side in text generation (Hugging Face)**  

When a model reads sentences, it needs them all to be the same length. Think of each sentence as a row of tiles on a game board. If one row has fewer tiles than the others, we “pad” it with invisible tiles so every row lines up.  
The *padding side* tells the model whether those invisible tiles go at the **left** (before the real words) or the **right** (after). In most language models, padding is added to the right because the model processes text from left to right—like reading a sentence. Adding it to the left would shift every word’s position and confuse the model.

So, *padding side* = “where do you put the dummy tiles when making all sentences equal length?” Hugging Face lets you set it to `"right"` (default) or `"left"` depending on your task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
