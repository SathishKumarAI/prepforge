---
qid: ing_bc63304996__star__local
question: 'Explain: PEFT vs. Full-Parameter — Fine Tuning Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 317
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:01-05:00'
sources: []
---

**Situation:** At my last company we were launching a conversational agent for healthcare support. The base GPT‑4 model was great, but the domain had highly specialized terminology and regulatory constraints that required fine‑tuning.

**Task:** I needed to adapt the model so it could generate accurate medical advice while keeping inference costs low enough for our mobile app’s edge deployment.

**Action:** First, I tried full‑parameter training on a 30 GB medical dataset. Although accuracy jumped by ~12 % in domain‑specific tests, the resulting 10 B‑parameter checkpoint was too large to ship to user devices. Switching tactics, I applied Parameter‑Efficient Fine‑Tuning (PEFT) using LoRA adapters: only 0.3 % of the weights were updated and stored as lightweight rank‑$r$ matrices. I trained these adapters for 4 epochs on the same data, then froze the rest of the model. During inference, we load the base checkpoint once and merge the LoRA tensors on demand, reducing memory footprint by ~85 %.

**Result:** The PEFT‑enhanced agent achieved a 10 % higher precision on domain tests compared to the full‑parameter baseline, while keeping the deployable size under 200 MB. I learned that for regulated, resource‑constrained domains, PEFT offers a sweet spot between performance and practicality, and it’s essential to benchmark both accuracy and deployment metrics before choosing a strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
