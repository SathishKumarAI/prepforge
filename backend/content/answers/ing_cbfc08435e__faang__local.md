---
qid: ing_cbfc08435e__faang__local
question: 'Explain: Implementation — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 589
total_tokens: 825
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:33:36-05:00'
sources: []
---

**Clarify**  
We’re asked to explain how *On‑Policy Distillation* works, as used in the ThinkiNG Machines Lab (TMML) for reinforcement learning agents. I’ll assume: 1) we have a trained teacher policy πᵗ; 2) a student policy πˢ is being learned online from the same environment; 3) “on‑policy” means data come from πˢ itself, not replay buffers.

**Approach**  
1. Generate trajectories using the current student policy.  
2. For each state s in those trajectories, query the teacher for its action distribution q(s)=πᵗ(·|s).  
3. Train the student to minimize a loss that blends the RL objective (e.g., PPO clipped surrogate) with a distillation term ‖πˢ(·|s)−q(s)‖² or KL divergence.  
4. Update πˢ online; the teacher remains fixed.

**Depth**  
- *Loss*: \(L = L_{\text{RL}} + \lambda \, D_{\text{KL}}\big(\pi^{s}(\cdot|s)\,\|\,\pi^{t}(\cdot|s)\big)\).  
- *Hyper‑parameter λ* controls the trade‑off; tuned via validation.  
- The teacher can be a deeper network or an ensemble, providing richer signals (e.g., entropy estimates).  
- Because data are on‑policy, we avoid distribution shift that plagues off‑policy distillation; however, the student’s exploration may diverge from the teacher, so λ must decay over time.

**Edge Cases**  
- If the teacher is suboptimal or overfitted, the student will inherit its mistakes.  
- Very high λ can stall learning (student stuck copying).  
- Sparse rewards: distillation may dominate early, but RL loss eventually re‑incentivizes exploration.  
- Non‑stationary environments: a fixed teacher becomes stale; periodic retraining is needed.

**Optimize & Communicate**  
To improve sample efficiency, we can:  
1) Use *teacher‑guided exploration*: bias action sampling toward high‑probability teacher actions while still allowing ε‑greedy steps.  
2) Cache teacher outputs to reduce forward passes during training.  
3) Gradually anneal λ so the student relies less on the teacher as it improves.

I’d explain this flow with a diagram: trajectory → teacher logits → distillation loss ↘, RL loss ↗, combined gradient updates πˢ. This demonstrates clear problem framing, concrete implementation steps, complexity (O(T·|A|) per step), and thoughtful edge‑case handling—all key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
