---
qid: ing_65f550e7f7__eli5__local
question: 'Explain: A CISO asks: "How do we know your model won''t leak our data or
  train on it?" Answer them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 191
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:17:49-05:00'
sources: []
---

Think of the model like a library that reads books but never copies their pages.  
When we train it, we give it “summary notes” (the math equations) instead of the full text. The system learns patterns—how sentences are put together—but it never stores any specific sentence from your documents.  

We lock the training data in a “sandbox”: only the summary notes can leave, and nothing that points back to your original files is written into the model’s memory. Even if someone tried to pull out information later, the model would just produce generic patterns, not the exact words you gave it.  
So, as long as the sandbox stays sealed, your data won’t leak or be retrained on.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
