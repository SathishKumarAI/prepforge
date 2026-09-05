---
qid: ing_2d3dfbb8b1__star__local
question: 'Explain: Blog — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 312
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:35-05:00'
sources: []
---

**Situation** – In early 2023 I joined a startup that ran a content‑marketing platform for tech blogs. Our product had a feature where users could auto‑generate article outlines using an ML model, but the click‑through rate on those auto‑generated posts was only 12%, far below our target of 25%.

**Task** – My goal was to increase engagement by making the AI’s suggestions more relevant to readers’ cognitive interests: what topics they actually care about and how they think.

**Action** – I first built a “Cognition” layer on top of our existing transformer model. Using user interaction logs, I extracted latent semantic features—like question intent, sentiment polarity, and reading level—and fed them into a fine‑tuned BERT encoder. Then I implemented a reinforcement learning loop that rewarded outline suggestions which received higher dwell time and lower bounce rates. The pipeline ran on our GPU cluster with PyTorch Lightning, and we used Optuna for hyperparameter tuning.

**Result** – After deploying the new model in a staged rollout, click‑through rose to 24% (a 100 % lift over baseline), and average read time increased by 18%. I learned that aligning ML outputs with human cognitive signals can dramatically improve user engagement, and that iterative RL feedback is essential for fine‑tuning content relevance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
