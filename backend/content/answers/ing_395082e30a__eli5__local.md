---
qid: ing_395082e30a__eli5__local
question: 'Explain: Multi-agent patterns in LlamaIndex — Multi-agent patterns in LlamaIndex
  | Developer Documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 204
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:11-05:00'
sources: []
---

Think of LlamaIndex like a big library where each book is a piece of data you want to ask about. In a single‑agent setup, one librarian (the AI) goes through the books and gives you an answer. Multi‑agent patterns are like having several librarians, each with a different specialty: one is great at summarizing, another at finding facts, and a third at spotting contradictions.

When you ask a question, the “question‑shaper” librarian first rewrites it into clear sub‑questions. The “searcher” librarian pulls relevant pages from the library. The “writer” librarian stitches those pages together into a readable answer. Finally, a “reviewer” checks for mistakes before handing it to you.

This teamwork lets LlamaIndex handle complex queries faster and more accurately—just like having a team of experts instead of one doing everything alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
