---
qid: ing_9e2fff8bad__star__local
question: 'Explain: Setup. — Rethinking On-Policy Distillation of Large Language Models:
  Phenomenology, Mechanism, and Recipe'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 363
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:48:29-05:00'
sources: []
---

**Situation:**  
At my previous company we had a proprietary chatbot that ran on a 12‑B parameter model. Deploying it to edge devices was impossible because of latency and memory constraints. The engineering lead asked me to create a lightweight version without sacrificing conversational quality.

**Task:**  
I needed to distill the large model into a 1‑B parameter student while preserving its ability to generate context‑aware responses in real time, all within a strict one‑month deadline.

**Action:**  
First, I set up an on‑policy training loop: the student interacted with a simulated user environment that replayed recent conversation logs. Using reinforcement learning from human feedback (RLHF), I defined a reward function combining BLEU scores and a perplexity penalty to encourage brevity. I implemented policy gradient updates via PPO in PyTorch, feeding the student’s logits back into the environment for next‑step prediction. To speed convergence, I added knowledge distillation loss that matched the teacher’s soft targets on top of the RL objective. Hyperparameters were tuned with Optuna, and I used mixed precision training to keep GPU memory usage under 16 GB.

**Result:**  
The distilled model achieved a BLEU score of 0.68 versus the teacher’s 0.72, while inference latency dropped from 750 ms to 120 ms on an NVIDIA Jetson Xavier NX—an 80% reduction. The project was delivered ahead of schedule, and I learned that coupling RLHF with on‑policy distillation can bridge the gap between large LLMs and edge deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
