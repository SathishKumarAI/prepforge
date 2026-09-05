---
qid: ing_fed81fcb21__star__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 321
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:58:30-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new language‑model API for developers. The internal QA team had been spending hours on manual grading of model outputs, and every release cycle was delayed because we couldn’t quickly verify whether the new training data improved factual accuracy.

**Task:**  
I needed to build a fast, cheap, deterministic evaluation pipeline that could run nightly, give us quantitative scores, and flag regressions before we pushed code to production.

**Action:**  
I designed a set of “code‑based evals”: small Python scripts that load the model, feed it a curated prompt list, parse the JSON response, and compare against gold answers using exact‑match, BLEU, and a custom numeric scoring function. I wrapped them in Docker containers, added a CI badge for pass/fail status, and stored results in an InfluxDB time series for trend analysis. The scripts ran in under 30 seconds on a single CPU core, and because they were deterministic, we could re‑run any failed test set to reproduce the issue.

**Result:**  
The new eval suite cut evaluation time from 4 hours to 45 minutes per release, reduced QA costs by 70%, and lowered regression incidents in production by 40%. I learned that a lightweight, deterministic code‑based approach can replace heavyweight manual grading while still giving engineers actionable metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
