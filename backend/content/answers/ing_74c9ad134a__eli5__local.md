---
qid: ing_74c9ad134a__eli5__local
question: 'Explain: How It Works — GitHub - ai-evals-course/judgy: Python package
  for estimating a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 241
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:42:02-05:00'
sources: []
---

Imagine you have a group of friends who each give a score to a movie—some say it’s great, some think it’s okay. You want to know not just the average score but also how sure you are that the true “average taste” lies within a certain range (a confidence interval). The **judgy** package does exactly this for large language models (LLMs) acting as judges.

It first lets an LLM read a text and produce a numeric rating (the *metric*). Then, it repeats this process many times, each time slightly changing the prompt or the model’s internal randomness. By collecting all those ratings, **judgy** treats them like your friends’ scores: it calculates the average and uses simple statistics to estimate a confidence interval—telling you how tightly clustered the LLM’s judgments are.

So, just as you’d gather opinions from many people to get a reliable estimate of a movie’s quality, **judgy** gathers many LLM “opinions” to give you a trustworthy range for any metric it evaluates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
