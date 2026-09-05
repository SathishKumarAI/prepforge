---
qid: ing_bdde0b74c0__eli5__local
question: 'Explain: Title: Measuring Chain-of-Thought Monitorability Through Faithfulness
  and Verbosity'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 237
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:38:01-05:00'
sources: []
---

Imagine a recipe book that writes out every step of making a cake in full detail—mixing, whisking, baking—so anyone can follow along. In AI, when a model “thinks” it also writes out its internal steps (the *chain‑of‑thought*). We want to check two things:  

1. **Faithfulness** – Do the written steps actually match what the model did? It’s like asking whether the recipe truly reflects the baker’s actions or if someone added extra, unrelated instructions.  
2. **Verbosity** – Are the steps too long or too short? If the recipe is a single sentence, it’s concise but might miss details; if it’s a page of fluff, it’s hard to read and may distract from the real work.

Measuring *monitorability* means testing how well we can see and trust these written thoughts: are they accurate (faithful) and appropriately detailed (not overly verbose)? This helps us understand and control what an AI is really doing behind the scenes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
