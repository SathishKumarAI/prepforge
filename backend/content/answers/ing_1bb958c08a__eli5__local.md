---
qid: ing_1bb958c08a__eli5__local
question: 'Explain: Long Context (1M+) — Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 296
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:19:55-05:00'
sources: []
---

Imagine you’re reading a giant comic book that’s over a million pages long. Your brain can’t hold all those pages at once, so it remembers only the last few chapters while still being able to answer questions about earlier parts. In AI, *long‑context models* are like that brain: they can process and remember huge amounts of text (1 million+ tokens) without losing track.

The taxonomy is a way to sort these models by how they keep everything in mind:

| Type | How it works | Analogy |
|------|--------------|---------|
| **Sliding‑window** | Looks at a moving window of the last few pages. | Like flipping back and forth between recent chapters. |
| **Chunk‑based** | Breaks the book into chunks, remembers each chunk separately. | Like having sticky notes for every chapter’s main idea. |
| **Sparse‑attention** | Focuses only on important parts, ignoring the rest. | Like reading only the highlighted sentences. |
| **Hierarchical** | Builds a summary tree: pages → chapters → whole book. | Like a table of contents that remembers key points at each level. |

Each strategy balances speed and memory differently, letting AI answer questions about far‑away parts while still being efficient. The taxonomy simply tells you which “reading plan” the model follows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
