---
qid: ing_fe8f161b56__faang__local
question: 'Explain: Types of Reinforcements — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 574
total_tokens: 814
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:31:46-05:00'
sources: []
---

**Clarify**  
The interviewee wants a concise explanation of the *types of reinforcement signals* used in reinforcement learning (RL). I’ll assume they’re referring to **reward structures** that guide an agent: scalar rewards, dense vs sparse, shaped vs unshaped, extrinsic vs intrinsic. I’d also confirm whether they need examples from GFG or general theory.

**Approach**  
1. Restate the core concept of RL and why reinforcement signals matter.  
2. Enumerate the principal reward types.  
3. For each type, give a short definition, typical use‑case, and a quick note on pros/cons.  
4. Conclude with how GFG typically presents these concepts.

**Depth**  

| Type | Definition | Example | Pros | Cons |
|------|------------|---------|------|------|
| **Scalar (dense) reward** | Single numeric signal per step, often immediate. | +1 for reaching a goal each time step. | Fast learning, easy to compute. | May lead to myopic policies if not shaped. |
| **Sparse reward** | Reward only on rare events (e.g., final success). | 0 until episode ends, then +10. | Encourages exploration, aligns with true objective. | Credit‑assignment problem; slow convergence. |
| **Shaped reward** | Augmented signal that includes intermediate progress. | +1 for each step closer to target. | Accelerates learning via shaping function. | Risk of biasing policy away from optimal if shape is poor. |
| **Extrinsic vs Intrinsic** | Extrinsic comes from environment; intrinsic is self‑generated (curiosity, novelty). | Extrinsic: win/lose. Intrinsic: bonus for visiting unseen states. | Encourages exploration without external reward. | Hard to calibrate magnitude; may dominate extrinsic goal. |

GFG usually frames these in a tutorial style, providing code snippets and visual demos that illustrate dense vs sparse rewards.

**Edge Cases**  
- Very noisy rewards can mislead the policy.  
- Multi‑objective tasks need weighted combinations of intrinsic/extrinsic signals.  
- Reward hacking: agent exploits loopholes if shape is poorly designed.

**Optimize & Communicate**  
I’d mention that a common strategy is to start with dense shaping for rapid prototyping, then prune it to sparse rewards before deployment. If I were writing this in an interview, I’d keep the table concise, use bullet points, and finish by asking whether they’d like code examples or deeper dives into reward design trade‑offs. This keeps the answer within 160–240 words while covering structure, depth, and edge considerations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
