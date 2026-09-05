---
qid: ing_8db2d30b37__eli5__local
question: 'Explain: Architecture 3: Staged Retrieval — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 221
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:12-05:00'
sources: []
---

Imagine you’re looking for a book in a huge library. The first step is to ask the librarian (the **retrieval stage**) for a short list of shelves that might contain your book. She doesn’t read every page; she just points you toward a handful of sections based on the title or subject you give her.

Next, you walk down those few aisles and skim each book’s table of contents (the **ranking stage**). Here you decide which one actually matches what you’re after, using your own judgment and any extra clues you have.

In AI, “Staged Retrieval—Hybrid Search” works the same way. The system first quickly pulls a small set of likely documents from its huge database (retrieval). Then it applies more detailed, often machine‑learning‑based ranking to pick the best ones for you. It’s fast because it only deep‑dives into a few candidates, yet smart because it still uses sophisticated scoring to find the most relevant answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
