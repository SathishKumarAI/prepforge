---
qid: ing_ed72228cc9__eli5__local
question: 'Explain: Maybe there is something wrong with the — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 217
total_tokens: 381
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:51:15-05:00'
sources: []
---

Think of a huge library where every book is a map. A user’s request—“show me the quickest route from here to there”—is like asking the librarian to pull out the best copy for that journey. In machine learning, we train an algorithm (the librarian) on thousands of past trips so it learns which books (routes) are fastest under different traffic conditions.

Now imagine the librarian has a rule: “Always use the book from the east wing.” That’s fine if most routes start in the east, but if you’re in the west, you’ll be given a poor map. In Google Maps’ interview question, this is the bug: the design hard‑codes a single data source or assumption that doesn’t hold for all users. The solution is to let the algorithm choose from many sources—like letting the librarian consult both wings—so every request gets the best route no matter where you start.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
