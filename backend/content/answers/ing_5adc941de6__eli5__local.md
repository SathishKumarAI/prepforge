---
qid: ing_5adc941de6__eli5__local
question: 'Explain: Classifying Documents & Queries by Language'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 248
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:22-05:00'
sources: []
---

Imagine a librarian who has to sort books into piles labeled *English*, *Spanish*, *Chinese*, etc., just from looking at the cover. A machine learning system does the same for digital documents and search queries, but it learns how to recognize each language by studying many examples first.

**How it works in plain steps**

1. **Learning phase (training)** – The librarian reads thousands of books whose languages are already known. She notes patterns: English often has “the”, “and”; Spanish uses accents like “á” and words ending in “‑o”; Chinese characters have no spaces and follow particular stroke orders.

2. **Feature extraction** – For each new document, the system counts how many of those characteristic words or letters appear, or checks character shapes for non‑Latin scripts.

3. **Decision (classification)** – Using a simple rule set or a tiny “decision tree,” it assigns the document to the language with the strongest match.

So, just as the librarian relies on familiar cues to pile books correctly, the machine uses learned patterns to tag any text in its proper language group.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
