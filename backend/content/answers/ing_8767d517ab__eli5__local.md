---
qid: ing_8767d517ab__eli5__local
question: 'Explain: LLM-Specific Failure Modes — Reliability Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 231
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:10:42-05:00'
sources: []
---

Imagine a library where every book is written by a different person in a rush—this is like an LLM (Large Language Model). When you ask it a question, the “library” pulls out the nearest book that seems to match your words. Sometimes the closest book is actually about a completely unrelated topic, so the answer feels off‑base; this is a **hallucination** failure mode—like picking the wrong shelf because the title looks similar. Other times, the library’s shelves are arranged by popularity rather than accuracy, so it repeats the same popular but slightly wrong facts over and over—this is an **repetition bias**. Finally, if you ask about something very new, the library has no book on it yet, so it improvises from old stories—this is a **knowledge cutoff** failure. Each pattern shows why LLMs can be unreliable: they’re great at matching words but not always at checking truth or relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
