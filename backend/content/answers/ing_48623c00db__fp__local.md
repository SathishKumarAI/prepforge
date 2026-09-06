---
qid: ing_48623c00db__fp__local
question: 'Explain: Step 10. Scale to multiple agents — How Do AI Agents Work - by
  Neo Kim and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 471
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:14-05:00'
sources: []
---

### Why Multiple‑Agent Scaling Is Needed  
When a single agent is trained on a narrow task it learns a *policy* that maps observations \(o_t\) to actions \(a_t\). In complex real‑world settings the state space explodes: different sub‑tasks, environments, and goals interact. A monolithic policy would have to encode an enormous joint distribution \(p(a|o)\), which is statistically impossible with finite data and computational budget.

### The Principle of Decomposition  
By partitioning the overall problem into *modules*—each a smaller RL sub‑problem—we reduce sample complexity. Formally, if we write the global policy as \(\pi^*(a|o)=\prod_i \pi_i(a_i|o)\), each \(\pi_i\) only needs to model a conditional distribution over its own action space given local observations \(o_i\). The product of these simpler distributions approximates the joint, leveraging **conditional independence**. This is essentially *factorized value functions* in hierarchical RL.

### Coordination via Communication  
Agents must still respect global constraints (e.g., resource limits). We introduce a lightweight communication protocol: each agent emits a *message* \(m_i\) summarizing its intent or state. The joint policy becomes \(\pi(a|o,m)\), where \(m=\{m_1,\dots,m_k\}\). Training jointly on the messages yields emergent coordination without explicit programming.

### Non‑Obvious Insight  
Most people think scaling is just “more compute.” In fact, *reducing dimensionality* by factorizing and communicating is the key. The bottleneck isn’t raw GPU cycles; it’s the combinatorial explosion of joint action spaces. By letting agents learn to **compress** their local information into concise messages, we turn a high‑dimensional optimization problem into several low‑dimensional ones that can be solved efficiently in parallel.

---  
*Step 10* therefore is not a mere scaling trick—it’s an application of factorization and communication principles from probabilistic graphical models to reinforcement learning, turning the curse of dimensionality into a tractable coordination problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
