---
qid: ing_c42061b281__faang__local
question: 'Explain: Applying the Principles — Don\u2019t Build Multi-Agents | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 372
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:17:09-05:00'
sources: []
---

**Clarify**  
We’re asked to explain why, when designing a cognitive system, we should *avoid* building multiple autonomous agents that share the same knowledge base and are trained independently (“don’t build multi‑agents”). I’ll assume the context is an end‑to‑end ML pipeline for tasks like dialogue or decision making.

**Approach**  
1. Identify benefits of a single, unified model (consistent reasoning, data efficiency).  
2. Contrast with pitfalls of separate agents (data fragmentation, coordination overhead).  
3. Illustrate with a concrete example (e.g., conversational AI).  

**Depth**  
A single‑agent architecture lets the model learn *joint representations*—the same embeddings are reused across all subtasks, reducing parameter count and improving generalization. Training data is pooled, so rare contexts still influence learning. In contrast, independent agents must each be exposed to sufficient samples for every sub‑skill; otherwise they overfit or under‑perform. Moreover, a shared policy avoids *semantic drift*: two agents might map the same intent to different actions, leading to inconsistent user experiences. Coordination mechanisms (e.g., message passing) introduce latency and complexity that scale poorly with agent count.

**Edge Cases**  
- Extremely heterogeneous tasks may benefit from modularity; here we’d opt for a hybrid approach.  
- Real‑time constraints might force lightweight agents despite the risks.  

**Optimize & Communicate**  
I’d recommend a *hierarchical* model: a global backbone plus task‑specific heads, keeping shared learning while allowing specialization. When explaining to stakeholders, I’d emphasize data efficiency, consistency, and maintainability—key metrics that resonate with FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
