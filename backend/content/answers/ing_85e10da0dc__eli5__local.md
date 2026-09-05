---
qid: ing_85e10da0dc__eli5__local
question: 'Explain: Pattern 1: ColBERT as Primary Retriever — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 217
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:08:47-05:00'
sources: []
---

Imagine you’re looking for a book in a huge library. First, you ask the librarian (ColBERT) who quickly scans every shelf and gives you a list of “possible” books that might match your query—this is the **primary retriever** step. The librarian’s job is fast but not perfect; she can’t read each book fully to decide which one fits best.

Next, you take those shortlisted books to a specialist (the late‑interaction model). She reads the exact passages of each candidate and compares them with your question in depth—this is the **late interaction** step. Because she only works on a handful of books, her detailed analysis is much faster than reading everything from scratch.

So, ColBERT first narrows the field quickly; then a second model does a thorough match on that small set, giving you the best answer without wasting time on irrelevant material.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
