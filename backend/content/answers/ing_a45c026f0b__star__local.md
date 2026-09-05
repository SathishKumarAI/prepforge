---
qid: ing_a45c026f0b__star__local
question: 'Explain: Rubric — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 375
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:02:13-05:00'
sources: []
---

**Situation** – In my last role I was asked to build a self‑service “Mock Interview Kit” that would let hiring managers simulate candidate conversations with an LLM. The internal QA team wanted a clear grading rubric so the results could be compared across different interviewers and AI models.

**Task** – My goal was to design a scoring framework that (1) captured the quality of the AI’s prompts, (2) measured response relevance, and (3) provided actionable feedback for both candidates and interviewers. It had to be simple enough for non‑technical managers yet rigorous enough for data scientists.

**Action** – I started by mapping out the interview flow in a BPMN diagram and identified key checkpoints: greeting, skill‑questioning, behavioral probing, and closing. For each checkpoint I defined four criteria—Clarity, Depth, Contextual Fit, and Engagement—and assigned weighted points (40/30/20/10). I then built a Python script that parsed the LLM output, used spaCy to detect sentiment and keyword overlap, and scored each criterion automatically. The rubric was validated against 200 hand‑graded mock interviews; inter‑rater reliability reached an 0.87 Cohen’s Kappa.

**Result** – The kit now delivers instant pass/fail scores with a detailed breakdown in under two minutes per interview. Adoption by three hiring teams cut evaluation time from 45 minutes to 5, and the rubric helped reduce model drift incidents by 35 % over six months. I learned that a well‑documented, data‑driven rubric turns subjective AI output into actionable metrics for continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
