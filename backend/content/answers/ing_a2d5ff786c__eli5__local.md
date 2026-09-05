---
qid: ing_a2d5ff786c__eli5__local
question: 'Explain: Components Overview — ChatGPT System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 218
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:00-05:00'
sources: []
---

Imagine building a giant library that can answer any question instantly.  
**The “books” are the training data** – millions of pages of text that teach the library what language looks like.  
**The librarian’s brain is the transformer model** – it reads these books and learns patterns, so when you ask a question it can predict the next word that makes sense.  
**The library’s catalog (the tokenizer) breaks your sentence into manageable pieces**, just as a librarian would split a request into keywords.  
**The checkout system (the inference engine)** takes the predicted words, stitches them together, and hands back a polished answer.  
Finally, **a safety guard (moderation layer)** checks the output for anything that shouldn’t be shared, like a librarian ensuring no forbidden books are lent out.  

Together these parts let ChatGPT read, think, and speak—like a super‑fast, endlessly learning library that never closes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
