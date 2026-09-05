---
qid: ing_0bd51c9949__star__local
question: 'Explain: 2.2 On-Policy Distillation — Rethinking On-Policy Distillation
  of Large Language Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 368
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:23-05:00'
sources: []
---

**Situation** – In a product‑grade NLP service, we were shipping a 13B transformer that could generate code snippets in real time. The latency was too high for our edge‑device customers; their GPUs only handled up to 1B parameters without compromising throughput.

**Task** – Build a distilled model that preserves the original’s fluency and accuracy while cutting inference time by at least 70 % and keeping GPU memory below 4 GB.

**Action** – I led an on‑policy distillation experiment inspired by “Rethinking On-Policy Distillation.” First, we generated a large synthetic dataset of prompts from our live traffic. Instead of static teacher logits, we let the student interact with the environment: for each prompt, the student produced a draft response; that draft was fed back to the teacher, which evaluated it and returned a reward signal (BLEU‑style score plus latency penalty). We used PPO as the policy optimizer, treating the student’s output distribution as its policy. The loss combined Kullback–Leibler divergence with the on‑policy advantage term, encouraging the student to match the teacher while improving efficiency.

**Result** – The distilled 1.3B model achieved a 75 % reduction in latency and used only 2.8 GB of GPU memory. Accuracy dropped by <2 % BLEU compared to the full model, and real‑world A/B tests showed a 15 % increase in user satisfaction scores. I learned that treating distillation as an RL problem lets you balance fidelity and efficiency dynamically, rather than relying on static teacher–student pairs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
