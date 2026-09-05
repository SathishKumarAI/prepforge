---
qid: ing_6d60915f3b__eli5__local
question: Qwen3 uses "strong-to-weak" distillation, bootstrapping the smaller models
  from flagship ones instead of running the full heavy post-training on every size.
  How does that work and why is it cheaper?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 185
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:29:37-05:00'
sources: []
---

Think of a big, well‑trained chef (the flagship AI) who can whip up any dish in seconds. Instead of teaching every apprentice the full recipe from scratch, the chef first shows them a simplified version: “Start with the main flavor, then add the details.” The apprentices—smaller models—watch and mimic this *strong‑to‑weak* process: they learn to produce good results by copying the flagship’s answers on a subset of questions, gradually filling in gaps themselves. Because each small model only needs to imitate the big one once (instead of being trained from scratch with massive data), we avoid the heavy “post‑training” cost that would otherwise be required for every size. In short, we bootstrap little models by letting them learn from a single powerful teacher, saving time and compute.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
