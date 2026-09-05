---
qid: ing_6fbc0388a3__eli5__local
question: The pilot RAG system is giving wrong answers on the customer's contracts.
  You're on-site tomorrow. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 254
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:33:08-05:00'
sources: []
---

Think of the RAG system as a librarian who looks up a book (the contract) and then writes a summary for you. If the librarian gives you wrong information, first check the *search* step: is she actually finding the right book? Ask her to show the list of titles she pulled from the library’s catalog. If the list looks off, the indexing or query might be broken—maybe the tags on the books are missing or the search engine is mis‑ranked.

Next, look at the *writing* step: once she has the right book, does she read it correctly? Ask her to read aloud a short paragraph from the contract. If she misreads it, the language model that generates the answer might be “hallucinating” or using the wrong prompt format.

Finally, run a quick sanity test on a known contract: give the system a question with an obvious answer and see if it matches. This two‑step check—search first, then generation—lets you isolate whether the issue is in retrieving the right documents or in turning them into answers. Good luck tomorrow!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
