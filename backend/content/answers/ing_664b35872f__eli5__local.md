---
qid: ing_664b35872f__eli5__local
question: 'Explain: Pattern: Self-RAG — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 189
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:18-05:00'
sources: []
---

Imagine you’re writing a story and every time you hit a blank page, you flip to your notebook of favorite quotes, pull out the best line that fits, and paste it into the story. Then you read what you just wrote, add another fitting quote from the notebook, and keep repeating until the tale feels complete.

That’s Self‑Retrieval Augmented Generation (Self‑RAG). It’s a way for an AI to write or answer questions by repeatedly looking up relevant information—like pulling quotes—from its own “knowledge notebook” (a database of text), then using that retrieved material to generate new content. After each pass, it checks the result and may fetch more data if needed. The pattern lets the model stay grounded in real facts while still crafting fluent, creative responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
