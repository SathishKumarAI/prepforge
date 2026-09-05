---
qid: ing_0fd5466e6a__eli5__local
question: 'Explain: Related patterns — Pattern: Event sourcing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 212
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:27-05:00'
sources: []
---

Imagine a detective notebook that records every clue as it appears, rather than just writing the final conclusion. In **event sourcing**, instead of storing only the current state of a system (like “the bank account balance is $500”), you keep a chronological list of every event that changes that state (“$200 deposited on 1‑Jan,” “$50 withdrawn on 5‑Jan”). Later, to know today’s balance, the detective (or computer) simply reads the notebook from start to finish and adds up all the clues.  

This is useful because you can always reconstruct any past state, audit every change, or replay events if something goes wrong—just like a detective can re‑examine the case. In machine learning, event sourcing lets us rebuild training data or model updates exactly as they happened, ensuring reproducibility and traceability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
