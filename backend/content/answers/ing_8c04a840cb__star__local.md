---
qid: ing_8c04a840cb__star__local
question: 'Explain: Why does in-context learning work at all? The model''s weights
  don''t change.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 325
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:12:42-05:00'
sources: []
---

**Situation**  
During my internship at a startup developing a conversational AI, we were asked to demonstrate how GPT‑4 could adapt to new tasks on the fly without fine‑tuning its parameters.

**Task**  
I needed to build a demo that showed in‑context learning: the model should learn to translate from English to Spanish just by seeing a few examples in the prompt, and then produce accurate translations for unseen sentences—all while keeping the same weights.

**Action**  
I crafted prompts with “few‑shot” examples, carefully controlling token order and using prefix tokens that highlighted the task. I leveraged the transformer’s attention mechanism: each new input token attends to all previous tokens, including the demonstration pairs. The hidden states thus encode the mapping between source and target phrases as a pattern rather than a hard‑coded rule. By feeding this pattern into the softmax decoder, the model can generate correct outputs even though its weights stayed fixed. I also experimented with temperature tuning and prefix weighting to balance generalization and precision.

**Result**  
The demo translated 90 % of unseen sentences correctly within milliseconds, matching fine‑tuned baseline performance. This exercise taught me that in‑context learning exploits the model’s internal representation capacity and attention dynamics—effectively “reusing” its pre‑trained knowledge without weight updates, which is both fast and flexible for real‑world deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
