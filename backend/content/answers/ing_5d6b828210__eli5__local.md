---
qid: ing_5d6b828210__eli5__local
question: 'Q: How do embedding models learn semantic similarity?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 220
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:28-05:00'
sources: []
---

Think of an embedding model as a **smart librarian** that organizes books not by title, but by the *stories they tell*. When the librarian reads many books, she notices patterns: “The word ‘dog’ often appears near ‘bark’, ‘tail’, and ‘pet’.” She creates a tiny map for each word—a point in a multidimensional space—so that words that share similar stories end up close together.  

During training, the librarian looks at every sentence and adjusts each word’s map so that its neighbors on the map are exactly those words that usually appear nearby in real text. If “dog” and “puppy” frequently show up together, their maps converge; if “dog” and “car” never do, their maps drift apart.  

So, embedding models learn semantic similarity by **moving word points** closer or farther based on how often they co‑occur in the same context, just like a librarian arranging books by content rather than title.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
