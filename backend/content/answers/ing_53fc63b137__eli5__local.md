---
qid: ing_53fc63b137__eli5__local
question: 'Explain: Quality Gates — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 227
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:50:13-05:00'
sources: []
---

**Quality Gates in RAG (Red‑Amber‑Green) Evaluation**

Imagine you’re baking a cake and have three checkpoints: *red* means “stop and fix”, *amber* means “watch closely”, and *green* means “all good”. In AI, a **quality gate** is that checkpoint. When the system generates an answer, it’s first checked against set rules (accuracy, safety, relevance). If it fails any rule, it’s tagged red; you’ll review or reject it. If it almost meets the rules but still needs a human eye, it’s amber; a person will double‑check. If it passes all checks comfortably, it gets green and is released automatically.

**Key terms**

- **RAG**: Red‑Amber‑Green – colors that signal how confident we are in an AI output.
- **Quality Gate**: The automated filter that decides the RAG status before the answer reaches a user or human reviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
