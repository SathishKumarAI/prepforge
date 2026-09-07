---
qid: ing_8412bf72b6__faang__local
question: 'Explain: Preference optimisation: RLHF → DPO → GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 723
total_tokens: 958
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:51:56-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem*: We want to train a language model that follows user preferences. Traditional RL‑from‑human‑feedback (RLHF) uses a reward model trained on human labels, then policy gradients to fine‑tune the base model. Newer methods—Direct Preference Optimization (DPO) and Generalized Reward‑based Policy Optimization (GRPO)—attempt to streamline or generalize this pipeline.  
*Assumptions*:  
- We have paired preference data \((x, y^+, y^-)\).  
- The policy \(π_θ\) outputs a probability distribution over tokens.  
- A reward function can be derived from the preference data.

**2️⃣ Approach**  
1. **RLHF baseline**: Train a reward model \(R(x,y)\), then use PPO to maximize expected reward.  
2. **DPO**: Replace the RL step with a direct log‑likelihood ratio objective that approximates the policy gradient without sampling.  
3. **GRPO**: Generalize DPO by allowing arbitrary reward functions (not just binary preferences) and providing theoretical guarantees on convergence.

**3️⃣ Depth**  

| Method | Core Idea | Loss |
|--------|-----------|------|
| RLHF | \(π_{θ}\) updated via PPO to maximize \(\mathbb{E}[R(x,y)]\). | Policy‑gradient + KL penalty |
| DPO | Uses the **direct preference loss**:  
\[
L_{\text{DPO}}(θ)= -\log\frac{1}{1+e^{-(R^+(x)-R^-(x))/α}}
\]  
where \(R^\pm(x)\) are reward scores for preferred/less‑preferred outputs. It directly optimizes the preference probability without sampling trajectories. | Binary cross‑entropy in log‑odds space |
| GRPO | Extends DPO by allowing a continuous reward \(r(x,y)\). The objective becomes:  
\[
L_{\text{GRPO}}(θ)= -\log\frac{\exp(r^+(x)/α)}{\exp(r^+(x)/α)+\exp(r^-(x)/α)}
\]  
with theoretical guarantees that the policy converges to a **generalized** optimal policy for any reward. | Generalized log‑odds loss |

*Complexity*:  
- RLHF: \(O(N \cdot T)\) per epoch (N samples, T tokens).  
- DPO/GRPO: \(O(N)\) since no rollouts; cheaper and more stable.

**4️⃣ Edge Cases**  
- **Sparse preferences**: DPO/GRPO still work but may overfit if few pairs.  
- **Non‑binary rewards**: GRPO handles them, RLHF needs a reward model.  
- **Exploration**: RLHF can explore via sampling; DPO/GRPO are deterministic—may miss good policies.

**5️⃣ Optimize & Communicate**  
Explain that DPO reduces variance and training time by eliminating the sampling loop, while GRPO gives us a principled way to incorporate any reward shape. In practice, we’d start with RLHF for baseline comparison, then switch to DPO for quick prototyping, and finally use GRPO when we need to adapt to new reward signals (e.g., safety metrics). This progression showcases clear trade‑offs: variance vs. flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
