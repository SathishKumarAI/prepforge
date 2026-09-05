---
qid: ing_d1d716e8cd__star__local
question: 'Explain: How do you train a reward model? Explain the preference data and
  the Bradley - Terry loss.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 383
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:29:11-05:00'
sources: []
---

**Situation**  
During my last role at a fintech startup we were building an AI‑powered chat assistant that needed to prioritize user satisfaction over generic completion scores. The internal QA team noticed the model was often polite but not helpful, so we had to create a reward system that reflected real user preferences.

**Task**  
I was tasked with training a reward model from scratch: collect preference data, formulate the loss, and fine‑tune a policy that maximizes this learned reward while staying safe and efficient.

**Action**  
First, we ran our baseline policy through a series of scripted scenarios and asked a panel of 200 domain experts to rank two generated responses per scenario. These pairwise rankings formed the *preference data*. We then encoded each ranking as a binary label (A > B). For training, I implemented the Bradley–Terry loss: for every pair \(i,j\) we predict scores \(s_i,s_j\), compute \(\sigma(s_i-s_j)\) with a sigmoid, and minimize \(-[y_{ij}\log\sigma + (1-y_{ij})\log(1-\sigma)]\). This converts ordinal preferences into a probabilistic likelihood. We trained a lightweight transformer head on top of the policy encoder using AdamW, clipping gradients at 1.0 to keep training stable.

**Result**  
After two weeks of fine‑tuning, the reward model achieved an accuracy of 84% against held‑out rankings. Deploying it in a reinforcement learning loop improved user satisfaction scores by 12% and reduced help‑desk tickets by 18%. I learned that carefully curated preference data and a principled Bradley–Terry loss are essential for aligning models with human values while keeping training tractable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
