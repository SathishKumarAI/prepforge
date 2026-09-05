---
qid: ing_2da1a911d9__eli5__local
question: 'Explain: Candidate — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 219
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:48:00-05:00'
sources: []
---

Imagine you’re running a cooking contest where every chef submits a dish (a “candidate”). The judges taste each dish and give it a score, but they don’t want to keep all the tasting notes forever—just the best ones on a leaderboard that everyone can see.

In machine‑learning terms, each candidate is an algorithm or model version. A **leaderboard system** collects the scores (accuracy, loss, etc.) from a set of test data and keeps only the top performers visible. It needs two main parts:

1. **Score collector** – runs every new model on the same test set and records its metric.
2. **Leaderboard manager** – stores the best‑scoring models in order, updates when a new contender beats an old one, and shows the current ranking.

Just as chefs keep their secret recipes private but reveal only the winners, this system lets engineers experiment freely while transparently highlighting the most promising models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
