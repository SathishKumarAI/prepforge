---
qid: ing_91bed0b07d__eli5__local
question: 'Explain: RAG Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 257
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:28:25-05:00'
sources: []
---

Think of an AI that writes stories by looking up facts in a huge library (the “retrieval” part) and then stitching them into sentences (the “generation” part). To see how well it works, we use **RAG Evaluation Patterns**—a set of simple tests that check two things:  

1. **Finding the right books (retrieval quality)** – Does the AI pull up pages that actually answer the question? Imagine asking for a recipe and getting a page about gardening; that would score low.  
2. **Writing with those pages (generation quality)** – Once it has the correct information, does it weave it into a clear, coherent paragraph? If it copies the page word‑by‑word but misses context, that’s still weak.

We run many questions through the system and record how often the right books are chosen and how well the final story uses them. This pattern gives us an overall picture of whether the AI is good at looking up facts, telling stories with them, or both—just like checking a librarian’s ability to find a book and a writer’s skill in using it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
