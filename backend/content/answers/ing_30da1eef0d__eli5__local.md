---
qid: ing_30da1eef0d__eli5__local
question: 'Q80: What is the difference between error analysis and automated evals,
  and when should you prioritize each?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 232
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:53:22-05:00'
sources: []
---

**Error analysis vs. automated evaluations**

Think of a student taking a test.  
*Automated evaluation* is like the teacher’s grading software: it gives you a score, lists which questions were wrong, and maybe suggests common mistakes. It works fast and covers all answers, but it only tells you **what** was wrong, not why.

*Error analysis* is the student sitting with the teacher to go through each mistake in detail. They ask why the answer was wrong, what misconception caused it, and how to fix that thinking. It’s slower and more hands‑on, but it uncovers hidden patterns that a quick score can’t see.

**When to use which**

- **Start with automated evals** when you need a broad view of performance or are comparing many models quickly.
- Switch to error analysis once a model is ready for deployment, or if the automated results look good but you still suspect subtle flaws—this deeper dive will help fine‑tune and build trust in the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
