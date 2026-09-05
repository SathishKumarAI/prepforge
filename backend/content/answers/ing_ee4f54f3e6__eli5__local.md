---
qid: ing_ee4f54f3e6__eli5__local
question: How does reciprocal rank fusion work, and why fuse by rank instead of by
  score?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 229
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:28-05:00'
sources: []
---

Imagine you’re looking for the best recipe for chocolate cake and ask three friends—each gives a list of recipes ranked from “most delicious” to “least.” **Reciprocal Rank Fusion (RRF)** is like taking all those lists, noting where each recipe appears, then giving it a score that rewards being high up in any list. The higher the rank (1st, 2nd, …), the larger the contribution; lower ranks add very little. After adding up these contributions for every recipe, you sort them again—this new order is your fused recommendation.

Why use *rank* instead of raw scores? Think of each friend’s taste as a different scale: one might rate everything on a 1–10 scale, another on 0–100. If we just added the numbers, the friend with the larger scale would dominate. Ranks are scale‑free; every list treats its top item equally important, so the fusion fairly balances all voices without letting any single score system win by accident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
