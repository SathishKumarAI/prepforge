---
qid: ing_f6f0e4c1ba__eli5__local
question: 'Explain: Multiple reference points — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 204
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:05:46-05:00'
sources: []
---

Think of Elastic‑search as a smart librarian who can sort a list of books not just by one rule, but by several “reference points” that you give her.  
A *reference point* is simply a value you tell the system to use as a baseline for sorting—like the current date or a particular user’s rating. When you ask it to sort by “distance from today” and also by “popularity,” the librarian first looks at how far each book is from today, then breaks ties using popularity.  

You can mix different data types (numbers, dates, text) as long as they’re comparable. The system calculates a score for every item based on all those points and returns the list in that blended order.  
So, multiple reference points let you rank results by several criteria at once, just like sorting books by both release date and bestseller status.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
