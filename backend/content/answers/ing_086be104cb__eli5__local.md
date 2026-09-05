---
qid: ing_086be104cb__eli5__local
question: 'Explain: Backing indices — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 193
total_tokens: 352
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:49:03-05:00'
sources: []
---

Think of an Elastic document as a library book that can be read and searched by many people at once.  
A **backing index** is the actual shelf where the book’s pages are stored. Each time you write or update a document, Elastic first puts a fresh copy of those pages on a new “working shelf.” Once all changes are safe, it swaps this working shelf in place of the old one – that’s the *index* that serves search requests.  

So, backing indices are like temporary storage areas for edits; when ready, they replace the live index so readers always see consistent data without interruption.  
- **Index**: a logical collection of documents (the “shelf”).  
- **Backing index**: the physical copy used during updates before it becomes the main shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
