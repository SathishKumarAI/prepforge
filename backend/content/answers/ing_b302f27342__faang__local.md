---
qid: ing_b302f27342__faang__local
question: 'Explain: Sub-Agent Architectures — What is Context Engineering'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 532
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:39:58-05:00'
sources: []
---

**Clarify**

You’re asking about *sub‑agent architectures* in reinforcement learning, specifically how a **context engineer** can be used to give each sub‑agent a tailored view of the environment.  
Assumptions I’d confirm:  

- The task is decomposable into multiple subtasks (e.g., navigation + manipulation).  
- Sub‑agents share a global policy backbone but need different state representations.  
- “Context” means any auxiliary signal that re‑weights or masks features for a sub‑agent.

**Approach**

1. **Define the global state space \(S\)** and identify orthogonal sub‑tasks \(\{T_i\}\).  
2. For each \(T_i\), design a *context vector* \(c_i = f_i(s)\) that selects or transforms relevant features.  
3. Feed \((s, c_i)\) into the shared policy network; the context acts as an attention mask over hidden units.  
4. Train end‑to‑end with multi‑task RL loss or hierarchical RL where a high‑level controller outputs contexts.

**Depth**

- *Context Engineering* is essentially **dynamic feature gating**: \(h = \sigma(W[s] + V[c])\).  
- It allows each sub‑agent to operate in a low‑dimensional manifold while still leveraging shared weights.  
- Training uses policy gradients; the context generator can be supervised (e.g., predict which features are useful) or learned jointly via auxiliary losses.  
- Complexity: \(O(|S| + |C|)\) per step, linear in state and context sizes; memory is dominated by shared network parameters.

**Edge Cases**

- If contexts overlap too much, sub‑agents may collapse into a single policy (lack of specialization).  
- Poorly learned contexts can lead to catastrophic forgetting.  
- Test with synthetic environments where ground truth relevance is known; monitor KL divergence between context distributions.

**Optimize & Communicate**

- Add *context regularization* (e.g., entropy penalty) to encourage diverse sub‑agent views.  
- Use curriculum learning: start with fixed hard contexts, then gradually learn them.  
- In a interview, I’d illustrate with a diagram of a shared network and multiple context gates, emphasizing how each gate slices the state space for its sub‑task.  

This structured explanation shows clear problem framing, a concrete plan, technical depth, edge‑case awareness, and actionable optimizations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
