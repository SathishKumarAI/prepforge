---
qid: ing_697958c0b4__star__local
question: 'Explain: Full-Vocabulary OPD. — Rethinking On-Policy Distillation of Large
  Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 366
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:58:01-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were deploying an internal language model for fraud‑alert summarization. The production LLM had 350 M parameters and was too slow to run in real time on edge devices.

**Task:**  
I needed to compress the model by 70% while keeping its F1 score above 0.92 on a held‑out fraud dataset, using an on‑policy distillation approach that preserves vocabulary coverage for rare legal terms.

**Action:**  
I implemented *Full‑Vocabulary OPD* (On‑Policy Distillation). First, I set up a teacher–student pipeline where the student interacted with the environment (simulated user queries) and collected state‑action pairs. For every token the teacher produced, I stored the full softmax distribution over the entire vocabulary instead of a hard label. During training I used a weighted KL loss that emphasized rare tokens by scaling their logits with an inverse frequency factor. I also scheduled temperature annealing from 2.0 to 1.0 to keep diversity early and sharpen predictions later. Finally, I added a curriculum that gradually increased the sequence length from 32 to 128 tokens.

**Result:**  
The distilled model ran at ~30 ms per inference on an ARM Cortex‑A55 and achieved 93.5% F1—slightly above our target. It also maintained accurate handling of 12 domain‑specific terms that were previously dropped. I learned that preserving the full vocabulary distribution during on‑policy learning prevents catastrophic forgetting of rare but critical tokens, and that a simple temperature schedule can balance exploration and exploitation in distillation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
