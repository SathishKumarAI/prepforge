---
qid: ing_329086e873__eli5__local
question: 'Explain: What does BM25 actually compute? Walk me through the formula''s
  moving parts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 227
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:00-05:00'
sources: []
---

Think of BM25 as a *smart librarian* who decides how well a book matches a reader’s question.  
The formula has two main parts:

1. **Term importance (IDF)** – How rare the word is in all books. A common word (“the”) gets low weight, a rare word (“quasar”) gets high weight.  
2. **Match strength (BM25 score)** – How many times the word appears in the book and how long the book is. If the word shows up often but the book is very short, that’s a strong match; if it’s only once in a huge book, the match is weaker.

The librarian multiplies these two pieces for each word, then adds them up across all words in the question. The higher the final sum, the closer the book (document) matches the reader’s query. This simple “count‑and‑weight” method lets BM25 rank documents accurately without fancy math.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
