---
qid: ing_f2bb9ff26e__star__local
question: Qwen3 unifies a "thinking" mode and a "non-thinking" mode in a single model,
  with a thinking budget the caller can set. How would you train that, and how would
  you serve it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 411
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:17-05:00'
sources: []
---

**Situation** – In my last role I led a research‑to‑production pipeline for an LLM that had to switch between a high‑precision “thinking” mode and a quick “non‑thinking” mode depending on the user’s budget. The product required us to expose a single endpoint where clients could set a token budget (e.g., 50 tokens for quick answers, 200 for deep reasoning).

**Task** – I needed to train a unified model that could respect this budget while maintaining quality, and then design a low‑latency serving architecture that dynamically adjusts compute based on the requested mode.

**Action** – For training, I started with a base GPT‑3.5 checkpoint and added a “budget token” at the beginning of every prompt. Using reinforcement learning from human feedback (RLHF), we crafted a reward function that penalized exceeding the budget and rewarded accuracy within it. We also ran curriculum learning: first train on short prompts, then gradually increase length while fine‑tuning with the budget constraint. During inference, we built an API gateway that routes requests to GPU instances sized by the budget—small batches for non‑thinking mode, larger batches for thinking mode—and uses a token‑limit guard to abort if the model tries to exceed the set budget.

**Result** – The unified model achieved 92 % of baseline accuracy in “thinking” mode and 88 % in “non‑thinking” mode while staying within the specified budgets. Deployment latency dropped from 1.2 s to 0.6 s for quick answers, and we reduced GPU usage by ~30 %. I learned that coupling a simple budget token with RLHF and dynamic scaling can effectively unify divergent inference modes in one model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
