---
qid: ing_6fe61ff86a__eli5__local
question: 'Explain: A user reports the RAG assistant gave a wrong answer. Walk me
  through your triage.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 236
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:25-05:00'
sources: []
---

Imagine you’re a librarian who just received a complaint that a book‑recommendation robot pointed readers to the wrong genre. First, **confirm the mistake**: ask the user for the exact question and the answer they got, then check it yourself in the system. If the answer truly mismatches the request, move on; if not, explain why it’s correct.

Next, **isolate the cause**. Is the robot pulling from a broken database (a data glitch), misreading the user’s intent (natural‑language misunderstanding), or was its training set incomplete (missing knowledge)? Test each possibility by giving the same question to another model or checking the source documents.

If it’s a data issue, flag the record for correction. If it’s an intent problem, tweak the prompt or add clarifying examples. If it’s missing knowledge, update the training set and retrain.

Finally, **document** what happened, how you fixed it, and what steps will prevent future repeats—so the system learns just like a good teacher learns from mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
