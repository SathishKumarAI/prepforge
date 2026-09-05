---
qid: vq_1ea56703ce__eli5__local
question: '42 Question 42: How does Adaptive Softmax optimize LLMs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 209
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:04:53-05:00'
sources: []
---

Imagine a huge library where each book is a word the model might predict. A normal “softmax” would let the model look at every single book in the library every time it makes a guess—slow and exhausting when there are millions of books.

**Adaptive Softmax** turns that into a *tiered* search.  
First, it groups words by how often they appear: the most common ones get their own “small shelf” (a tiny set of books). Rare words share larger shelves that are only consulted if the model thinks a rare word is likely. When the model wants to pick a word, it first checks the small shelf; if none fits, it dives into the next tier, and so on.

Because most predictions involve common words, the model spends almost all of its time on the tiny shelves, making the whole process far faster while still handling every word in the vocabulary.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
