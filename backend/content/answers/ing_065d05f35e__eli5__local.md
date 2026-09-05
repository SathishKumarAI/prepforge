---
qid: ing_065d05f35e__eli5__local
question: What is contextual retrieval? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 221
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:34-05:00'
sources: []
---

**Contextual retrieval** is how an AI remembers what you’re talking about and uses that memory to give better answers.  
Think of it like a conversation with a friendly librarian who has a notebook. When you ask for “the book on gardening,” the librarian first looks at the last few questions you asked: maybe you were reading a cookbook, then a travel guide, and now you want gardening tips. By noting that order, the librarian can guess which “gardening” book you really mean—one about vegetable plots or one about ornamental shrubs—and pull it out quickly.

In AI terms, each question is a *token*; the system stores recent tokens in a short‑term buffer (the “notebook”) and keeps a longer list of earlier topics. When answering, it scans both lists to decide which information fits best—just like the librarian uses context to pick the right book. This makes responses feel more natural and relevant without needing complex math on the surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
