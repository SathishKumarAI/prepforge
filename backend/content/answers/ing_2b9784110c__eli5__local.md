---
qid: ing_2b9784110c__eli5__local
question: 'Explain: Run on each trace and log scores — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 205
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:24-05:00'
sources: []
---

Imagine you’re a teacher grading every student’s test in real time.  
**“Run on each trace”** means the system looks at every single execution (or “trace”) of your AI model—like checking each answer sheet one by one.  
**“Log scores”** is like writing down the grade for that answer in a notebook, so you can see how well the model did on that exact run.

Langwatch and Langfuse are tools that act as the teacher’s grading software. They collect every trace, compute evaluation metrics (the scores), and store them in an easy‑to‑browse log.  
So, each time your AI answers a question, Langwatch/Langfuse captures the trace, evaluates it against the expected answer, writes down the score, and keeps everything organized for later review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
