---
qid: ing_6f5c08fd65__fp__local
question: 'Explain: Unit Cost per Task — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 437
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:06-05:00'
sources: []
---

### Unit Cost per Task – Why it Matters for Agentic AI

The **unit cost** of an agent is the *expected resource expenditure* (time, energy, data) required to complete one instance of a target task.  
From first principles:

1. **Fundamental problem**: An autonomous system must decide *when* and *how* to act under uncertainty while respecting budget constraints.  
2. **Optimization view**: Minimizing the expected cost \(C = \mathbb{E}[R | \text{policy}]\) subject to a performance constraint \(P(\text{success}) \geq \tau\) is a classic *constrained Markov decision process*. The Lagrangian introduces a multiplier \(\lambda\), turning the trade‑off into
   \[
   J = P(\text{success}) - \lambda C.
   \]
   Thus, unit cost directly shapes the optimal policy: higher \(C\) pushes the agent to prefer cheaper sub‑tasks or to defer action until certainty rises.  
3. **Information‑theoretic link**: The *information bottleneck* principle shows that reducing uncertainty about the task outcome (via sensing or computation) costs bits of information, which translate into physical resources. Unit cost quantifies this conversion.  
4. **Geometric intuition**: In policy space, contours of constant unit cost are hyper‑ellipsoids; optimal policies lie on the intersection with the success manifold.

**Non‑obvious insight:** *Unit cost is not merely a budget metric—it also governs exploration versus exploitation.* A high per‑task cost forces the agent to invest in higher‑value information (e.g., a costly sensor read) only when it materially reduces overall expected cost, leading naturally to adaptive sensing strategies that are optimal yet sparse. This emergent sparsity is often overlooked but is critical for scaling autonomous systems to real‑world budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
