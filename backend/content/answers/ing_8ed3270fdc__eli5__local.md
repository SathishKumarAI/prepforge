---
qid: ing_8ed3270fdc__eli5__local
question: 'Explain: Q57: Explain KV Cache and why it matters for inference optimization'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 216
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:23:13-05:00'
sources: []
---

Think of a transformer model as a chef who writes recipes (the weights) but can’t remember every ingredient she’s already mixed while cooking.  
When the chef starts a new dish (a new sentence), she keeps a *kitchen counter* that stores the “key” (context clues) and the “value” (what the model has already calculated). Each time she needs to decide how much of an earlier ingredient should influence the current step, she simply looks at this counter instead of re‑mixing everything from scratch.  

The cache is called a **KV cache** because it holds *K*eys and *V*alues produced by each layer during decoding.  
During inference (serving one sentence after another), reusing these cached K‑V pairs means the model only processes the new words, not all previous ones again. This saves compute time and memory, making real‑time AI applications faster and cheaper.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
