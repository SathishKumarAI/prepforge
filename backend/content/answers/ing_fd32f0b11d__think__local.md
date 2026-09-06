---
qid: ing_fd32f0b11d__think__local
question: 'Explain: Design — Agentic AI Use Cases - by Neo Kim'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 544
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:43:55-05:00'
sources: []
---

**1. Clarify the Scope & Assumptions**  
- *Scope*: We’re explaining how Neo Kim proposes to design “agentic” (self‑directed) AI use cases—i.e., systems that can act autonomously with clear goals and constraints.  
- *Assumptions*: The reader knows basic AI terminology but not the specific framework Neo uses; we assume no prior exposure to his papers or talks.

**2. Adopt a Structured Mental Model**  
Use a **Design‑→ Goal‑→ Constraints‑→ Evaluation** flow:  
1. Identify the *problem domain* and user need.  
2. Define the *agent’s objective function* (what it should achieve).  
3. Specify *operational constraints* (ethical limits, safety nets, resource caps).  
4. Outline *evaluation metrics* to test agent performance.

**3. Step‑by‑Step Reasoning**  
- **Problem Identification**: Neo starts by mapping real‑world scenarios where human intervention is costly or slow (e.g., supply‑chain optimization).  
- **Objective Formalization**: He translates the domain into a reward function—often a weighted sum of business KPIs.  
- **Constraint Layering**: Safety constraints are encoded as hard rules or penalty terms; for instance, “never exceed budget X.”  
- **Learning Mechanism**: Neo chooses reinforcement learning (RL) or imitation‑learning hybrids to let the agent learn from simulated or historical data.  
- **Human‑in‑the‑Loop Checks**: He recommends periodic checkpoints where a human reviews the agent’s plans before execution.  
- **Iterative Evaluation**: Finally, he stresses continuous monitoring against pre‑defined metrics (e.g., cost savings, error rates).

**4. Common Pitfalls to Avoid**  
- *Over‑optimizing* the reward function → leads to unintended behaviors (“reward hacking”).  
- Ignoring *distribution shift*: agents trained on historical data may fail in new contexts.  
- Underestimating *human oversight*: removing it entirely can create safety risks.

**5. Sanity‑Check & Communicate Clearly**  
- Re‑explain the design cycle in plain language: “First we ask what the agent should do, then we tell it how it can’t do it.”  
- Use a concrete example (e.g., autonomous warehouse picker) to illustrate each step.  
- End with a quick recap of key takeaways so the audience can internalize the framework for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
