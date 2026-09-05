---
qid: ing_b3ee60895b__eli5__local
question: What retrieval metrics would you track - recall@k, MRR, nDCG - and what
  does each actually tell you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 227
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:22:12-05:00'
sources: []
---

Imagine a librarian who must hand out the best books for a reader’s question.  
**Recall@k** is like checking whether the right book appears in the first *k* titles she hands over—if it does, great; if not, the librarian missed an important pick.  
**MRR (Mean Reciprocal Rank)** looks at where that first correct book shows up overall: a high MRR means the right book usually lands near the top of her list, even if sometimes it’s slightly lower than perfect.  
**nDCG (normalized Discounted Cumulative Gain)** is more like judging how useful all the books in the hand‑out are together. It rewards having good books early on and still values decent ones that come later, but gives a sharper score when the top choices are truly excellent.  

Together they tell you: does your system surface the right answer quickly (recall@k), rank it high (MRR), and present an overall useful set of results (nDCG).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
