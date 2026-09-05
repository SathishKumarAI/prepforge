---
qid: ing_066492a0a9__eli5__local
question: 'Explain: RAGAS vs. Ground-Truth Metrics — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 205
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:41-05:00'
sources: []
---

Think of an AI that writes short stories. **Ground‑truth metrics** are like a teacher grading the story against a perfect copy—checking spelling, punctuation, and exact plot points. If the student’s version matches the reference exactly, it gets a high score; any deviation lowers the grade.

**RAGAS (Retrieval‑Augmented Generation Assessment System)** is more like a judge who reads the student’s story, then asks the teacher to look up facts in a library while they read. The judge checks whether the student’s answers are *contextually accurate* and *relevant*, even if they use different words or phrasing. It rewards clever paraphrasing and penalizes misinformation, much like a detective verifying that every claim is backed by evidence.

So, ground‑truth metrics compare to an exact copy test; RAGAS evaluates how well the AI supports its answers with trustworthy information, regardless of wording.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
