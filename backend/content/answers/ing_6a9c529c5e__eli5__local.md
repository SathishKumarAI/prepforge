---
qid: ing_6a9c529c5e__eli5__local
question: 'Explain: Reciprocal Rank Fusion (RRF) for Combining Results'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 205
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:25:05-05:00'
sources: []
---

Imagine you’re at a potluck where each friend brings a different dish. Everyone tastes all the dishes and writes down their top three favorites in order. Now you want to decide which dishes should go on the final menu, but you don’t know who’s most reliable.  

Reciprocal Rank Fusion (RRF) is like giving each dish a “popularity score” that rewards high ranks more than low ones. For every dish, you add 1 divided by (rank + k) – where *k* is a small constant that keeps the numbers fair. A dish loved by many friends (appearing near the top in several lists) gets a higher total score and moves up on the menu. RRF simply combines all those ranked lists into one clear, balanced ranking without needing to know which friend’s taste is best.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
