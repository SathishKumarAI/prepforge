---
qid: ing_f720280dea__star__local
question: 'Explain: With Langfuse results (manual export) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 339
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:42:45-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new recommendation engine powered by GPT‑4, and the QA team flagged that our evaluation metrics weren’t reflecting real user satisfaction. We needed a transparent way to audit each inference.

**Task:**  
I had to build an end‑to‑end pipeline that exported Langfuse trace data manually, ran it through Ai Evals, and produced a concise report for product managers within two days of a release.

**Action:**  
First, I scripted a Bash routine to pull the last 10k traces from Langfuse’s REST endpoint, converting them into JSONL files. Then, using the `ai-evals` CLI, I defined custom metrics (BLEU, ROUGE‑L, and a user‑sentiment score) that ran against those exports. To keep it human‑readable, I wrote a Python post‑processor that aggregated results per prompt type and generated a Markdown dashboard with Matplotlib heatmaps. Finally, I automated the whole flow in GitHub Actions so every PR triggered an eval run.

**Result:**  
The manual export process cut evaluation time from 3 days to 4 hours, and the new metrics revealed a 12 % drop in user satisfaction for “category‑shift” prompts—prompting a quick model fine‑tune that lifted scores back above baseline. I learned how to bridge production tooling with research evals efficiently and the importance of keeping dashboards lightweight yet actionable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
