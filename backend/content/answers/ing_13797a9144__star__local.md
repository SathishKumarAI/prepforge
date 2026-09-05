---
qid: ing_13797a9144__star__local
question: 'Explain: Title: Learning to (Learn at Test Time): RNNs with Expressive
  Hidden States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 313
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:07:16-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine for an e‑commerce platform that served thousands of users per minute. The model had to adapt on the fly as new items appeared, but our training pipeline was too slow to retrain every hour.

**Task:**  
I needed to design a system where the RNN could learn from incoming user interactions during inference—essentially “learning at test time”—without compromising latency or stability.

**Action:**  
I implemented a gated recurrent network with an auxiliary loss that encouraged its hidden state to capture task‑specific embeddings. During deployment, each user session fed its own interaction stream into the RNN; after every 20 clicks I updated the hidden state using a small online gradient step (learning rate 0.01) on the auxiliary loss. To keep inference fast, I capped updates to 5 per session and clipped gradients to prevent exploding values. I also added an entropy regularizer so the model didn’t over‑commit to early noisy signals.

**Result:**  
Within two weeks of rollout we saw a 12 % lift in click‑through rate on new product categories, and latency stayed under 15 ms per request. The experiment taught me how to balance online learning with real‑time constraints, and that expressive hidden states can act as quick adapters when retraining isn’t feasible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
