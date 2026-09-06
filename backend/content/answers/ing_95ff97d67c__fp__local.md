---
qid: ing_95ff97d67c__fp__local
question: What security problems appear in a multi-agent system that do not exist
  with a single agent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 362
total_tokens: 539
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:24:15-05:00'
sources: []
---

In a single‑agent AI the adversary’s task is to compromise one process or its data; the threat surface is essentially the agent’s own code, memory and network ports.  
A multi‑agent system turns this into an *interdependent* optimisation problem: each agent must communicate, coordinate, and sometimes share state to achieve a global objective. The new security problems arise from **dependency coupling** and **information flow across autonomous entities**.

1. **State‑leakage through coordination protocols** – agents exchange partial observations or model parameters; an adversary can inject false data that propagates like a contagion, skewing the joint policy without touching any single agent’s code.  
2. **Consensus manipulation** – distributed optimisation (e.g., federated learning) relies on iterative aggregation; if one node submits biased gradients, it can steer the global model arbitrarily (the *Byzantine* problem).  
3. **Sybil and collusion attacks** – an attacker may spawn multiple lightweight agents that masquerade as distinct principals, overwhelming voting or resource‑allocation mechanisms.  
4. **Temporal attack surface** – the system’s state evolves through many rounds of interaction; subtle timing side‑channels can leak policy gradients over successive exchanges.

A non‑obvious insight: *the security cost scales with the entropy of inter‑agent communication*. Even perfectly secure individual agents become vulnerable when their collective protocol exposes high‑entropy joint states. Thus, protecting a multi‑agent system requires designing **information‑flow‑aware coordination**—not just hardening each agent in isolation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
