---
qid: ing_70e10f1849__eli5__local
question: Why is redundancy needed when using LB’s? How does this redundancy works?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 386
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:35:24-05:00'
sources: []
---

Imagine you’re trying to guess the weight of a bag of apples by looking at its size and color. If you only ask one question—“How big is it?”—you might miss that some bags are denser (heavier) even when they look similar in size. In machine learning, especially with linear‑basis models (often called “LB’s” for Linear Bases), we use several simple questions (features) at once: height, color, shape, weight of a single apple, etc. This set of features is called *redundancy*.

**Why redundancy matters**

1. **More clues → better guess** – Each extra feature gives another angle on the underlying pattern. Even if one feature is noisy or misleading, others can compensate.
2. **Avoiding blind spots** – A single feature might miss subtle relationships; multiple overlapping features help catch them.
3. **Statistical safety** – With many correlated clues, the model’s estimates become more stable (think of averaging several noisy measurements to get a clearer result).

**How it works**

When you feed all these redundant clues into a linear‑basis model, the algorithm learns how much weight each clue should carry. It solves for coefficients that best combine the clues to predict the target. If one clue is unreliable, its coefficient shrinks toward zero; the others still drive the prediction.

So redundancy in LB’s is like having a team of friends ask slightly different questions about the same mystery bag. Together they give you a clearer picture than any single question could alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
