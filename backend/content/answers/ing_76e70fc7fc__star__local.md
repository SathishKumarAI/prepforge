---
qid: ing_76e70fc7fc__star__local
question: 'Explain: judgy — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 343
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:49-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with comparing three open‑source LLMs on a set of 500 legal reasoning prompts. The raw accuracy scores varied wildly, and the committee demanded statistically sound confidence intervals so they could trust the results.

**Task:**  
I had to implement a reproducible method for estimating CIs around each model’s metric (accuracy, F1) while accounting for the fact that judgments were made by LLMs themselves—so the “judges” could be biased or inconsistent.

**Action:**  
I built on the open‑source *Judgy* package from GitHub. First I wrapped the prompt–response pipeline in a lightweight Python module that logged each judge’s confidence token. Then I used *Judgy*’s bootstrap routine to resample 10,000 times per model, feeding the LLM outputs as “judges” and computing 95 % CIs for each metric. I also tweaked the `alpha` parameter to reflect the higher variance observed in the judge responses. Finally, I visualized the intervals with seaborn to highlight overlaps.

**Result:**  
The confidence intervals revealed that Model‑A’s accuracy (0.78 ± 0.04) was statistically indistinguishable from Model‑B (0.81 ± 0.05), while Model‑C lagged (0.63 ± 0.06). The committee accepted the analysis, and I learned how to turn a research idea into a production‑ready statistical tool using *Judgy*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
