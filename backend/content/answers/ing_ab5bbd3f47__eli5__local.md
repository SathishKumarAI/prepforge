---
qid: ing_ab5bbd3f47__eli5__local
question: 'Explain: The Context Window: Working Memory — AI Agents Explained - by
  Sairam Sundaresan and Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 200
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:09:30-05:00'
sources: []
---

Imagine your brain is a notebook that can only hold about 200 pages at once. Every time you read a sentence, the old page slides out so you keep room for new thoughts – this sliding‑window of pages is what we call a *context window*. In AI, it’s the same idea: the model keeps a limited amount of text in its “working memory” while generating answers. When you ask a question, the model first pulls the last few paragraphs (the 200‑page equivalent) into view, processes them, and then writes its reply. If the conversation gets longer than the window, the oldest parts disappear, so the AI can’t remember earlier details unless they’re repeated or summarized. Thus, the context window is like a notebook that constantly refreshes to keep only the most recent pages handy for quick thinking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
