---
qid: ing_8aedfa3629__think__local
question: 'Explain: Pseudocode — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 455
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:14:38-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify that “On‑Policy Distillation” refers to knowledge transfer where a student policy learns from an expert (teacher) while following its own trajectory, as opposed to off‑policy replay.  
   * Assume we’re working in a reinforcement learning setting with discrete actions and a neural network policy π_θ.  

**2️⃣ Adopt a mental model**  
   * Treat distillation as supervised learning on the teacher’s action distribution (soft targets).  
   * Couple it with an RL objective to keep the student on‑policy: the student samples actions from its own current policy, collects trajectories, and updates both via gradient descent.  

**3️⃣ Step‑by‑step reasoning**  
   1. Initialise student parameters θ.  
   2. For each episode:  
      * Sample trajectory τ = (s₀,a₀,…,s_T) using π_θ.  
      * At each step t compute teacher’s logits z_t = f_T(s_t).  
      * Compute student logits ŷ_t = f_θ(s_t).  
      * Loss = KL(softmax(z_t/τ), softmax(ŷ_t/τ)) + λ·RL‑term (e.g., policy gradient with advantage estimates).  
   3. Backpropagate to update θ. Repeat until convergence.  

**4️⃣ Common pitfalls to avoid**  
   * Forgetting temperature scaling; without it the KL loss saturates.  
   * Mixing on‑policy data with off‑policy teacher samples—this breaks the Markov assumption.  
   * Neglecting variance reduction (e.g., baselines) in the RL term, leading to noisy updates.  

**5️⃣ Sanity checks & communication**  
   * Verify that the student’s action distribution gradually aligns with the teacher’s while still improving its own reward.  
   * Explain each component aloud: “We’re guiding the student with soft targets from the teacher while letting it explore via its own policy, ensuring stability and sample efficiency.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
