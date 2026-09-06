---
qid: ing_29165e2879__think__local
question: Explain GRPO. Why did DeepSeek drop the value network that PPO uses?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 462
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:23:47-05:00'
sources: []
---

**1. Clarify the ask & assumptions**  
   - Identify *GRPO* (Goal‑conditioned Reinforcement Learning with Policy Optimization) vs standard PPO.  
   - Note that “DeepSeek” refers to a recent model that reportedly removed the value network in its PPO implementation.  
   - Assume the user wants an explanation of why a value function might be omitted and how GRPO differs.

**2. Adopt a mental framework**  
   - **Policy‑value decomposition**: understand what each component (policy, value) contributes.  
   - **Goal‑conditioning**: see how objectives change when goals are explicit.  
   - **Practical engineering trade‑offs**: consider training stability, sample efficiency, and compute constraints.

**3. Step‑by‑step reasoning**  
   1. Outline PPO’s reliance on a value network for advantage estimation (A = R + γV(s’) – V(s)).  
   2. Explain how GRPO replaces or augments this with goal‑conditioned returns or surrogate objectives that reduce variance without a separate V‑function.  
   3. Discuss DeepSeek’s design choice: removing the value network to simplify architecture, lower memory usage, and avoid bias from an imperfect critic while still leveraging on‑policy updates.

**4. Common traps to avoid**  
   - Confusing “value network” with “critic” in actor–critic terminology.  
   - Assuming removal always hurts performance; highlight that in some settings the policy can learn directly from returns.  
   - Overlooking that PPO’s clipping term still operates on advantages, which can be estimated differently.

**5. Sanity‑check & verbalize**  
   - Verify that GRPO indeed can function without a separate V‑function by checking literature or implementation notes.  
   - When explaining, first state the role of each component, then describe how DeepSeek’s architecture departs and why that departure makes sense given its constraints.  

This structured approach ensures you address both the theoretical difference (GRPO vs PPO) and the practical motivation behind omitting the value network in DeepSeek.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
