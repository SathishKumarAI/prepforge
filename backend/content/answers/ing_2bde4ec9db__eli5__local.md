---
qid: ing_2bde4ec9db__eli5__local
question: Which retrieval metrics would you use - recall@k, MRR, nDCG - and when does
  each matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 254
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:53-05:00'
sources: []
---

Think of a librarian who must fetch the most useful books for a student’s research.  
*Recall@k* is like asking, “Did the librarian hand you **any** of the student’s top‑10 favorite books among the first *k* they offered?” It cares only that at least one good book appears, not which ones or how many.  

*MRR (Mean Reciprocal Rank)* is the librarian’s speed test: “How far down in your pile did you find the **first** relevant book?” The lower the rank, the higher the score; it rewards finding a useful book early.  

*nDCG (Normalized Discounted Cumulative Gain)* asks the librarian to order the books by usefulness and gives more credit if highly relevant titles appear near the top, but still counts later good books with diminishing weight. It captures both relevance and ranking quality.

Use Recall@k when you only need at least one useful item quickly; use MRR when a single early hit is critical; use nDCG when the overall order of usefulness matters for the user’s experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
