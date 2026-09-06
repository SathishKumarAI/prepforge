---
qid: ing_dbb2cfb2a7__fp__local
question: 'Explain: DPO: Direct Preference Optimization — Rlhf And Dpo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 487
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:46:12-05:00'
sources: []
---

**Direct Preference Optimization (DPO) – why it works without a reward model**

The core problem is *learning a policy that satisfies human preferences* when we only observe pairwise or scalar judgments, not explicit rewards.  
1. **Preference as likelihood** – Treat each preference \(y\in\{0,1\}\) between two completions \((c_1,c_2)\) as evidence for a *policy‑induced distribution*. The probability that the policy prefers \(c_1\) over \(c_2\) is  

   \[
   P(y=1|\theta)=\frac{\exp(\log\pi_\theta(c_1))}{\exp(\log\pi_\theta(c_1))+\exp(\log\pi_\theta(c_2))},
   \]

   which is exactly the *softmax* of log‑probabilities.  
2. **Log‑likelihood objective** – Maximise the likelihood of observed preferences:

   \[
   \mathcal{L}(\theta)=\sum_{(c_1,c_2,y)} y\,\log P(y=1|\theta)+(1-y)\,\log(1-P(y=1|\theta)).
   \]

   This objective is convex in the logits and, crucially, **does not require a separate reward model**.  
3. **Connection to RL‑HF** – In Reinforcement Learning from Human Feedback (RL‑HF) we first train a *reward model* \(R_\phi\), then optimise \(\pi_\theta\) with policy gradients on the expected return of \(R_\phi\). DPO bypasses the reward model by treating preferences as direct evidence for the policy’s own distribution, thus eliminating an entire source of bias and variance.  

**Non‑obvious insight:**  
Because DPO optimises a *pairwise log‑likelihood*, it is invariant to any monotonic transformation of the policy logits. Consequently, scaling or shifting the logits (e.g., temperature tuning) has no effect on training dynamics, making hyperparameter tuning simpler and the optimisation more robust than RL‑HF’s reward‑shaped returns.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
