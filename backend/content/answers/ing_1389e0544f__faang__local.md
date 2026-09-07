---
qid: ing_1389e0544f__faang__local
question: When should you split an agent into sub-agents, and what do you pass between
  them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 472
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:45-05:00'
sources: []
---

**Clarify**

You’re asked when to decompose a monolithic RL or planning agent into smaller “sub‑agents” (modules) and what data flows between them.  
*Assumptions to confirm:*  
1. The overall task is multi‑stage (e.g., navigation → manipulation).  
2. Sub‑tasks have distinct sensory/motor interfaces or objectives.  
3. You want modularity, scalability, or real‑time constraints.

**Approach**

1. **Identify independent sub‑domains** where the policy can be learned separately.  
2. **Define an interface contract** (state/goal representation).  
3. **Pass only what is necessary**: high‑level goals or belief states, not raw observations.  
4. **Coordinate via a scheduler or hierarchical planner**.

**Depth**

- *When to split*:  
  - **Task decomposition**: distinct objectives (e.g., “find target” vs. “pick up”).  
  - **Hardware constraints**: one agent runs on CPU, another on GPU/edge device.  
  - **Learning efficiency**: separate reward signals reduce credit‑assignment noise.  
- *What to pass*:  
  - **Goal vector / high‑level state** (e.g., target coordinates).  
  - **Belief over environment** if partial observability.  
  - **Action masks or feasibility flags** from lower layers.  
  - **Confidence scores** for uncertainty handling.

**Edge Cases**

- Over‑splitting leads to deadlock or excessive communication overhead.  
- Mismatched time scales can cause stale goals.  
- Shared parameters across sub‑agents may reintroduce coupling; test with ablation.

**Optimize & Communicate**

- Use *policy distillation* to merge back for deployment if latency is critical.  
- Profile inter‑agent bandwidth; compress goal vectors (e.g., via autoencoders).  
- Explain trade‑offs: modularity + parallelism vs. synchronization cost, and how you monitor it with logging dashboards.

This structure shows clear reasoning, depth in design choices, and awareness of practical pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
