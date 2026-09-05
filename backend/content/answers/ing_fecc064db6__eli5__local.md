---
qid: ing_fecc064db6__eli5__local
question: 'Explain: How Each Architecture Processes a Query-Document Pair'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 338
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:32-05:00'
sources: []
---

Imagine you’re at a library where every book and every question is written on a giant sheet of paper. Three kinds of “librarians” help you find the right book.

**1. The Keyword Librarian (Bag‑of‑Words)**  
She looks only at which words appear in both the question and the book, no matter where they are or how many times. If the word “apple” shows up in the query and also in a book, she gives that book a higher score. She treats every word as an independent tile on a board.

**2. The Context Librarian (Recurrent Neural Network)**  
She reads the question and the book one word at a time, keeping a mental note of what came before. This lets her understand phrases like “red apple” versus “apple pie” because the order matters. Her memory is a single list that grows as she reads.

**3. The Attention Librarian (Transformer)**  
She looks at every word in the question and every word in the book simultaneously, and for each pair decides how strongly they should talk to each other. She can instantly see that “apple” in the query matches “fruit” in a sentence far away, giving a deeper sense of meaning without reading sequentially.

All three finish with a single number: how well the book answers the question. The difference is whether they compare just presence (Keyword), remember order (Recurrent), or weigh every possible word pairing at once (Attention).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
