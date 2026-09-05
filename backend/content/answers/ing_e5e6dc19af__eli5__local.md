---
qid: ing_e5e6dc19af__eli5__local
question: 'Explain: Reciprocal Rank Fusion (RRF) — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 238
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:39:00-05:00'
sources: []
---

Imagine you’re looking for a recipe and you ask three friends to give you their top picks from different cookbooks.  
Friend A says the best cake is on page 3, Friend B says it’s on page 5, and Friend C says it’s on page 2.  
Instead of choosing just one friend’s suggestion, you combine them: every recipe gets a score that rewards being near the top for any friend. A recipe on page 2 (rank 1) from one friend gets a big boost, while a recipe on page 5 still earns points because it was a favorite of someone else.  

That’s **Reciprocal Rank Fusion (RRF)**: each search engine (or “friend”) gives a list of results ranked by relevance; RRF adds up the reciprocal ranks—1/(rank + k)—so items that appear high in any list rise to the top of the final, hybrid result set. The method is simple yet effective for blending diverse sources into one clear answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
