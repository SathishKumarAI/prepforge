---
qid: ing_adb012773f__star__local
question: 'Explain: 2.1 Notation — Rethinking On-Policy Distillation of Large Language
  Models: Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 329
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:28-05:00'
sources: []
---

**Situation** – At my previous company we had a large language model (LLM) deployed in production that was great at generating text but slow for real‑time inference on edge devices. We needed a lightweight distilled version without sacrificing quality.

**Task** – I was tasked with designing an on‑policy distillation pipeline: to train the small student model while it interacted with the teacher, learning not just from static outputs but from its own generated policy.

**Action** – First, I formalized the notation: let \( \pi_{\theta} \) be the teacher policy and \( \pi_{\phi} \) the student. I introduced a phenomelogical loss that balances cross‑entropy with a KL term weighted by an adaptive temperature schedule. Mechanistically, I implemented a rollout buffer where the student samples actions, receives rewards from a task‑specific metric (BLEU for translation), and updates via REINFORCE. The recipe involved alternating between teacher rollouts and student rollouts every 500 steps, using a shared transformer backbone with layer‑norm scaling to preserve stability.

**Result** – After three training cycles we reduced the model size by 60 % and inference latency by 40 ms on ARM CPUs while maintaining a BLEU score within 1.8 points of the teacher. I learned that rethinking distillation as an on‑policy problem unlocks richer feedback than static imitation, especially when paired with adaptive temperature control.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
