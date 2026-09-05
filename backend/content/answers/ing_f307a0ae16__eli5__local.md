---
qid: ing_f307a0ae16__eli5__local
question: 'Explain: Build an Extractive QA Pipeline — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 199
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:59:14-05:00'
sources: []
---

Imagine you’re in a huge library that stores every book ever written, but you only want to find the exact sentence that answers a specific question. An **extractive QA pipeline** is like a librarian who first looks at all the books (the *document retrieval* step), then zooms into the most promising chapters (the *token classification* step), and finally pulls out the single sentence that contains your answer (the *answer extraction* step). 

In machine‑learning terms, the system first uses a search model to locate relevant documents. Next, a neural network scans those texts word by word, marking which words might start or end an answer. Finally, it picks the best pair of start and end positions, giving you the precise sentence that answers your query. This process is “extractive” because it never invents new words—it simply extracts the correct span from existing text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
