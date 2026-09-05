---
qid: ing_c952d5f580__eli5__local
question: 'Explain: Attention Complexity — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 199
total_tokens: 355
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:54:20-05:00'
sources: []
---

Imagine an enormous library where every book (token) can look at every other book to decide what matters most for a sentence. In an LLM, “attention” is that looking‑and‑deciding process: each token assigns a weight to all others, then mixes their information accordingly.

The cost of this is like a librarian who must cross‑check every pair of books. If the library has *n* books, there are about *n²* pairs, so the time and memory grow with the square of the text length (quadratic complexity). That’s why long passages become expensive: the attention mechanism still evaluates all interactions, even if many are irrelevant.

So, attention is a powerful but “all‑to‑all” eye that lets language models understand context, yet its quadratic nature makes very long inputs slow and memory‑hungry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
