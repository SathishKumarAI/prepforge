---
qid: ing_5275db764f__eli5__local
question: 'Explain: Sampled-Token OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 241
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:51-05:00'
sources: []
---

Imagine teaching a child how to read by showing them whole sentences at first, then letting the child try writing one word at a time while you listen and correct. **Sampled‑Token OPD (On‑Policy Distillation)** works like that: a huge language model (the “teacher”) generates many possible words for each spot in a sentence. Instead of picking the single best word, we let the teacher “sample” several plausible tokens—just as the child might guess several letters. The student model learns from all those samples, learning not only the most common choice but also how to handle rarer or creative alternatives.  

**Key terms:**  
- **Token:** a single word or punctuation mark.  
- **On‑policy:** using the same rules that the teacher follows when picking tokens.  
- **Distillation:** teaching a smaller model by copying knowledge from a larger one.  

By sampling many tokens, the student gets richer feedback and becomes better at predicting diverse language, just as the child learns to read more flexibly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
