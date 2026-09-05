---
qid: ing_666ed132ea__eli5__local
question: Define pass@k. Why is the naive way of computing it problematic, and what's
  the fix?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 202
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:18:29-05:00'
sources: []
---

Imagine you’re running a treasure hunt where each clue points to a hidden prize in a long list of boxes.  
**Pass@k** is like asking: “Did we find the treasure among the first *k* boxes we checked?”  
We look at our top‑k guesses and see if any of them contain the correct answer.

The naive way—checking each guess one by one until you hit a success or run out of *k* guesses—can be wasteful. It stops early, so later guesses never get evaluated, which skews statistics especially when many tests are involved.  

**Fix:** Treat all *k* guesses uniformly: count how many correct answers appear in the top‑k for every test, then average across all tests. This “batch” approach gives an unbiased estimate of Pass@k and keeps computations simple and consistent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
