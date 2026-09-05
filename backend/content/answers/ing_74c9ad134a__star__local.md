---
qid: ing_74c9ad134a__star__local
question: 'Explain: How It Works — GitHub - ai-evals-course/judgy: Python package
  for estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 380
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:28:17-05:00'
sources: []
---

**Situation**  
At a fintech startup we were rolling out an automated compliance checker that relied on a large language model (LLM) to label transaction summaries as “high risk” or “low risk.” The QA team flagged that our confidence intervals for the LLM’s precision were too wide, making it hard to set regulatory thresholds.

**Task**  
I had to implement a robust statistical framework that would estimate tight 95 % confidence intervals (CIs) for the LLM-as-Judge metrics without exhausting GPU resources or inflating latency in production.

**Action**  
I chose the *judgy* Python package from GitHub. First, I wrapped our inference pipeline to produce probability scores per label and passed these through *judgy’s* `evaluate` function, which internally uses bootstrapping with 1 000 resamples. I configured the package to use a custom metric factory that computed precision and recall on the LLM predictions versus human‑annotated ground truth. To keep inference cheap, I ran the bootstrapped evaluations on a single GPU, leveraging *judgy’s* `batch_size=32` and `max_samples=2000`. Finally, I integrated the CI output into our monitoring dashboard so that any drift beyond ±3 % triggered an alert.

**Result**  
The new CIs narrowed from ±12 % to ±4 %, giving us a clear statistical basis for tightening our risk thresholds. Production latency stayed under 120 ms per request, and the compliance team approved the updated model with confidence. I learned how bootstrapping can be efficiently combined with LLM outputs to provide actionable uncertainty estimates in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
