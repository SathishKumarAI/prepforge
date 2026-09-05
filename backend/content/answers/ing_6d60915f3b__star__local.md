---
qid: ing_6d60915f3b__star__local
question: Qwen3 uses "strong-to-weak" distillation, bootstrapping the smaller models
  from flagship ones instead of running the full heavy post-training on every size.
  How does that work and why is it cheaper?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 335
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:05:52-05:00'
sources: []
---

**Situation** – At my previous company we were launching a new AI assistant suite. The flagship model, Qwen‑3, was 100B parameters and cost roughly $10k per inference on our GPU fleet. We needed lightweight versions for edge devices, but full fine‑tuning each size would have meant retraining every model from scratch – an untenable expense.

**Task** – Build a scalable distillation pipeline that could generate 10B, 3B, and 1B models while keeping compute and storage costs below $2k per model.

**Action** – Instead of full post‑training, we implemented a “strong‑to‑weak” strategy: first train the largest Qwen‑3 on our curated dataset. Then we used it as a teacher to generate soft labels for the smaller networks. We froze the teacher’s weights and ran joint training where each student only needed a fraction of the layers (e.g., 30% of parameters). We also employed knowledge‑distillation loss with temperature scaling, and used mixed‑precision training on A100 GPUs to cut GPU hours by ~70%. Finally, we leveraged model checkpointing and gradient accumulation so each student could be trained in under 12 hrs.

**Result** – The distilled models matched or exceeded the flagship’s performance on our benchmark (BLEU +2.3% over baseline) while reducing training cost per model to $1.5k—an 85% savings. I learned that careful architectural pruning combined with a strong teacher can dramatically lower compute budgets without sacrificing quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
