---
qid: ing_76e70fc7fc__eli5__local
question: 'Explain: judgy — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 192
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:44:58-05:00'
sources: []
---

Imagine you’re at a school science fair where every project is judged by a panel of teachers. Each teacher writes a score, but the scores vary—some are high, some low. To know how confident we are in the overall “average” score, we look at a *confidence interval*: a range that probably contains the true average.

In AI terms, **LLM-as-Judges** means we let large language models (like ChatGPT) act as those teachers: they read an answer and give it a numeric rating. The *judgy* Python package collects all those ratings for many answers, then uses statistics to compute confidence intervals for each metric (accuracy, relevance, etc.). It tells you not just the average score but how reliable that average is—just like knowing whether the science fair’s top project truly deserves the gold medal or if it could be a fluke.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
