---
qid: ing_90483fe0be__aws__local
question: 'Explain: Key hyperparameters — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 405
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:14-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to deploy a generative‑AI chatbot for customer support. The model had to stay on‑brand and avoid hallucinations while scaling to 10k concurrent users.

**Action – Hyperparameters & Fine‑Tuning**  
I anchored the solution around **Learning Rate (LR), Batch Size, Epochs**, and **Weight Decay**. I used a **cosine‑annealing LR scheduler** with an initial LR of 1e‑4, batch size 32, 3 epochs, and weight decay 0.01 to keep the model stable during fine‑tuning on our proprietary FAQ dataset (≈ 50k Q&A pairs).  

For alignment I introduced a **Reinforcement Learning from Human Feedback (RLHF)** loop:  
1. Generate responses → human reviewers score 0–5.  
2. Convert scores into a reward signal and fine‑tune with Proximal Policy Optimization (PPO).  
3. Iterate until the mean reward hit 4.2/5.

**Result**  
Post‑deployment, user satisfaction rose from **78 % to 92 %**, and average response latency dropped from 1.8 s to 0.9 s by leveraging SageMaker Endpoint with a multi‑AZ load balancer. Costs stayed below $15k/month thanks to spot instance usage for training and autoscaling on inference.

**Reflection (Bar‑raiser lens)**  
I demonstrated **Ownership** by driving the end‑to‑end pipeline, **Dive Deep** through meticulous hyperparameter tuning, quantified impact with clear metrics, and learned from an initial failure where too high LR caused divergence—prompting a rollback to smaller steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
