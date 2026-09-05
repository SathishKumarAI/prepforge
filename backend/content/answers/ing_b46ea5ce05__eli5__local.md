---
qid: ing_b46ea5ce05__eli5__local
question: 'Explain: How do you evaluate an agent? Compare trajectory evals and final-outcome
  evals.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 191
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:48-05:00'
sources: []
---

Think of an AI agent as a student taking a test in two ways.

**Trajectory evaluation** is like watching the student’s whole practice session: every step they take, each question answered, how long it takes, and whether they get stuck. It shows *how* the student learns, where they hesitate, and if their strategy improves over time.  
**Final‑outcome evaluation** looks only at the final score after all questions are done. It tells you *what* they achieved but hides the process that led there.

The first method is great for spotting problems early—maybe the agent keeps looping on a subroutine—and for guiding improvement. The second is simpler and useful when you just care about the end result, like passing an exam. Both are important: trajectory evals diagnose learning, final‑outcome evals confirm success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
