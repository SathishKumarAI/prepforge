---
qid: ing_2b5f35bf94__fp__local
question: 'Explain: Pitfall 5: Cost Blindness — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 416
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:44-05:00'
sources: []
---

**Pitfall 5: Cost‑Blindness in Capability Assessment**

When an organization builds or buys a model, it tends to *measure* success by the quality of its outputs (accuracy, perplexity) and forgets that each “capability” is a **resource‐constrained function**.  
At first principles, every inference is a stochastic computation: a sequence of matrix multiplications, memory accesses, and communication steps. The total cost \(C\) can be expressed as  

\[
C = \underbrace{\sum_{l=1}^{L} n_l\,d_l}_{\text{compute}} + 
    \underbrace{\sum_{l=1}^{L} m_l\,s_l}_{\text{memory}} +
    \underbrace{\sum_{\text{edges}} e_{ij}\,b_{ij}}_{\text{bandwidth}}
\]

where \(n_l\) and \(d_l\) are the number of operations and dimensionality at layer \(l\), while \(m_l\) and \(s_l\) capture memory traffic.  
A blind focus on *accuracy* implicitly assumes that \(C\) is negligible, which rarely holds in production: inference latency, energy consumption, and cloud billing scale linearly with the terms above.

The deeper principle is **information–energy equivalence**—every bit of information processed costs physical resources. Thus a higher‑capacity model does not automatically deliver “better” service; it may exceed the budget for a given latency target.  

**Non‑obvious insight:** The *shape* of \(C\) over the hyperparameter space is often highly non‑convex, so small changes in architecture (e.g., adding a residual connection) can produce disproportionate cost spikes while offering marginal accuracy gains. Therefore, capability assessment must treat cost as an explicit objective and not merely a post‑hoc constraint.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
