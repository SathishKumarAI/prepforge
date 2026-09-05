---
qid: ing_92d55c542a__eli5__local
question: 'Explain: :rocket: gRPC is faster than REST API'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 207
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:30:36-05:00'
sources: []
---

Think of a library that sends books to you.  
With **REST** the librarian writes a note on each book (“please read this page”), puts it in a separate envelope, and ships it by mail. You open the envelope, read the note, then open the book—there’s extra paper and handling for every request.

With **gRPC**, imagine the librarian uses a fast courier that carries both the book and the instruction inside a single, sealed package. The courier speaks in a compact language (Protocol Buffers) that the book already understands, so no extra notes are needed. Because the courier can carry many books at once and the instructions are tiny, the whole trip is quicker.

**gRPC** = one lightweight, bundled delivery; **REST** = separate envelope for each request. That’s why gRPC usually feels faster.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
