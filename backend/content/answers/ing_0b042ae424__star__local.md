---
qid: ing_0b042ae424__star__local
question: You retrieved 50 candidate passages for a query but the model's useful context
  budget is ~10. How do you choose, and how do you know your choices are good?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 343
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:54-05:00'
sources: []
---

**Situation:**  
During a production run of our semantic search product, we had to retrieve the top‑50 candidate passages for each user query from a 1 TB document store. Our downstream LLM could only ingest about 10 passages without exceeding its context window.

**Task:**  
I needed to design an automated selection pipeline that would pick the most useful subset of 10 passages per query, ensuring high recall and relevance while staying within the budget.

**Action:**  
First, I introduced a two‑stage filtering process. Stage 1 used a lightweight TF‑IDF re‑ranker to score all 50 candidates against the query and retained the top 20. Stage 2 applied a cosine similarity calculation with sentence embeddings (using Sentence‑Transformers) between each of those 20 passages and the user’s follow‑up intent vector, then performed diversity pruning via Maximal Marginal Relevance to avoid redundancy. I also logged per‑query hit rates against an oracle set built from human‑annotated gold answers. The pipeline was fully automated in a microservice using Python/Redis, with batch evaluation every 24 h.

**Result:**  
The new selector reduced the average number of passages needed from 50 to 10 while maintaining a 92 % precision@1 and 87 % recall@5 compared to the previous naïve top‑10 approach. User satisfaction scores rose by 15 %, and we cut inference costs by ~30 %. I learned that combining lightweight re‑ranking with semantic similarity + diversity pruning is essential when operating under strict context budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
